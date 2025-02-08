import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// API key related imports temporarily commented out
// import { EyeIcon, EyeOffIcon, CopyIcon, CheckIcon } from "lucide-react";
// import { toast } from "sonner";

type ProfileCardProps = {
  user: User;
  // apiKey: string; // temporarily commented out
};

export default function ProfileCard({ user /* apiKey */ }: ProfileCardProps) {
  // API key related state and handlers temporarily commented out
  /*
  const [showApiKey, setShowApiKey] = useState(false);
  const [copying, setCopying] = useState(false);

  const handleCopyApiKey = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopying(true);
      toast.success("API key copied to clipboard");
      setTimeout(() => setCopying(false), 2000);
    } catch (err) {
      toast.error("Failed to copy API key");
    }
  };
  */

  return (
    <Card className="flex h-full flex-col overflow-auto bg-gray-100/10 text-card-foreground">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4 pt-4">
        <div className="flex space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={user.user_metadata.avatar_url}
              alt="User Avatar"
            />
            <AvatarFallback>
              {user?.user_metadata.full_name?.[0] || user?.email?.[0] || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">
              {user?.user_metadata.full_name ??
                user?.user_metadata?.login_name ??
                "User"}
            </p>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        {/* API Key display temporarily commented out
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-muted-foreground">
              API Key
            </label>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowApiKey(!showApiKey)}
                className="h-8 px-2"
              >
                {showApiKey ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyApiKey}
                className="h-8 px-2"
              >
                {copying ? (
                  <CheckIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <CopyIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <div className="rounded-md border bg-muted/50 px-3 py-2">
            <code className="break-all font-mono text-sm">
              {showApiKey ? apiKey : "••••••••••••••••••••••"}
            </code>
          </div>
        </div>
        */}
      </CardContent>
      <CardFooter className="mt-auto pt-4">
        {user?.app_metadata.provider === "email" && (
          <Button
            variant="link"
            asChild
            className="ml-auto px-0 text-primary-800"
          >
            <Link href="/update-password">Update Password</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
