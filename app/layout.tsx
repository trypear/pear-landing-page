import "./css/style.css";
import "./globals.css";
import { Inter, Architects_Daughter } from "next/font/google";
import { PHProvider } from "./providers";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PHProvider>
        <body
          className={`${inter.variable} ${architects_daughter.variable} font-inter bg-white-100 tracking-tight text-secondary-main antialiased`}
        >
          <PostHogPageView />
          <div className="flex min-h-screen flex-col overflow-hidden">
            <Header />
            {children}
            <Toaster position="bottom-right" richColors />
            <Analytics />
          </div>
        </body>
      </PHProvider>
    </html>
  );
}
