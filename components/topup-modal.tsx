import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { CheckCircle2 } from "lucide-react";
import { useTopUpCheckout } from "@/hooks/useTopUpCheckout";
import { useUser } from "@/hooks/useUser";

const REQUEST_OPTIONS = [
  {
    amount: 5,
    requests: 200,
    popular: false,
  },
  {
    amount: 10,
    requests: 400,
    popular: false,
  },
  { amount: 15, requests: 700, popular: true },
  {
    amount: 30,
    requests: 1400,
    popular: false,
  },
];

export default function TopUpModal() {
  const [selectedAmount, setSelectedAmount] = useState(15);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { handleTopUpCheckout, isSubmitting } = useTopUpCheckout(user);

  const handleBuyRequests = async () => {
    await handleTopUpCheckout(selectedAmount);
    setIsOpen(false);
  };

  return (
    <Button variant="outline" onClick={() => (window.location.href = "/topup")}>
      {" "}
      {isSubmitting ? "Processing..." : "Top Up Credits"}
    </Button>
  );
}
