import { createClient } from "@/utils/supabase/server";
import { withAuth } from "@/utils/withAuth";
import { NextRequest, NextResponse } from "next/server";

async function downloadFile(request: NextRequest) {
  const supabase = createClient();
  try {
    const { os_type } = await request.json();
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

    // Request OS appropriate download from python backend
    const res = await fetch(`${process.env.PEARAI_SERVER_URL}/get-download`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ os_type }), // windows | mac | linux | mobile
    });

    const { url } = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to get download file from server" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url });
  } catch (error: any) {
    throw Error(error.message);
  }
}

export const POST = downloadFile;
