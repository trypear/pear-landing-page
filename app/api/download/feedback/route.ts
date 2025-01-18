import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { DownloadFeedback } from "@/types/download-feedback";
import { TEST_MODE_ENABLED } from "@/utils/constants";

const PEARAI_SERVER_URL = process.env.PEARAI_SERVER_URL;

export async function POST(request: NextRequest) {
  const supabase = createClient();

  try {
    const feedback = (await request.json()) as DownloadFeedback;

    // Get auth session if available
    const {
      data: { session },
    } = await supabase.auth.refreshSession();

    const url = `${PEARAI_SERVER_URL}/feedback/download`;
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // Add authorization header only if session exists
    if (session?.access_token) {
      headers.Authorization = `Bearer ${session.access_token}`;
    }

    // Send feedback to the server
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        role: feedback.role,
        experience_level: feedback.experience_level,
        primary_use: feedback.primary_use,
        project_description: feedback.project_description,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
