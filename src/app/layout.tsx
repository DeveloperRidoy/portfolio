import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { seo } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "ASP.NET Core",
    "C#",
    "Node.js",
    "Workflow Automation",
    "Enterprise Software",
    "Ontario Canada",
  ],
  authors: [{ name: "Mubarak Hussain Ridoy" }],
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
