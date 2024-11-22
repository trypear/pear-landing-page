import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await fetch(`${process.env.PEARAI_SERVER_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Frontend-Key": process.env.X_FRONTEND_KEY!,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        {
          error:
            error.detail ||
            "Failed to sign up, please contact us on Discord for assistance",
        },
        { status: response.status },
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
