import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

const SERVER_URL = process.env.PEARAI_SERVER_URL;
const TEST_MODE_ENABLED = process.env.NEXT_PUBLIC_TEST_MODE_ENABLED === "true";

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

    const token = session.access_token;

    const endpoint = TEST_MODE_ENABLED
      ? `${SERVER_URL}/payment/test/create-checkout-session`
      : `${SERVER_URL}/payment/create-checkout-session`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ priceId, userId: request.user.id }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Unauthorized. Please log in again." },
          { status: 401 },
        );
      }
      const errMsg = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}. Error: ${errMsg?.error}`,
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
