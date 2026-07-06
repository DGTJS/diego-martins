import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { SmoothCursor } from "@/components/ui/smooth-cursor";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Diego Martins | Front-end Developer",
    template: "%s | Diego Martins",
  },
  description:
    "Portfólio de Diego Martins, focado em React, Next.js, TypeScript e interfaces modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
        <Analytics />
        <SmoothCursor />
      </body>
    </html>
  );
}
