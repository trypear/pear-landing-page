import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if callback in param, means we should redirect to desktop pearai app instead and ignore "next"
  const callback = searchParams.get("callback");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/dashboard";
  let authError = "";

  if (code) {
    const cookieStore = cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options });
          },
        },
      },
    );
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const response = NextResponse.redirect(`${origin}${next}`);
      if (callback && data) {
        // if login in from desktop app
        return NextResponse.redirect(
          `${origin}${next}?callback=${encodeURIComponent(callback)}`,
        );
      }
      return response;
    }
    authError =
      error?.message ?? "Error during code exchange for oauth session";
  } else {
    authError = "No auth code in params";
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(
    `${origin}/auth/auth-code-error?error=${authError}`,
  );
}
