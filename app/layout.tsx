import "./css/style.css";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { PHProvider } from "./providers";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <PHProvider>
        <body className={`bg-background font-sans tracking-tight antialiased`}>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <PostHogPageView />
            <div className="flex min-h-screen flex-col overflow-hidden">
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
