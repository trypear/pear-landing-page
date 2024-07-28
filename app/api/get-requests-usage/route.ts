import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";
import { TEST_MODE_ENABLED } from "@/utils/constants";

async function getRequestsUsage(request: NextRequest) {
  const supabase = createClient();

  try {
    const { user_id } = await request.json();
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ user_id }),
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
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting requests usage" },
      { status: 500 },
    );
  }
}

export const POST = getRequestsUsage;
