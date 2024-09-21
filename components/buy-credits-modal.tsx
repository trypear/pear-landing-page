import { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { CreditCard, DollarSign } from "lucide-react";

const QUICK_AMOUNTS = [10, 20, 50, 80];
const MIN_AMOUNT = 5;
const MAX_AMOUNT = 80;
const CREDIT_PRICE = 0.1; // 10 cents per credit

export default function BuyCreditsModal() {
  const [amount, setAmount] = useState<string>("10");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const numericAmount = Number(amount);
    if (numericAmount < MIN_AMOUNT) setAmount(MIN_AMOUNT.toString());
    if (numericAmount > MAX_AMOUNT) setAmount(MAX_AMOUNT.toString());
  }, [amount]);

  const handleAmountChange = (value: string) => {
    if (
      value === "" ||
      (Number(value) >= MIN_AMOUNT && Number(value) <= MAX_AMOUNT)
    ) {
      setAmount(value);
    }
  };

  const handleSliderChange = (value: number[]) => {
    setAmount(value[0].toString());
  };

  const handleQuickAmountSelect = (quickAmount: number) => {
    setAmount(quickAmount.toString());
  };

  const handleBuyCredits = () => {
    const numericAmount = Number(amount);
    if (numericAmount >= MIN_AMOUNT && numericAmount <= MAX_AMOUNT) {
      const creditsAmount = Math.floor(numericAmount / CREDIT_PRICE);
      console.log(`Purchased ${creditsAmount} credits for $${numericAmount}`);
      setIsOpen(false);
    } else {
      console.error(`Invalid amount: $${numericAmount}`);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Buy Extra Credits</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-sm sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">
            Buy Extra Credits
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 dark:text-gray-500">
            Purchase additional credits to continue using AI prompts.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount ($)
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              className="col-span-3 bg-gray-600/10 dark:bg-gray-300/10"
            />
          </div>
          <Slider
            value={[Number(amount)]}
            onValueChange={handleSliderChange}
            max={MAX_AMOUNT}
            min={MIN_AMOUNT}
            step={1}
            className="mt-2"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-500">
              ${MIN_AMOUNT}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-500">
              ${MAX_AMOUNT}
            </span>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            {QUICK_AMOUNTS.map((quickAmount) => (
              <Button
                key={quickAmount}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAmountSelect(quickAmount)}
              >
                ${quickAmount}
              </Button>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-500/10 p-4 dark:bg-gray-300/10">
            <div className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Credits to receive:</span>
            </div>
            <span className="text-2xl font-bold">
              {amount ? Math.floor(Number(amount) / CREDIT_PRICE) : 0}
            </span>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleBuyCredits}>
            <DollarSign className="h-4 w-4" />
            Buy Credits
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
