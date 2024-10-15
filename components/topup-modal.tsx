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
import {
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Rocket,
  Crown,
} from "lucide-react";
import { useTopUpCheckout } from "@/hooks/useTopUpCheckout";
import { useUser } from "@/hooks/useUser";

const REQUEST_OPTIONS = [
  {
    amount: 5,
    requests: 200,
    popular: false,
    icon: MessageSquare,
    feature: "Juicer",
  },
  {
    amount: 10,
    requests: 400,
    popular: false,
    icon: Sparkles,
    feature: "Health Potion",
  },
  { amount: 15, requests: 700, popular: true, icon: Rocket, feature: "2x EXP" },
  {
    amount: 30,
    requests: 1400,
    popular: false,
    icon: Crown,
    feature: "Ult",
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
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          {" "}
          {isSubmitting ? "Processing..." : "Top Up Credits"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[400px] select-none sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-secondary-800 dark:text-white-50">
            Top Up Credits
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-gray-700 dark:text-gray-600">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Top up credits work similar to a &quot;pay-as-you-go&quot;
                system and <b>never expire</b>, staying in your account
                indefinitely until you use them.
              </li>
              <li>
                Top up credits will only be used once you&apos;ve exhausted your
                Monthly PearAI credits. Your remaining top up credit amount will
                be shown on the dashboard.
              </li>
              <li>
                The amount purchased is deposited to your account, and the usage
                cost depends on the input/output sizes of your prompts, and the
                LLM provider/model used.
              </li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid grid-cols-2 gap-4 pt-1 sm:pb-4 sm:pt-3">
          {REQUEST_OPTIONS.map((option) => (
            <Card
              key={option.amount}
              className={`h-[7rem] cursor-pointer transition-all ${
                selectedAmount === option.amount
                  ? "bg-tertiary-100 ring-2 ring-secondary-main dark:bg-secondary-main dark:ring-white-50"
                  : "hover:bg-tertiary-100 hover:shadow-md dark:hover:bg-secondary-main"
              } ${option.popular ? "relative overflow-hidden" : ""} `}
              onClick={() => setSelectedAmount(option.amount)}
            >
              <CardContent className="flex h-4 flex-col justify-between p-4">
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center">
                      <option.icon className="mr-2 h-4 w-4 text-secondary-main dark:text-white-50 sm:h-5 sm:w-5" />
                      <p className="text-base font-semibold text-secondary-main dark:text-white-50 sm:text-sm">
                        {option.feature}
                      </p>
                    </div>
                    {selectedAmount === option.amount && (
                      <CheckCircle2 className="h-5 w-5 fill-gray-100/[0.15] text-secondary-main dark:fill-secondary-main dark:text-white-50" />
                    )}
                  </div>
                  <p className="text-2xl font-bold text-secondary-main dark:text-white-50">
                    ${option.amount} <span className="text-lg">top up</span>
                  </p>
                  <div className="mt-1 flex items-center">
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipContent className="-ml-9 max-w-[200px] border-gray-300 bg-white-50 text-center text-xs text-gray-700 dark:border-gray-200 dark:bg-secondary-main dark:text-gray-800">
                          <p>
                            Your PearAI Credits usage depend on your prompt
                            input and output sizes.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                {option.popular && (
                  <div className="absolute bottom-0 left-0 w-full bg-black py-1 text-center text-xs text-white-50 dark:bg-white-50 dark:text-secondary-main">
                    Most Popular
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <AlertDialogFooter className="flex-col gap-2 sm:flex-row">
          <AlertDialogCancel className="text-secondary-main dark:text-white-50 sm:w-1/2">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-primary-800 sm:w-1/2"
            onClick={handleBuyRequests}
            disabled={isSubmitting}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
