import { z } from "zod";
import { isDisposableEmail } from "./disposable-email";

export const emailSchema = z.object({
  email: z
    .string()
    .email({ message: "Email address is invalid." })
    .refine(async (email) => !(await isDisposableEmail(email)), {
      message:
        "Disposable email addresses are not allowed. Not using a disposable email? Please contact pear@trypear.ai.",
    }),
});

export const passwordSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

export const signUpSchema = z.object({
  full_name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name is too long." }),
  email: emailSchema.shape.email,
  company_name: z
    .string()
    .max(30, { message: "Company name is too long." })
    .optional(),
  password: passwordSchema.shape.password,
  heard_about_us: z
    .string({
      required_error: "Please tell us how you heard about us.",
    })
    .max(30, { message: "Message too long" }),
});

export const signInSchema = z.object({
  email: emailSchema.shape.email,
  password: passwordSchema.shape.password,
});

export const resetPasswordSchema = z.object({
  email: emailSchema.shape.email,
});

export const updatePasswordSchema = z
  .object({
    password: passwordSchema.shape.password,
    confirmPassword: passwordSchema.shape.password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;
