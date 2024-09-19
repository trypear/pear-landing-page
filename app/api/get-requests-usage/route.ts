import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";

const getRequestsUsage = async (request: NextRequest) => {
  console.log("Starting getRequestsUsage function");
  const supabase = createClient();

  try {
    console.log("Attempting to get session");
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      console.log("No session found");
      return NextResponse.json(
        { error: "Failed to get session" },
        { status: 401 },
      );
    }

    console.log("Session found, extracting token and user metadata");
    const token = session.access_token;
    // const isTeamOwner = session.user.user_metadata.is_team_owner;
    const isTeamOwner = false; // TODO: fix this

    let endpoint = `${process.env.PEARAI_SERVER_URL}/user-quota-usage`;
    if (isTeamOwner) {
      console.log("User is team owner, using team quota endpoint");
      endpoint = `${process.env.PEARAI_SERVER_URL}/team-quota-usage`;
    }
    console.log(`Using endpoint: ${endpoint}`);

    console.log("Sending request to server");
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.log(`Server responded with status: ${res.status}`);
      if (res.status === 401) {
        return NextResponse.json(
          { error: "Unauthorized. Please log in again." },
          { status: 401 },
        );
      }
      const errorBody = await res.json();
      throw new Error(
        `HTTP error! status: ${res.status}. Error: ${errorBody?.error}`,
      );
    }

    console.log("Successfully received data from server");
    const data = await res.json();
    console.log("Data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in getRequestsUsage:", error);
    return NextResponse.json(
      { error: "Error getting requests usage" },
      { status: 500 },
    );
  }
};

export const GET = withAuth(getRequestsUsage);
