import { createClient } from "@/utils/supabase/server";
import { withAuth } from "@/utils/withAuth";
import { NextRequest, NextResponse } from "next/server";

async function downloadFile(request: NextRequest) {
  try {
    const os_type = request.nextUrl.searchParams.get("os_type");
    const res = await fetch(
      `${process.env.PEARAI_SERVER_URL}/download?os_type=${os_type}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const { download_link } = await res.json();

    if (!res.ok || !download_link) {
      return NextResponse.json(
        { error: "Failed to get download file from server" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: download_link });
  } catch (error: any) {
    let errMsg = "Error downloading file: ";
    if (error instanceof Error) {
      errMsg += `: ${error?.message}`;
    } else if (typeof error === "string") {
      errMsg += `: ${error}`;
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export const GET = downloadFile;
