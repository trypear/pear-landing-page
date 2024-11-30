import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Subscription } from "@/types/subscription";
import { STRIPE_PRICE_IDS } from "@/utils/constants";

export const useUpgradeSubscription = (
  user: User | null,
  subscription: Subscription | null,
) => {
  const [isUpgrading, setIsUpgrading] = useState(false);
  const router = useRouter();

  const handleUpgradeSubscription = async () => {
    if (!user) {
      toast.error("Please log in to upgrade your subscription.");
      router.push("/signin");
      return;
    }
    if (isUpgrading) return;

    setIsUpgrading(true);
    try {
      const response = await fetch("/api/upgrade-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subscriptionId: subscription?.subscription_id,
          annualPriceId: STRIPE_PRICE_IDS.ANNUAL,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data", errorData);
        throw new Error(errorData.error);
      }

      const res = await response.json();
      const url = res.data.url;
      if (url) {
        window.location.href = url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Error upgrading subscription:", error);
      toast.error(
        "An error occurred while processing your upgrade. Please try again.",
      );
    } finally {
      setIsUpgrading(false);
    }
  };

  return { handleUpgradeSubscription, isUpgrading };
};
