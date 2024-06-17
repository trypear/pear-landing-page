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
        className={`${inter.variable} ${architects_daughter.variable} font-inter bg-gray-900 tracking-tight text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden">
          <Header />
          {children}
          <Toaster position="bottom-right" />
        </div>
      </body>
    </html>
  );
}
