"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckout } from "@/hooks/useCheckout";
import { PRICING_TIERS, STRIPE_PRICE_IDS } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CreditCard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CreateTeamFormData, createTeamSchema } from "@/utils/form-schema";
import { CreateTeamFormProps } from "@/types/team";

export default function CreateTeamForm({
  user,
  initialYearly,
  handleSignOut,
}: CreateTeamFormProps) {
  const { handleCheckout, isSubmitting } = useCheckout(user);

  const form = useForm<CreateTeamFormData>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      teamName: "",
      isYearly: initialYearly,
    },
  });

  const isYearly = form.watch("isYearly");

  const tierData = PRICING_TIERS.enterprise.find(
    (tier) => tier.title.toLowerCase() === (isYearly ? "yearly" : "monthly"),
  );
  const price = tierData?.price || "0";
  const priceId = isYearly
    ? STRIPE_PRICE_IDS.ENTERPRISE_ANNUAL
    : STRIPE_PRICE_IDS.ENTERPRISE_MONTHLY;

  const handleSubmit = async (data: CreateTeamFormData) => {
    try {
      await handleCheckout(priceId, data.teamName);
      console.log("Team created successfully! Redirecting to checkout...");
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  const annualSavings = (
    parseFloat(price) * 12 -
    parseFloat(price) * 10
  ).toFixed(2);

  return (
    <>
      <Card className="m-20 w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            Create a Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <Alert variant="info">
                <AlertDescription>
                  Logged in as: <strong>{user.email}</strong>
                </AlertDescription>
              </Alert>
              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team name</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input placeholder="Enter your team name" {...field} />
                      </FormControl>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center">
                              <FormField
                                control={form.control}
                                name="isYearly"
                                render={({ field }) => (
                                  <FormItem className="flex flex-col items-start space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value}
                                          onCheckedChange={field.onChange}
                                          id="yearly-checkbox"
                                        />
                                      </FormControl>
                                      <FormLabel
                                        htmlFor="yearly-checkbox"
                                        className="flex cursor-pointer items-center text-sm leading-none text-gray-600"
                                        onClick={() =>
                                          field.onChange(!field.value)
                                        }
                                      >
                                        Yearly
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            {isYearly
                              ? `You save $${annualSavings} per user annually`
                              : "Switch to yearly billing to save"}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="rounded-md bg-gray-300/10 p-4 ring-1 ring-gray-400/40 backdrop-blur-md">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  <span className="text-sm font-medium">Selected Plan</span>
                </div>
                <p className="mt-1 text-2xl font-semibold text-foreground">
                  ${price}{" "}
                  <span className="text-base font-normal text-muted-foreground">
                    / user / {isYearly ? "year" : "month"}
                  </span>
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Create Team"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="w-full">
          <form action={handleSignOut} className="w-full">
            <Button variant="outline" className="w-full">
              Login with a different account
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
