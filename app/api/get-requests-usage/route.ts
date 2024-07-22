import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";
import { TEST_MODE_ENABLED } from "@/utils/constants";

const PEARAI_SERVER_URL = process.env.PEARAI_SERVER_URL;

async function getRequestsUsage(request: NextRequest & { user: User }) {
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

    const response = await fetch(`${PEARAI_SERVER_URL}/usage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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

    const { usage } = await response.json();
    return NextResponse.json({ usage });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting requests usage" },
      { status: 500 },
    );
  }
}

export const GET = withAuth(getRequestsUsage);
