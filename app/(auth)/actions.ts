"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
export async function signin(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    fullName: formData.get("full-name") as string,
    // companyName: formData.get("company-name") as string,
  };

  const { error } = await supabase.auth.signUp(data);
  
  if (error) {
    return {error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

// Google OAuth sign-in
export async function signinWithGoogle() {
  const supabase = createClient();

  const {data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (data.url) {
    redirect(data.url) 
  }
  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

// Reset password
export async function resetPassword(formData: FormData) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.resetPasswordForEmail(formData.get("email") as string);

  if (error) {
    return {error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}