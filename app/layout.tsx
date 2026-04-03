import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Li Jiacheng | Personal Editions",
  description:
    "Immersive personal brand website and editorial portfolio experience for Li Jiacheng.",
  keywords: [
    "portfolio",
    "personal brand",
    "creative developer",
    "design engineer",
    "interactive website",
  ],
  openGraph: {
    title: "Li Jiacheng | Personal Editions",
    description:
      "A launch-style personal portfolio blending editorial rhythm, immersive motion, and digital craft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-ink font-sans text-white`}>
        {children}
      </body>
    </html>
  );
}
