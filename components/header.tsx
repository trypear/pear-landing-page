import { ReactNode, forwardRef, ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import PearDark from "./ui/PearDark.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import AuthButton from "./ui/authbutton";
import MobileMenu from "./ui/mobile-menu";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DownloadButton from "./ui/downloadbutton";

const NavItem = ({
  href,
  target = "_self",
  children,
}: {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: ReactNode;
}) => (
  <NavigationMenuLink
    asChild
    className={navigationMenuTriggerStyle()}
    href={href}
    target={target}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
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
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground focus:bg-secondary-300/10 focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600/90 dark:text-gray-500">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e6e6e6] bg-background bg-white-50 p-2 transition-all duration-300 ease-in-out">
      <nav
        className="mx-auto flex max-w-[1070px] items-center justify-between px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="flex flex-shrink-0 items-center"
            aria-label="PearAI Home"
          >
            <PearDark />
            <div className="ml-1 mt-[2px] text-xl font-semibold">PearAI</div>
          </Link>
          <nav className="ml-4 hidden md:block" aria-label="Main menu">
            <NavigationMenu>
              <NavigationMenuList className="text-[#666666] dark:text-gray-500">
                <DropdownNavItem trigger="Resources">
                  <ul className="grid w-[400px] gap-3 bg-background p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/about" title="About">
                      Learn more about PearAI
                    </ListItem>
                    <ListItem href="/blog" title="Blog">
                      Read insights on PearAI&apos;s development by our
                      contributors
                    </ListItem>
                    <ListItem href="/faq" title="FAQ">
                      Frequently asked questions about PearAI
                    </ListItem>
                    <ListItem href="/changelog" title="Changelog">
                      See what&apos;s new in PearAI
                    </ListItem>
                    <ListItem href="/beta" title="Beta">
                      Download the latest beta version
                    </ListItem>
                    <ListItem
                      href="/programs/beta-tester"
                      title="Beta Tester Program"
                    >
                      Join PearAI Beta Tester Program for free PearAI
                      subscription and more!
                    </ListItem>
                    <ListItem
                      href="/programs/oss-contributor-benefit"
                      title="OSS Contributor Program"
                    >
                      Contribute to PearAI and get rewards!
                    </ListItem>
                  </ul>
                </DropdownNavItem>
                <NavItem href="/pricing">Pricing</NavItem>
                <NavItem href="/docs">Documentation</NavItem>
                <NavItem
                  href="https://github.com/trypear/pearai-master"
                  target="_blank"
                >
                  GitHub
                </NavItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="hidden items-center space-x-2 lg:flex">
          <AuthButton user={user} handleSignOut={handleSignOut} />
          <DownloadButton user={user} />
        </div>
        <div className="lg:hidden">
          <MobileMenu user={user} handleSignOut={handleSignOut} />
        </div>
      </nav>
    </header>
  );
}
