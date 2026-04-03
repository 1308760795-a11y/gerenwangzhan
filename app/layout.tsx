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
  title: "李佳成 | AI 训练师 / 模型评测 / 多模态数据构建",
  description:
    "李佳成的个人网站，聚焦 AI 训练、模型评测、Agent 工具调用与多模态数据构建。",
  keywords: [
    "AI训练师",
    "模型评测",
    "多模态数据构建",
    "Agent",
    "Function Calling",
    "数据标注",
  ],
  openGraph: {
    title: "李佳成 | AI 训练师 / 模型评测 / 多模态数据构建",
    description:
      "聚焦 Agent 工具调用、多模态图文对话、数据质量管控与自动化提效的个人网站。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-ink font-sans text-white`}>
        {children}
      </body>
    </html>
  );
}
