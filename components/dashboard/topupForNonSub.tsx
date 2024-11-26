import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Sparkles, Rocket, Crown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const REQUEST_OPTIONS = [
  {
    amount: 5,
    requests: 200,
    icon: MessageSquare,
    feature: "Juicer",
    description:
      "Perfect for casual users. Get 200 requests to power up your experience.",
  },
  {
    amount: 10,
    requests: 400,
    icon: Sparkles,
    feature: "Health Potion",
    description:
      "Double the power with 400 requests. Great value for regular users.",
  },
  {
    amount: 15,
    requests: 700,
    icon: Rocket,
    feature: "2x EXP",
    description:
      "Boost your capabilities with 700 requests. Popular among power users.",
  },
  {
    amount: 30,
    requests: 1400,
    icon: Crown,
    feature: "Ult",
    description:
      "Ultimate package with 1400 requests. Best value for intensive usage.",
  },
];

export function TopUpModalNonSubscriber() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setTimeout(() => {
      setIsOpen(open);
    }, 0);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleOpenChange(true);
  };

  const handleClose = () => {
    handleOpenChange(false);
    if (dontShowAgain) {
      localStorage.setItem("hideTopUpModal", "true");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          onClick={handleButtonClick}
          style={{ touchAction: "manipulation" }}
        >
          View Top-Up Prices
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[400px] select-none sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-secondary-800 dark:text-white-50">
            Top-Up Prices
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-gray-700 dark:text-gray-600">
            Unlock the ability to purchase top-up credits by upgrading to a paid
            subscription. Below are the available top-up packages for
            subscribers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <TooltipProvider>
          <div className="grid grid-cols-2 gap-4 pt-1 sm:pb-4 sm:pt-3">
            {REQUEST_OPTIONS.map((option) => (
              <Tooltip key={option.amount} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Card className="bg-gray-50 shadow-md transition-all hover:shadow-lg dark:bg-secondary-800">
                    <CardContent className="flex flex-col justify-between p-4">
                      <div>
                        <div className="mb-1 flex items-center">
                          <option.icon className="mr-2 h-4 w-4 text-secondary-main dark:text-white-50 sm:h-5 sm:w-5" />
                          <p className="text-base font-semibold text-secondary-main dark:text-white-50 sm:text-sm">
                            {option.feature}
                          </p>
                        </div>
                        <p className="text-2xl font-bold text-secondary-main dark:text-white-50">
                          ${option.amount}{" "}
                          <span className="text-lg">top up</span>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Includes {option.requests} requests.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="max-w-[200px] text-center"
                >
                  {option.description}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
        <AlertDialogFooter className="flex items-center justify-between gap-4 sm:justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="dontShowAgain"
              checked={dontShowAgain}
              onCheckedChange={(checked) =>
                setDontShowAgain(checked as boolean)
              }
              className="h-4 w-4"
            />
            <Label
              htmlFor="dontShowAgain"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Don&apos;t show this again
            </Label>
          </div>
          <Button variant="outline" onClick={handleClose} className="ml-auto">
            Close
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default TopUpModalNonSubscriber;
