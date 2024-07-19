import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

async function downloadFile(request: NextRequest & { user: User }) {
  const supabase = createClient();

  try {
    const { userId, operatingSystem } = await request.json();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json(
        { error: "Failed to get session" },
        { status: 401 },
      );
    }

    // Request OS appropriate download from python backend
    const res = await fetch("${PEARAI_SERVER_URL}/generate-download-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, operatingSystem }), // Windows | MacOS | Linux | Mobile
    });

    if (!res) {
      return NextResponse.json(
        { error: "Failed to get download file from server" },
        { status: 500 },
      );
    }

    const { downloadUrl } = await res.json();

    return NextResponse.json({ downloadUrl }, { status: 200 });
  } catch (error) {
    throw Error("Something went wrong.");
  }
}
