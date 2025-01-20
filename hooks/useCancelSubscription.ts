import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Subscription } from "@/types/subscription";
import { CancellationFeedback } from "@/types/cancellation";

export const useCancelSubscription = (
  user: User | null,
  subscription: Subscription | null,
) => {
  const [isCanceling, setIsCanceling] = useState(false);
  const [isCanceled, setIsCanceled] = useState(
    subscription?.cancel_at_period_end,
  );
  const router = useRouter();

  const handleCancelSubscription = async (
    subscriptionId: string,
    feedback: CancellationFeedback,
  ) => {
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
        body: JSON.stringify({
          subscriptionId,
          feedback,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = await response.json();

      if (data.status === "success") {
        toast.success("Your subscription has been canceled successfully.");
        setIsCanceled(true);
        router.push("/dashboard");
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

  return { handleCancelSubscription, isCanceling, isCanceled };
};
