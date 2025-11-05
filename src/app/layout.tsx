// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isha Singh | Data Science Enthusiast & AI Learner",
  description: "MCA Candidate at LPU | Passionate about extracting insights from data, building predictive models, and creating intelligent AI-driven solutions.",
  keywords: "Isha Singh, Full-Stack Developer, AI Enthusiast, Web Developer, Portfolio, React, Next.js, Python, Java",
  authors: [{ name: "Isha Singh" }],
  openGraph: {
    title: "Isha Singh | Data Science Enthusiast & AI Learner",
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
