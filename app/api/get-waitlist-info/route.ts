import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

async function waitlistInfo(request: NextRequest) {
  console.log("Bug #1 🐛🐛");
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
    console.log(session);
    const res = await fetch(
      `${process.env.PEARAI_SERVER_URL}/get-waitlist-info`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to get download file from server" },
        { status: 500 },
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    throw Error(error.message);
  }
}

export const GET = waitlistInfo;
