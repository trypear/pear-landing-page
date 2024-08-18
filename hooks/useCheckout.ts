import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useCheckout = (user: User | null) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleCheckout = async (priceId: string) => {
    if (!user) {
      toast.error("Please log in to subscribe to this plan.");
      router.push("/signin");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData?.error || `HTTP error! status: ${response.status}`,
        );
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        toast.error("Failed to start checkout process. Please try again.");
      }
    } catch (error) {
      if (
        error instanceof Error &&
        error?.message === "User already has an active subscription"
      ) {
        toast.error("You already have an active subscription.");
        return;
      }
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleCheckout, isSubmitting };
};
