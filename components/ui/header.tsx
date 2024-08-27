"use client";

import {
  useState,
  useEffect,
  ReactNode,
  forwardRef,
  ComponentPropsWithoutRef,
} from "react";
import Link from "next/link";
import { LogIn, LogOut, Menu, Settings, SquareArrowRight } from "lucide-react";
import PearGreenLogo from "./PearGreen.svg";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./darkmode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Skeleton } from "./skeleton";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setReady(true);
    };
    checkUser();
  }, [supabase.auth]);

  const handleSignout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/signin");
  };

  return { user, ready, handleSignout };
};

const useScrollDetection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => (
  <NavigationMenuItem>
    <NavigationMenuLink className={navigationMenuTriggerStyle()} href={href}>
      {children}
    </NavigationMenuLink>
  </NavigationMenuItem>
);

const DropdownNavItem = ({
  trigger,
  children,
}: {
  trigger: string;
  children: ReactNode;
}) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
    <NavigationMenuContent>{children}</NavigationMenuContent>
  </NavigationMenuItem>
);

const MobileNavItem = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="block rounded-md py-4 text-base font-medium text-foreground"
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

const ListItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, ready, handleSignout } = useUser();
  const isScrolled = useScrollDetection();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 p-3 transition-all duration-300 ease-in-out",
        isScrolled && "bg-background backdrop-blur-sm",
      )}
    >
      <div className="mx-auto max-w-6xl">
        <nav
          className={cn(
            "rounded-full border border-border/50 bg-background shadow-md transition-all duration-300 ease-in-out",
            isScrolled && "bg-background",
          )}
          aria-label="Main navigation"
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center"
                  aria-label="PearAI Home"
                >
                  <PearGreenLogo />
                  <div className="h4 ml-2">PearAI</div>
                </Link>
                <nav className="ml-10 hidden md:block" aria-label="Main menu">
                  <NavigationMenu>
                    <NavigationMenuList className="space-x-1">
                      <NavItem href="/">Home</NavItem>
                      <DropdownNavItem trigger="Features">
                        <ul className="grid gap-3 bg-background p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/features"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  PearAI Features
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Discover how PearAI enhances your coding
                                  workflow with AI-powered features.
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <ListItem
                            href="/features/ai-autocomplete"
                            title="AI Autocomplete"
                          >
                            Intelligent code suggestions powered by AI
                          </ListItem>
                          <ListItem
                            href="/features/code-explanation"
                            title="Code Explanation"
                          >
                            Get instant explanations for complex code snippets
                          </ListItem>
                          <ListItem
                            href="/features/refactoring"
                            title="AI-Assisted Refactoring"
                          >
                            Improve your code quality with AI-driven refactoring
                            suggestions
                          </ListItem>
                        </ul>
                      </DropdownNavItem>
                      <DropdownNavItem trigger="Resources">
                        <ul className="grid w-[400px] gap-3 bg-background p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <ListItem href="/docs" title="Documentation">
                            Learn how to use PearAI effectively
                          </ListItem>
                          <ListItem href="/faq" title="FAQ">
                            Frequently asked questions about PearAI
                          </ListItem>
                          <ListItem href="/blog" title="Blog">
                            Read about the latest PearAI updates and tips
                          </ListItem>
                          <ListItem href="/changelog" title="Changelog">
                            See what&apos;s new in PearAI
                          </ListItem>
                        </ul>
                      </DropdownNavItem>
                      <NavItem href="/pricing">Pricing</NavItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </nav>
              </div>
              <div className="hidden items-center space-x-4 md:flex">
                {!ready ? (
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                ) : (
                  <>
                    {user ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Avatar className="h-8 w-8 cursor-pointer">
                            <AvatarImage
                              src={user.user_metadata.avatar_url}
                              alt={
                                user.user_metadata.full_name || "User avatar"
                              }
                            />
                            <AvatarFallback className="text-xs">
                              {user?.user_metadata.full_name?.[0] ||
                                user?.email?.[0] ||
                                "U"}
                            </AvatarFallback>
                          </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="border border-border/50 bg-background"
                          align="end"
                        >
                          <DropdownMenuItem className="focus:bg-accent">
                            <Link
                              href="/dashboard"
                              className="flex items-center"
                            >
                              <Settings className="mr-2 h-4 w-4" />
                              <span>Dashboard</span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={handleSignout}
                            className="flex cursor-pointer items-center focus:bg-accent"
                          >
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Sign out</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link href="/signup">
                        <Button variant="outline">Try PearAI</Button>
                      </Link>
                    )}
                    <DarkModeToggle />
                  </>
                )}
              </div>
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-md"
                      aria-label="Open menu"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="flex w-[300px] flex-col justify-between sm:w-[400px]"
                  >
                    <div>
                      <SheetHeader className="mb-4">
                        <SheetTitle>PearAI Menu</SheetTitle>
                      </SheetHeader>
                      <nav aria-label="Mobile menu">
                        <ul className="space-y-1">
                          <div className="mb-4 space-y-4">
                            {user ? (
                              <>
                                <Link
                                  href="/dashboard"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                  >
                                    <Settings className="mr-2 h-4 w-4" />
                                    Dashboard
                                  </Button>
                                </Link>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start"
                                  onClick={() => {
                                    handleSignout();
                                    setIsOpen(false);
                                  }}
                                >
                                  <LogOut className="mr-2 h-4 w-4" />
                                  Sign out
                                </Button>
                              </>
                            ) : (
                              <>
                                <Link
                                  href="/signin"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                  >
                                    <LogIn className="mr-2 h-4 w-4" />
                                    Sign in
                                  </Button>
                                </Link>
                                <Link
                                  href="/signup"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <Button
                                    variant="outline"
                                    className="mt-4 w-full justify-start"
                                  >
                                    <SquareArrowRight className="mr-2 h-4 w-4" />
                                    Try PearAI
                                  </Button>
                                </Link>
                              </>
                            )}
                          </div>
                          <MobileNavItem
                            href="/"
                            onClick={() => setIsOpen(false)}
                          >
                            Home
                          </MobileNavItem>
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            <AccordionItem value="features">
                              <AccordionTrigger>Features</AccordionTrigger>
                              <AccordionContent>
                                <ul className="ml-4 space-y-1">
                                  <MobileNavItem
                                    href="/features/ai-autocomplete"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    AI Autocomplete
                                  </MobileNavItem>
                                  <MobileNavItem
                                    href="/features/code-explanation"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    Code Explanation
                                  </MobileNavItem>
                                  <MobileNavItem
                                    href="/features/refactoring"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    AI-Assisted Refactoring
                                  </MobileNavItem>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="resources">
                              <AccordionTrigger>Resources</AccordionTrigger>
                              <AccordionContent>
                                <ul className="ml-4 space-y-1">
                                  <MobileNavItem
                                    href="/resources/documentation"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    Documentation
                                  </MobileNavItem>
                                  <MobileNavItem
                                    href="/resources/api"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    API Reference
                                  </MobileNavItem>
                                  <MobileNavItem
                                    href="/resources/blog"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    Blog
                                  </MobileNavItem>
                                  <MobileNavItem
                                    href="/resources/community"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    Community
                                  </MobileNavItem>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                          <MobileNavItem
                            href="/pricing"
                            onClick={() => setIsOpen(false)}
                          >
                            Pricing
                          </MobileNavItem>
                        </ul>
                      </nav>
                    </div>
                    <div className="width-full space-y-4 pb-6">
                      <div className="width-full">
                        {mounted ? (
                          <Button
                            variant="outline"
                            className="w-full justify-center"
                            onClick={() =>
                              setTheme(theme === "light" ? "dark" : "light")
                            }
                          >
                            {theme === "light" ? (
                              <>
                                <Sun strokeWidth={1} className="h-5 w-5" />
                                Light
                              </>
                            ) : (
                              <>
                                <MoonStar strokeWidth={1} className="h-5 w-5" />
                                Dark
                              </>
                            )}
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
