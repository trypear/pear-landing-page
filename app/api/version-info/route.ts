import { NextResponse } from "next/server";

export async function GET() {
  const versionInfo = {
    version: "1.2.0",
    lastReleaseDate: "18 Sep 2024",
  };

  return NextResponse.json(versionInfo, { status: 200 });
}
