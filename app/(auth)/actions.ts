"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import {
  SignInWithPasswordCredentials,
  Provider,
  SignUpWithPasswordCredentials,
  User,
  Session,
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

  const { data: authData, error } = await supabase.auth.signUp(data);

  const { exists } = await checkEmailExists(authData);

  if (exists) {
    return { error: "Email already exists" };
  }

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/signin");
}
import { headers } from "next/headers";

// OAuth sign-in with Google or GitHub
export async function signinWithOAuth(provider: Provider) {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol =
    process.env.VERCEL_ENV === "local" || process.env.VERCEL_ENV == null
      ? "http"
      : "https";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${protocol}://${host}/auth/callback`,
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

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/update-password`,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
}

export async function checkEmailExists(data: {
  user: User | null;
  session: Session | null;
}) {
  return {
    exists:
      data.user && data.user.identities && data.user.identities.length === 0,
  };
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
