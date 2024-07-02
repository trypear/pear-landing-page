import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if callback in param, means we should redirect to desktop pearai app instead and ignore "next"
  const callback = searchParams.get("callback");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/settings";
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
    if (!error && data) {
      if (callback) {
        // redirect to desktop pearai app
        const accessToken = data.session.access_token;
        const refreshToken = data.session.refresh_token;
        return NextResponse.redirect(
          `${callback}?accessToken=${accessToken}&refreshToken=${refreshToken}`,
        );
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
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
