import "./css/style.css";
import "./globals.css";
import { Inter, Architects_Daughter } from "next/font/google";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/sonner";

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
        <div className="flex min-h-screen flex-col overflow-hidden">
          <Header />
          {children}
          <Toaster position="bottom-right" richColors />
        </div>
      </body>
    </html>
  );
}
