import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AllowedProtocol } from "../types/url";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type MetadataProps = {
  title?: string;
  description?: string;
  canonical: string;
  ogImage?: string;
};

type SupportedPlatform = "Windows" | "Linux" | "MacOS";
type DownloadAlias = "intel-x64" | "darwin-arm64" | "windows" | "linux";

interface OSType {
  platform: SupportedPlatform;
  architecture: "x64" | "arm";
  download: DownloadAlias;
}

const defaultMetadata = {
  title: "PearAI - Open Source AI Code Editor for Fast Development",
  description:
    "PearAI is an Open-source AI-powered code editor with features like AI chat, inline prompts, and debugging to accelerate your coding process.",
};

export const normalizeDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const allowedProtocols: AllowedProtocol[] = [
  "http:",
  "https:",
  "pearai:",
  "vscode:",
  "code-oss:",
];

export function isAllowedUrl(url: URL): boolean {
  if (!allowedProtocols.includes(url.protocol as AllowedProtocol)) return false;
  if (url.protocol === "http:" || url.protocol === "https:") {
    return (
      url.origin === window.location.origin || url.hostname === "localhost"
    );
  }
  return true;
}

export const constructMetadata = ({
  title,
  description = defaultMetadata.description,
  canonical = "/",
  ogImage = "/images/og-image.png",
}: MetadataProps) => {
  return {
    metadataBase: new URL("https://trypear.ai/"),
    title: title ? `${title} - PearAI` : defaultMetadata.title,
    description,
    keywords: [
      "code editor",
      "ai code editor",
      "ai",
      "pearai",
      "open source code editor",
    ],
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

export async function getOS(): Promise<OSType> {
  try {
    const userAgent = await ((navigator as any).userAgentData
      ? (navigator as any).userAgentData.getHighEntropyValues(["architecture"])
      : navigator.userAgent);
    if (typeof userAgent === "string") {
      let propertiesString = "";
      for (let i = 0; i < userAgent.length; i++) {
        if (i < userAgent.indexOf("(")) continue;
        if (userAgent[i] === "(") continue;
        if (userAgent[i] === ")") break;
        propertiesString += userAgent[i];
      }
      const properties = propertiesString.split("; ");
      const platformString =
        properties
          .find(
            (str) =>
              str.toLowerCase().includes("mac") ||
              str.toLowerCase().includes("linux") ||
              str.toLowerCase().includes("win"),
          )
          ?.toLowerCase() ?? "";
      const architectureString =
        properties
          .find(
            (str) =>
              str.toLowerCase().includes("arm") ||
              str.toLowerCase().includes("x86") ||
              str.toLowerCase().includes("x64") ||
              str.toLowerCase().includes("intel") ||
              str.toLowerCase().includes("silicon"),
          )
          ?.toLowerCase() ?? "";
      let platform: "Windows" | "MacOS" | "Linux";
      if (platformString.includes("win")) {
        platform = "Windows";
      } else if (platformString.includes("mac")) {
        platform = "MacOS";
      } else {
        platform = "Linux";
      }
      let architecture: "x64" | "arm";
      if (
        architectureString.includes("x64") ||
        architectureString.includes("x86")
      ) {
        architecture = "x64";
      } else {
        architecture = "arm";
      }

      // MacOS userAgent String
      // e.g.'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
      if (platform === "MacOS") {
        const split = architectureString.split(" ");
        const version = split
          .find((str) => str.includes("10"))
          ?.split("_")[1] as string;
        const versionNumber = parseInt(version);
        if (typeof versionNumber === "number" && !isNaN(versionNumber)) {
          if (versionNumber > 13) {
            architecture = "arm";
          } else {
            architecture = "x64";
          }
        }
      }
      const download: "darwin-arm64" | "intel-x64" | "windows" | "linux" =
        (platform === "MacOS" && architecture === "x64" && "intel-x64") ||
        (platform === "MacOS" && architecture === "arm" && "darwin-arm64") ||
        (platform === "Windows" && "windows") ||
        (platform === "Linux" && "linux") ||
        "linux";
      return {
        platform: platform,
        architecture: architecture,
        download: download,
      };
    }
    if (
      typeof userAgent === "object" &&
      userAgent.platform &&
      userAgent.architecture
    ) {
      let platform: SupportedPlatform;
      let download: DownloadAlias;
      let architecture: "x64" | "arm";
      if (userAgent.platform !== "macOS") {
        platform = userAgent.platform;
        download = userAgent.platform.toLowerCase();
      } else {
        platform = "MacOS";
        if (userAgent.architecture === "arm") {
          download = "darwin-arm64";
        } else {
          download = "intel-x64";
        }
      }

      if (userAgent.architecture === "arm") {
        architecture = "arm";
      } else {
        architecture = "x64";
      }

      return {
        platform: platform,
        architecture: architecture,
        download: download,
      };
    }
    return { platform: "Linux", architecture: "x64", download: "linux" };
  } catch (err) {
    return { platform: "Linux", architecture: "x64", download: "linux" };
  }
}
