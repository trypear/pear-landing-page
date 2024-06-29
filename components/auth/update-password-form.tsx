"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { constructMetadata } from "@/lib/utils";
import {
  UpdatePasswordFormData,
  updatePasswordSchema,
} from "@/utils/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Metadata } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

export const metadata: Metadata = constructMetadata({
  title: "Update password",
  description: "Update your account password",
  canonical: "/update-password",
});

const UpdatePasswordForm = () => {
  const form = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const {
    formState: { isSubmitting },
  } = form;

  const handleUpdatePassword: SubmitHandler<
    UpdatePasswordFormData
  > = async () => {
    // TODO: Handle the update password functionality
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleUpdatePassword)}
        className="mt-12 space-y-6 px-6 md:px-0"
      >
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">New Password</FormLabel>
              <FormControl>
                <Input id="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="confirmPassword">
                Confirm New Password
              </FormLabel>
              <FormControl>
                <Input id="confirmPassword" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="mt-6 w-full rounded-md bg-primary-700 text-white-50 hover:bg-primary-800 hover:shadow-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating password..." : "Update Password"}
        </Button>
      </form>
    </Form>
  );
};

export default UpdatePasswordForm;
