import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";

const getDashboardUsage = async (request: NextRequest) => {
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
    const res = await fetch(`${process.env.PEARAI_SERVER_URL}/get-usage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      if (res.status === 401) {
        return NextResponse.json(
          { error: "Unauthorized. Please log in again." },
          { status: 401 },
        );
      }
      const errorBody = await res.json();
      throw new Error(
        `HTTP error! status: ${res.status}. Error: ${errorBody?.error}`,
      );
    }

    const data = await res.json();
    return NextResponse.json({
      percent_credit_used: data.percent_credit_used,
      remaining_topup_credits: data.remaining_topup_credits,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting requests usage" },
      { status: 500 },
    );
  }
};

export const GET = withAuth(getDashboardUsage);
