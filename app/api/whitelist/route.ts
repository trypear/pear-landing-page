import { NextRequest, NextResponse } from "next/server";

async function whitelist(request: NextRequest) {
  try {
    const { email } = await request.json();
    // Request to add email to whitelist from python backend
    const res = await fetch(`${process.env.PEARAI_SERVER_URL}/whitelist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { error: `Failed to add email to whitelist. ${errorData?.error}` },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    let errMsg = "Error adding email to whitelist: ";
    if (error instanceof Error) {
      errMsg += `: ${error?.message}`;
    } else if (typeof error === "string") {
      errMsg += `: ${error}`;
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export const POST = whitelist;
