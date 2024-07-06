import "./css/style.css";
import "./globals.css";
import { Inter, Architects_Daughter } from "next/font/google";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "@/components/theme-provider";

// delete later
import Image from "next/image";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter bg-white-100 tracking-tight text-secondary-main antialiased dark:bg-gray-900 dark:text-white-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed left-0 top-0 z-[999] w-full h-14 pointer-events-none bg-[url(/nka.png)] mix-blend-overlay bg-cover opacity-20 overflow-hidden"></div>

          <div className="flex min-h-screen flex-col overflow-hidden">
            <Header />
            {children}
            <Toaster position="bottom-right" richColors />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
