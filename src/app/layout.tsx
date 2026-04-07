import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xethra | Engineering Next-Generation Digital Ecosystems",
  description:
    "Xethra LLC — high-end software development specializing in deep-tech and AI-driven applications. Full-stack development, AI integration, and UI/UX strategy.",
  keywords: [
    "Xethra",
    "app development",
    "AI",
    "software engineering",
    "LLC",
    "Soundslikeme",
    "Agent4socials",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
