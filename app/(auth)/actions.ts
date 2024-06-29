"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import {
  SignInWithPasswordCredentials,
  Provider,
  SignUpWithPasswordCredentials,
} from "@supabase/supabase-js";
import { UpdatePasswordFormData } from "@/utils/form-schema";

const supabase = createClient();

export async function signin(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data: SignInWithPasswordCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/settings");
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

  const { exists } = await checkEmailExists(data.email);

  if (exists) {
    return { error: "Email already exists" };
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/signin");
}

// OAuth sign-in with Google or GitHub
export async function signinWithOAuth(provider: Provider) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback`,
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
  const email = formData.get("email") as string;
  // Check if email exists
  const { exists } = await checkEmailExists(email);
  if (!exists) {
    return { error: "Email does not exist" };
  }
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/update-password`,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
}

export async function checkEmailExists(email: string) {
  // Normalize email to lowercase before checking in the database
  email = email.toLowerCase();
  const { data, error } = await supabase
    .from("profiles")
    .select("email")
    .eq("email", email);

  if (error) {
    return { error: error.message };
  }

  return { exists: data.length > 0 };
}

export async function updateUser(formData: UpdatePasswordFormData) {
  const { error } = await supabase.auth.updateUser({
    password: formData.password,
  });
  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/settings");
}
