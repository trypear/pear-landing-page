"use client";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCheckout } from "@/hooks/useCheckout";
import { PRICING_TIERS, STRIPE_PRICE_IDS } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface CreateTeamFormProps {
  user: User;
  initialYearly: boolean;
  handleSignOut: () => Promise<void>;
}

const createTeamSchema = z.object({
  teamName: z.string().min(3, "Team name must be at least 3 characters long"),
});

type CreateTeamFormData = z.infer<typeof createTeamSchema>;

export default function CreateTeamForm({
  user,
  initialYearly,
  handleSignOut,
}: CreateTeamFormProps) {
  const [teamName, setTeamName] = useState(null);
  const [isYearly, setIsYearly] = useState(initialYearly);
  const { handleCheckout, isSubmitting } = useCheckout(user);

  const [price, setPrice] = useState("");
  const [priceId, setPriceId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<CreateTeamFormData>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      teamName: "",
    },
  });

  useEffect(() => {
    const tierData = PRICING_TIERS.enterprise.find(
      (tier) => tier.title.toLowerCase() === (isYearly ? "yearly" : "monthly"),
    );
    setPrice(tierData?.price || "0");
    setPriceId(
      isYearly
        ? STRIPE_PRICE_IDS.ENTERPRISE_ANNUAL
        : STRIPE_PRICE_IDS.ENTERPRISE_MONTHLY,
    );
  }, [isYearly]);

  const handleSubmit = async (data: CreateTeamFormData) => {
    setIsProcessing(true);
    try {
      await handleCheckout(priceId, data.teamName);
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="p-6 text-center text-4xl leading-6">
          Create a team
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="rounded-md bg-gray-300/20 p-4 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
              <p className="text-sm text-gray-600">
                You are currently logged in as:
              </p>
              <p className="font-medium text-primary-800 dark:text-primary-700">
                {user.email}
              </p>
            </div>
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your team name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Yearly billing
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary-700 data-[state=unchecked]:bg-gray-300"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isProcessing || isSubmitting}
            >
              {isProcessing
                ? "Processing..."
                : `Create Team ($${price} / user / ${isYearly ? "year" : "month"})`}
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
  );
}
