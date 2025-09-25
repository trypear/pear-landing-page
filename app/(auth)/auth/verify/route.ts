import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  if (!token_hash || !type) {
    return NextResponse.redirect(
      new URL("/signin?error=missing-token", request.url),
    );
  }

  const supabase = createClient();

  try {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: type as any,
    });

    if (error) {
      return NextResponse.redirect(
        new URL(`/signin?error=${error.message}`, request.url),
      );
    }

    return NextResponse.redirect(new URL("/auth/verified", request.url));
  } catch (error) {
    return NextResponse.redirect(
      new URL("/signin?error=verification-failed", request.url),
    );
  }
}
