import { createClient } from "@/utils/supabase/server";
import { withAuth } from "@/utils/withAuth";
import { NextRequest, NextResponse } from "next/server";

async function whitelist(request: NextRequest) {
  const supabase = createClient();
  try {
    const { email } = await request.json();

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

    // Request to add email to whitelist from python backend
    const res = await fetch(`${process.env.PEARAI_SERVER_URL}/whitelist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to add email to whitelist from server" },
        { status: 500 },
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    let errMsg = "Error adding email to whitelist: ";
    if (error instanceof Error) {
      errMsg += `: ${error?.message}`;
    } else if (typeof error === "string") {
      errMsg += `: ${error}`;
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export const POST = withAuth(whitelist);
