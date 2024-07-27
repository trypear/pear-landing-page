import "./css/style.css";
import "./globals.css";
import { Inter, Architects_Daughter } from "next/font/google";
import { PHProvider } from "./providers";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

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
          className={`${inter.variable} ${architects_daughter.variable} font-inter bg-background tracking-tight text-gray-900 antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PostHogPageView />
            <div className="flex min-h-screen flex-col">
              <Header />
              {children}
              <Toaster position="bottom-right" richColors />
              <Analytics />
              <SpeedInsights />
            </div>
          </ThemeProvider>
          <Analytics />
        </body>
      </PHProvider>
    </html>
  );
}
