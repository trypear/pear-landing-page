import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

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

    const token = session.access_token;

    const response = await fetch(
      `${PEARAI_SERVER_URL}/payment/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ priceId, userId: request.user.id }),
      },
    );

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
