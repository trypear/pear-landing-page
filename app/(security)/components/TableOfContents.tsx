import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: { id: string; title: string }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="hidden w-72 lg:block">
      <div className="sticky top-20">
        <div className="rounded-lg">
          <h2 className="mb-4 text-sm font-semibold tracking-tight text-muted-foreground">
            On this page
          </h2>

          <nav className="space-y-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm",
                  "transition-colors hover:bg-accent hover:text-accent-foreground",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
