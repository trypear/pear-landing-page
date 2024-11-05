import { CalendarIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function PageHeader() {
  return (
    <header className="mb-16">
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-light tracking-tight lg:text-5xl">
          Security
        </h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <time dateTime="2024-11-11">Last Updated: November 11, 2024</time>
        </div>

        <div className="text-md max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
          <p>
            At PearAI, the security of your code and data is paramount. We
            maintain rigorous security standards and welcome community
            involvement in keeping our platform secure.
          </p>
          <p>
            Found a security vulnerability? Please follow our{" "}
            <Link
              href="https://github.com/trypear/pearai-master/SECURITY.md"
              className="font-medium text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              security vulnerability disclosure guidelines
            </Link>{" "}
            to report it responsibly. We take all security reports seriously and
            will respond promptly.
          </p>
        </div>
      </div>

      <Separator className="mt-8" />
    </header>
  );
}
