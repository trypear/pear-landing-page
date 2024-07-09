import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useCancelSubscription = (user: User | null) => {
  const [isCanceling, setIsCanceling] = useState(false);
  const router = useRouter();

  const handleCancelSubscription = async (subscriptionId: string) => {
    if (!user) {
      toast.error("Please log in to cancel your subscription.");
      router.push("/signin");
      return;
    }

    if (isCanceling) return;

    setIsCanceling(true);

    try {
      const response = await fetch("/api/cancel-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscriptionId }),
      });

      console.log("response", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = await response.json();
      console.log("data", data);

      if (data.status === "success") {
        toast.success("Your subscription has been canceled successfully.");
        router.push("/settings");
      } else {
        toast.error("Failed to cancel subscription. Please try again.");
      }
    } catch (error) {
      console.error("Error canceling subscription:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsCanceling(false);
    }
  };

  return { handleCancelSubscription, isCanceling };
};
