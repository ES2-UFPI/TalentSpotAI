import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/service";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TalentSpot AI",
  description: "TalentSpot AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
  );
}
