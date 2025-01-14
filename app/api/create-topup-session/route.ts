import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";
import { STRIPE_PRICE_IDS } from "@/utils/constants";
import { TEST_MODE_ENABLED } from "@/utils/constants";

const PEARAI_SERVER_URL = process.env.PEARAI_SERVER_URL;

async function createTopUpSession(request: NextRequest & { user: User }) {
  const supabase = createClient();

  try {
    const { amount } = await request.json();
    const priceId = STRIPE_PRICE_IDS.TOP_UP_CREDITS[amount];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }
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
    const url = `${PEARAI_SERVER_URL}/payment${TEST_MODE_ENABLED ? "/test" : ""}/create-topup-session`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ priceId, amount }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `HTTP error! status: ${response.status}`,
      );
    }

    const data = await response.json();
    return NextResponse.json({ url: data.url });
  } catch (error) {
    console.error("Error creating top-up session:", error);
    return NextResponse.json(
      { error: "Failed to create top-up session" },
      { status: 500 },
    );
  }
}

export const POST = withAuth(createTopUpSession);
