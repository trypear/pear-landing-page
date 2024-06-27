"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import {
  AuthError,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
  OAuthResponse,
} from "@supabase/supabase-js";

const supabase = createClient();

export async function signin(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email: string = formData.get("email")?.toString() ?? "";
  const password: string = formData.get("password")?.toString() ?? "";
  const redirectUrl: URL = new URL(formData.get("redirect")?.toString() ?? "/");

  try {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const token: string | undefined = data?.session?.access_token;
    if (token && redirectUrl.hostname) {
      redirectUrl.searchParams.append("token", token);
    }
    revalidatePath("/", "layout");
    redirect(redirectUrl.toString());
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.message };
    }
    return { error: "An error occurred while signing in" };
  }
}

export async function signinWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback`,
    },
  });
  if (error) {
    redirect("/error");
  }

  if (data.url) {
    redirect(data.url);
  }

  revalidatePath("/", "layout");
  redirect("/");
}
export async function resetPassword(formData: FormData) {
  try {
    await supabase.auth.resetPasswordForEmail(formData.get("email") as string);
    revalidatePath("/", "layout");
    redirect("/");
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.message };
    }
    return { error: "An error occurred while resetting password" };
  }
}

export async function signup(formData: FormData) {
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

  try {
    await supabase.auth.signUp(data);
    revalidatePath("/", "layout");
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.message };
    }
    return { error: "An error occurred while signing up" };
  } finally {
    redirect("/");
  }
}
