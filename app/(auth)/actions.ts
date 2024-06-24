"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from "@supabase/supabase-js";

const supabase = createClient();

export async function signin(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email: string = formData.get("email")?.toString() ?? "";
  const password: string = formData.get("password")?.toString() ?? "";
  const redirectUrl: URL = new URL(formData.get("redirect")?.toString() ?? "/");
  console.log(redirectUrl.host);
  console.log(email);
  console.log(password);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  const token: string = data?.session?.access_token ?? undefined;
  if (token && redirectUrl.hostname) {
    redirectUrl.searchParams.append("token", token);
  }

  revalidatePath("/", "layout");
  redirect(redirectUrl.toString());
}

// Google OAuth sign-in
export async function signinWithGoogle(formData: FormData) {
  const redirectUrl: URL = new URL(formData.get("redirect")?.toString() ?? "/");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback?next=${encodeURIComponent(redirectUrl.toString())}`,
    },
  });
  if (error) {
    redirect("/error");
  }

  if (data.url) {
    redirect(data.url);
  }

  revalidatePath("/", "layout");
}

// Reset password
export async function resetPassword(formData: FormData) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    formData.get("email") as string,
  );

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data: SignUpWithPasswordCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        full_name: formData.get("full-name") as string,
        company_name: formData.get("company-name") as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
