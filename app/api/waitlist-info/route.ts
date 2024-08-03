import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";

async function waitlistInfo(request: NextRequest) {
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
    const res = await fetch(`${process.env.PEARAI_SERVER_URL}/waitlist-info`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json(
          { error: "User not in waitlist" },
          { status: 404 },
        );
      }
      return NextResponse.json(
        { error: `Failed to get download file from server: ${data?.error}` },
        { status: 500 },
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    let errMsg = "Error getting waitlist info: ";
    if (error instanceof Error) {
      errMsg += `: ${error?.message}`;
    } else if (typeof error === "string") {
      errMsg += `: ${error}`;
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export const GET = withAuth(waitlistInfo);
