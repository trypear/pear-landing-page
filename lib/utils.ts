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

export const constructMetadata = ({
  title,
  description = "The open source AI-powered code editor",
  canonical = "/",
  ogImage = "",
}: MetadataProps) => {
  return {
    metadataBase: new URL("https://trypear.ai/"),
    title: title ? `${title} - pear.ai` : "Home - pear.ai",
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

    // --- need a ogImage design for this ---
    // openGraph: {
    //     title,
    //     description,
    //     type: "website",
    //     url: canonical,
    //     images: [
    //       {
    //         url: ogImage,
    //         width: 1200,
    //         height: 630,
    //         alt: "OG Image",
    //       },
    //     ],
    //   },

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
