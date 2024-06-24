import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  if (
    (request.nextUrl.pathname.startsWith("/signin") ||
      request.nextUrl.pathname.startsWith("/signup")) &&
    // FEATURE FLAG
    process.env.NODE_ENV === "production"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // temp redirect to home page in production until we have a proper backend auth flow
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/signin",
    "/signup",
  ],
};
