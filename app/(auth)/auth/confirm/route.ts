import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/dashboard";
  const redirectUrl = searchParams.get("redirectUrl");

  const redirectTo = request.nextUrl.clone();

  // If redirectUrl is present, decode it and use it as the redirection path
  if (redirectUrl) {
    const decodedRedirectUrl = decodeURIComponent(redirectUrl);
    redirectTo.href = decodedRedirectUrl;
  } else {
    redirectTo.pathname = next;
  }

  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");
  redirectTo.searchParams.delete("next");
  redirectTo.searchParams.delete("redirectUrl");

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      return NextResponse.redirect(redirectTo);
    }
  }

  // If verification fails or parameters are missing, redirect to an error or sign-in page
  // Consider handling redirectUrl even in error scenarios if applicable
  redirectTo.pathname = "/signin?message=cannot-verify-otp";
  return NextResponse.redirect(redirectTo);
}
