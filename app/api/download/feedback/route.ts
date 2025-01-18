import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { DownloadFeedback } from "@/types/download-feedback";
import { TEST_MODE_ENABLED } from "@/utils/constants";

const PEARAI_SERVER_URL = process.env.PEARAI_SERVER_URL;

export async function POST(request: NextRequest) {
  const supabase = createClient();

  try {
    const feedback = (await request.json()) as DownloadFeedback;

    // Get the user's IP address for analytics
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    // Get auth session for the API request
    const {
      data: { session },
    } = await supabase.auth.refreshSession();

    if (!session) {
      return NextResponse.json(
        { error: "Failed to get session" },
        { status: 401 },
      );
    }

    const token = session.access_token;
    const url = `${PEARAI_SERVER_URL}/analytics${TEST_MODE_ENABLED ? "/test" : ""}/download-feedback`;

    // Send feedback to the server
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        role: feedback.role,
        experience_level: feedback.experience_level,
        primary_use: feedback.primary_use,
        project_description: feedback.project_description,
        ip_address: ip,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(
      { message: "Feedback submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing feedback:", error);
    return NextResponse.json(
      { error: "Failed to process feedback" },
      { status: 500 },
    );
  }
}
