import { STRIPE_PRICE_IDS } from "@/utils/constants";
import { createClient } from "@/utils/supabase/server";
import { withAuth } from "@/utils/withAuth";
import { User } from "@supabase/supabase-js";
import { NextResponse, NextRequest } from "next/server";

const PEARAI_SERVER_URL = process.env.PEARAI_SERVER_URL;

async function upgradeSubscription(request: NextRequest & { user: User }) {
  const supabase = createClient();

  try {
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
    const url = `${PEARAI_SERVER_URL}/payment/update-subscription`;

    const { subscriptionId } = await request.json();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        subscriptionId,
        annualPriceId: STRIPE_PRICE_IDS.ANNUAL,
      }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Unauthorized. Please log in again." },
          { status: 401 },
        );
      }
      const msgError = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}. Error: ${msgError?.message}`,
      );
    }

    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    let errMsg = "Error upgrading subscription: ";
    if (error instanceof Error) {
      errMsg += `: ${error?.message}`;
    } else if (typeof error === "string") {
      errMsg += `: ${error}`;
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export const POST = withAuth(upgradeSubscription);
