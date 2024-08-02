import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

type AuthenticatedHandler = (
  request: NextRequest & { user: User },
) => Promise<NextResponse>;

export function withAuth(handler: AuthenticatedHandler) {
  return async (request: NextRequest) => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // add user to request object
    const authenticatedRequest = request as NextRequest & { user: User };
    authenticatedRequest.user = user;
    return handler(authenticatedRequest);
  };
}
