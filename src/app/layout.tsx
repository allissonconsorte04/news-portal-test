import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils"
import { HotTopic } from "@/components/HotTopic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Portal",
  description: "News Portal Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Header />
        <HotTopic />
        {children}
      </body>
    </html>
  );
}
