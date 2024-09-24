import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Subscription } from "@/types/subscription";

const PEARAI_SERVER_URL = process.env.PEARAI_SERVER_URL;
const STRIPE_ANNUAL_PEARAI_PRO_PRODUCT_ID =
  process.env.STRIPE_ANNUAL_PEARAI_PRO_PRODUCT_ID;

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
      const response = await fetch("/api/update-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subscriptionId: subscription?.subscription_id,
          annualPriceId: STRIPE_ANNUAL_PEARAI_PRO_PRODUCT_ID,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data", errorData);
        throw new Error(errorData.detail);
      }

      const { url, sessionId } = await response.json();
      if (url && sessionId) {
        // Redirect the user to the Stripe checkout session
        window.location.href = url;
      } else {
        toast.error("Failed to upgrade subscription. Please try again.");
      }
    } catch (error) {
      console.error("Error upgrading subscription:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsUpgrading(false);
    }
  };

  return { handleUpgradeSubscription, isUpgrading };
};
