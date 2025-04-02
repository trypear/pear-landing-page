import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const os_type = searchParams.get("os_type");

  if (!os_type) {
    return NextResponse.json({ error: "OS type is required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `${process.env.PEARAI_SERVER_URL}/log_download?os_type=${os_type}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to log download");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error logging download:", error);
    return NextResponse.json(
      { error: "Failed to log download" },
      { status: 500 }
    );
  }
}