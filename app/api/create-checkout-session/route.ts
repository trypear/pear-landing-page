import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

const SERVER_URL = process.env.SERVER_URL || "http://127.0.0.1:8000";
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

    const response = await fetch(
      endpoint,
      {
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

      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ url: data.url });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 },
    );
  }
}

export const POST = withAuth(createCheckoutSession);
