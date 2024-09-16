import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { CookieOptions, createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const token = searchParams.get("token");
  const next = searchParams.get("next") ?? "/dashboard";

  if (token) {
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

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.redirect(
        `${origin}/signin?next=/team/accept-invite?token=${token}`,
      );
    }

    try {
      const response = await fetch(
        `${process.env.PEARAI_SERVER_URL}/team/accept-invite`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ token }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to accept invitation");
      }

      return NextResponse.redirect(`${origin}${next}`);
    } catch (error) {
      return NextResponse.redirect(
        `${origin}/team/invite-error?error=accept-failed`,
      );
    }
  }

  return NextResponse.redirect(`${origin}/team/invite-error?error=no-token`);
}
