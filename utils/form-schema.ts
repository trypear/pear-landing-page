import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email({ message: "Email address is invalid." }),
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
    .max(100, { message: "Company name is too long." })
    .optional(),
  password: passwordSchema.shape.password,
});

export const signInSchema = z.object({
  email: emailSchema.shape.email,
  password: passwordSchema.shape.password,
});

// New schema for contact form

export const contactSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "First name is required." })
    .max(100, { message: "First name is too long." }),
  last_name: z
    .string()
    .min(1, { message: "Last name is required." })
    .max(100, { message: "Last name is too long." }),
  email: emailSchema.shape.email,
  company_name: z
    .string()
    .min(1, { message: "Company name is required." })
    .max(100, { message: "Company name is too long." }),
  organisation_size: z
    .string()
    .min(1, { message: "Organisation size is required." }),
  job_title: z
    .string()
    .min(1, { message: "Job title is required." })
    .max(100, { message: "Job title is too long." }),
  phone_number: z
    .string()
    .max(20, { message: "Phone number is too long." })
    .optional(), // Phone number is an optional field to fill in for now
  message: z.string().min(1, { message: "Message is required." }),
  // Do we need a max length for the message?
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
export type ContactFormData = z.infer<typeof contactSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;
