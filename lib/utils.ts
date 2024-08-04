import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type MetadataProps = {
  title?: string;
  description?: string;
  canonical: string;
  ogImage?: string;
};

const defaultMetadata = {
  title: "PearAI - Open Source AI Code Editor for Fast Development",
  description:
    "PearAI is an Open-source AI-powered code editor with features like AI chat, inline prompts, and debugging to accelerate your coding process.",
};

export const constructMetadata = ({
  title,
  description = defaultMetadata.description,
  canonical = "/",
  ogImage = "/images/og-image.png",
}: MetadataProps) => {
  return {
    metadataBase: new URL("https://trypear.ai/"),
    title: title ? `${title} - pear.ai` : defaultMetadata.title,
    description,
    keywords: ["code editor", "ai code editor", "ai", "pearai"],
    alternates: {
      canonical,
    },

    authors: [
      {
        name: "Nang",
        url: "https://github.com/nang-dev",
      },
      {
        name: "Duke Pan",
        url: "https://github.com/Fryingpannn",
      },
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "OG Image",
        },
      ],
    },

    // --- will add this once we get the logo ---
    // icons: {
    //   icon: "/icon.png",
    //   shortcut: "/icon.png",
    //   apple: "/icon.png",
    // },

    // --- need a twitter handle for this ---
    // twitter: {
    //   title,
    //   description,
    //   creator: "@trypearai",
    //   site: "trypear.ai",
    //   card: "summary_large_image",
    // },
  };
};

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000";

  // Include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;
  // Remove trailing slash if present
  url = url.endsWith("/") ? url.slice(0, -1) : url;
  return url;
};

export function capitalizeInital(input: unknown): string | undefined {
  if (typeof input !== "string") {
    return "";
  }
  if (input.length === 0) {
    return "";
  } else if (input.length === 1) {
    return input.toUpperCase();
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}
