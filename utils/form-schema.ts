import { z } from "zod";

export const signUpSchema = z.object({
  full_name: z.string().min(1,{message: "Name is required."}),
  email: z.string().email({message: "Email address is invalid."}),
  company_name: z.string().min(1),
  password: z.string().min(8,{ message: "Password not long enough."}),
});

export const signInSchema = z.object({
    email: z.string().email({message: "Email address is invalid."}),
    password: z.string().min(8, {message: "Password is not long enough."}),
  });
  
export const resetPasswordSchema = z.object({
    email: z.string().email("Email address is invalid."),
});

  
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ErrorMessages = { full_name?: string, email?: string; password?: string; form?: string };

