import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";
import { TEST_MODE_ENABLED } from "@/utils/constants";

const PEARAI_SERVER_URL = process.env.PEARAI_SERVER_URL;

async function createCheckoutSession(request: NextRequest & { user: User }) {
  const supabase = createClient();

  try {
    const { priceId } = await request.json();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json(
        { error: "Failed to get session" },
        { status: 401 },
      );
    }

    // Check if user already has a subscription
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { error: "Failed to get user" },
        { status: 401 },
      );
    }
    const { data: subData, error } = await supabase
      .from("subscriptions")
      .select("status")
      .eq("user_id", user?.id)
      .eq("status", "active")
      .limit(1);
    if (error) {
      console.error("error checking user existing subscription", error);
      return NextResponse.json(
        {
          error:
            "Error checking user existing subscription. Please contact PearAI team.",
        },
        { status: 500 },
      );
    }
    if (subData && subData.length > 0) {
      return NextResponse.json(
        { error: "User already has an active subscription" },
        { status: 400 },
      );
    }

    // Create checkout session
    const token = session.access_token;
    const url = `${PEARAI_SERVER_URL}/payment${TEST_MODE_ENABLED ? "/test" : ""}/create-checkout-session`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ priceId }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Unauthorized. Please log in again." },
          { status: 401 },
        );
      }
      const errorBody = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}. Error: ${errorBody?.error}`,
      );
    }

    const data = await response.json();
    return NextResponse.json({ url: data.url });
  } catch (error) {
    let errMsg = "Error creating checkout session: ";
    if (error instanceof Error) {
      errMsg += `: ${error?.message}`;
    } else if (typeof error === "string") {
      errMsg += `: ${error}`;
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export const POST = withAuth(createCheckoutSession);
