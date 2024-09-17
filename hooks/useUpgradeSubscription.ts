import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Subscription } from "@/types/subscription";

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
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data", errorData);
        throw new Error(errorData);
      }

      const { data } = await response.json();

      if (data.status === "success") {
        toast.success("Your subscription has been upgraded successfully.");
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
