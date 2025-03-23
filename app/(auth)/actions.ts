"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import {
  SignInWithPasswordCredentials,
  Provider,
  User,
  Session,
} from "@supabase/supabase-js";
import { UpdatePasswordFormData } from "@/utils/form-schema";
import { getURL } from "@/lib/utils";

export async function signin(
  formData: FormData,
  callbackForDesktopApp: string,
) {
  const supabase = createClient();

  const data: SignInWithPasswordCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: { captchaToken: formData.get("captchaToken") as string },
  };

  const { data: res, error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");

  if (callbackForDesktopApp && res) {
    // if login in from desktop app
    return redirect(
      `/dashboard?callback=${encodeURIComponent(callbackForDesktopApp)}`,
    );
  }
  redirect(`/dashboard`);
}

// Flow: User signs up with email and password
// 1. Check if user exists
// 2. If user exists, attempt to sign in with email and password
//  - If sign in is successful, return signedIn: true (redirect to /dashboard on client)
//  - If sign in fails, return exists: true (toast 'account exists' on client and redirect to /signin)
// 3. If user does not exist, sign up with email and password and redirect to /signin
//  - If sign up fails, return error: error.message (toast error on client)

// OAuth sign-in with Google or GitHub
export async function signinWithOAuth(
  provider: Provider,
  callbackForDesktopApp: string | string[] = "",
) {
  const supabase = createClient();

  const redirectToUrl = callbackForDesktopApp
    ? `${getURL()}/auth/callback?callback=${callbackForDesktopApp}`
    : `${getURL()}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: redirectToUrl,
    },
  });

  if (error) {
    redirect("/signin?message=Could not authenticate user");
  }

  if (data.url) {
    redirect(data.url);
  }

  revalidatePath("/", "layout");
}

// Reset password
export async function resetPassword(formData: FormData) {
  const supabase = createClient();

  const email = formData.get("email") as string;
  const captchaToken = formData.get("captchaToken") as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${getURL()}/update-password`,
    captchaToken,
  });

  if (error) {
    return { error: error.message };
  }

  redirect("/reset-password?success=true");
}

export async function checkEmailExists(data: {
  user: User | null;
  session: Session | null;
}) {
  return {
    exists:
      data.user && data.user?.identities && data.user?.identities?.length === 0,
  };
}

export async function updateUser(formData: UpdatePasswordFormData) {
  const supabase = createClient();

  const { error } = await supabase.auth.updateUser({
    password: formData.password,
  });
  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

// resend confirmation email
export async function resendConfirmationEmail(email: string) {
  const supabase = createClient();

  const { error } = await supabase.auth.resend({
    type: "signup",
    email: email,
    options: {
      emailRedirectTo: `${getURL()}/dashboard`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
}
