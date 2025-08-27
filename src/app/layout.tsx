// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Kumar | Full-Stack Developer & AI Enthusiast",
  description: "Portfolio of Rahul Kumar, an MCA candidate skilled in Full-Stack Web Development, AI Integration, and Data Science.",
  keywords: "Rahul Kumar, Full-Stack Developer, AI Enthusiast, Web Developer, Portfolio, React, Next.js, Python, Java",
  authors: [{ name: "Rahul Kumar" }],
  openGraph: {
    title: "Rahul Kumar | Full-Stack Developer & AI Enthusiast",
    description: "Portfolio of Rahul Kumar, an MCA candidate skilled in Full-Stack Web Development, AI Integration, and Data Science.",
    type: "website",
    url: "https://yourportfolio.com", // Replace with your actual domain
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}