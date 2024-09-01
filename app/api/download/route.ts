import { NextRequest, NextResponse } from "next/server";

async function downloadFile(request: NextRequest) {
  try {
    const os_type = request.nextUrl.searchParams.get("os_type");
    const res = await fetch(
      `${process.env.PEARAI_SERVER_URL}/download?os_type=${os_type}`,
      {
        method: "GET",
      },
    );

    if (!res.ok) {
      const errorData = await res.json();
      const errorMessage =
        errorData.error ??
        `Server responded with ${res.status}: ${res.statusText}`;
      throw new Error(errorMessage);
    }

    // Forward the response from the Python backend
    const blob = await res.blob();
    return new NextResponse(blob, {
      status: 200,
      headers: {
        "Content-Type":
          res.headers.get("Content-Type") ?? "application/octet-stream",
        "Content-Disposition":
          res.headers.get("Content-Disposition") ??
          `attachment; filename="PearAI-${os_type}-installer.dmg"`,
        "X-Download-URL": res.headers.get("X-Download-URL") ?? "",
      },
    });
  } catch (error: any) {
    console.error("Download error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const GET = downloadFile;
