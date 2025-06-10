import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  password: string;
  className?: string;
}

export function PasswordStrength({ password, className }: PasswordStrengthProps) {
  const [strength, setStrength] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!password) {
      setStrength(0);
      setMessage("");
      return;
    }

    let score = 0;
    let feedback = [];

    // Length check
    if (password.length >= 8) {
      score += 1;
    } else {
      feedback.push("At least 8 characters");
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push("One uppercase letter");
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push("One lowercase letter");
    }

    // Number check
    if (/[0-9]/.test(password)) {
      score += 1;
    } else {
      feedback.push("One number");
    }

    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) {
      score += 1;
    } else {
      feedback.push("One special character");
    }

    setStrength(score);

    if (score === 0) {
      setMessage("");
    } else if (score <= 2) {
      setMessage("Weak - " + feedback.join(", "));
    } else if (score <= 3) {
      setMessage("Medium - " + feedback.join(", "));
    } else if (score <= 4) {
      setMessage("Strong - " + feedback.join(", "));
    } else {
      setMessage("Very Strong");
    }
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 2) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    if (strength <= 4) return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full transition-all duration-300",
            getStrengthColor()
          )}
          style={{ width: `${(strength / 5) * 100}%` }}
        />
      </div>
      {message && (
        <p
          className={cn("text-sm", {
            "text-red-500": strength <= 2,
            "text-yellow-500": strength === 3,
            "text-blue-500": strength === 4,
            "text-green-500": strength === 5,
          })}
        >
          {message}
        </p>
      )}
    </div>
  );
} 