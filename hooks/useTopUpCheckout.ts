import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useTopUpCheckout = (user: User | null) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleTopUpCheckout = async (amount: number | "custom") => {
    if (!user) {
      toast.error("Please log in to top up credits.");
      router.push("/signin");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/create-topup-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
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
        toast.error("Failed to start top-up process. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleTopUpCheckout, isSubmitting };
};
