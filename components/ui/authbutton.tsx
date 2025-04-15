"use client";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { AuthError, User } from "@supabase/supabase-js";
import Link from "next/link";

export default function AuthButton({
  handleSignOut,
  user,
}: {
  handleSignOut: () => Promise<void>;
  user: User | null;
}) {
  return (
    <div className="flex items-center space-x-4">
      {!user ? (
        <div className="m-0 inline-flex rounded-xl border border-[#e6e6e6] p-0">
          <Link href="/signin">
            <Button
              variant="ghost"
              className="h-9 rounded-r-none pl-3 pr-2 text-base font-normal"
            >
              Sign in
            </Button>
          </Link>
          <div className="w-[1px] self-stretch bg-[#e6e6e6]" />
          <Link href="/signup">
            <Button
              variant="ghost"
              className="h-9 rounded-l-none border-0 pl-2 pr-3 text-base font-normal"
            >
              Sign up
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer border border-gray-600/50">
                <AvatarImage
                  src={user?.user_metadata.avatar_url}
                  alt={user?.user_metadata.full_name || "User avatar"}
                />
                <AvatarFallback className="text-xs font-medium">
                  {user?.user_metadata.full_name?.[0].toUpperCase() ||
                    user?.email?.[0].toUpperCase() ||
                    "U"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="border border-border/50 bg-background"
              align="center"
            >
              <DropdownMenuItem
                asChild
                className="flex cursor-pointer items-center focus:bg-secondary-300/10"
              >
                <Button
                  onClick={() => handleSignOut()}
                  variant="secondary"
                  className="w-full"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </div>
  );
}
