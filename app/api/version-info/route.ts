import { NextResponse } from "next/server";

export async function GET() {
  const versionInfo = {
    version: "1.3.0",
    // Must maintain Date format
    lastReleaseDate: "07 Oct 2024",
  };

  return NextResponse.json(versionInfo, { status: 200 });
}
