import { NextResponse } from "next/server";

const SERVER_URL = process.env.SERVER_URL || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  try {
    const { priceId, userId } = await request.json();
    console.log(
      `Creating checkout session for priceId: ${priceId}, userId: ${userId}`,
    );

    const response = await fetch(
      `${SERVER_URL}/payment/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, userId }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `HTTP error! status: ${response.status}, body: ${errorText}`,
      );
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Received checkout URL: ${data.url}`);

    // Return the URL to the client
    return NextResponse.json({ url: data.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 },
    );
  }
}
