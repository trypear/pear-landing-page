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
import { Badge } from "@/components/ui/badge";
import { CreditCard, Check } from "lucide-react";
import { useTopUpCheckout } from "@/hooks/useTopUpCheckout";
import { useUser } from "@/hooks/useUser";

const REQUEST_OPTIONS = [
  { amount: 5, requests: 233, popular: false },
  { amount: 10, requests: 466, popular: true },
  { amount: 15, requests: 700, popular: false },
];

export default function TopUpModal() {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { handleTopUpCheckout, isSubmitting } = useTopUpCheckout(user);

  const handleBuyRequests = async () => {
    await handleTopUpCheckout(selectedAmount);
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Top Up Credits</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md select-none sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-secondary-800 dark:text-white-50">
            Top Up Credits
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-gray-700 dark:text-gray-600">
            Enhance your AI experience with additional requests. Choose a
            package that suits your needs.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          {REQUEST_OPTIONS.map((option) => (
            <Card
              key={option.amount}
              className={`cursor-pointer transition-all ${
                selectedAmount === option.amount
                  ? "bg-tertiary-100 ring-2 ring-secondary-main dark:bg-secondary-main dark:ring-white-50"
                  : "hover:bg-tertiary-100 dark:hover:bg-secondary-main"
              }`}
              onClick={() => setSelectedAmount(option.amount)}
            >
              <CardContent className="flex items-center p-4">
                <div
                  className={`mr-4 rounded-full p-2 ${
                    selectedAmount === option.amount
                      ? "bg-primary-800 text-white-50"
                      : "bg-tertiary-300/30 text-secondary-main dark:bg-secondary-500/70 dark:text-white-50"
                  }`}
                >
                  {selectedAmount === option.amount ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <CreditCard className="h-5 w-5" />
                  )}
                </div>
                <div className="grid flex-grow grid-cols-3 items-center">
                  <div>
                    <p className="text-lg font-semibold text-secondary-main dark:text-white-50">
                      ${option.amount}
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-600">
                      ${(option.amount / option.requests).toFixed(3)}/request
                    </p>
                  </div>
                  <div className="text-center">
                    {option.popular && (
                      <Badge className="px-1.5 py-0.5 text-xs font-medium">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-secondary-main dark:text-white-50">
                      {option.requests}
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-600">
                      requests
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <AlertDialogFooter className="mt-4 flex-col gap-2 sm:flex-row">
          <AlertDialogCancel className="text-secondary-main dark:text-white-50 sm:w-1/2">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-secondary-600 hover:bg-secondary-600/90 sm:w-1/2"
            onClick={handleBuyRequests}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
