import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luqman Hakim | Backend Developer Portfolio",
  description:
    "Professional Backend Engineer specializing in Laravel, PHP, and MySQL. Experienced in building scalable systems and secure API services.",
  keywords: [
    "Luqman Hakim",
    "Backend Developer",
    "Laravel Developer",
    "Web Developer Indonesia",
    "Software Engineer",
  ],
  authors: [{ name: "Luqman Hakim" }],
  openGraph: {
    title: "Luqman Hakim | Backend Developer Portfolio",
    description:
      "Building reliable system architecture and scalable backend services with Laravel.",
    url: "https://portofolio-kamu.com",
    siteName: "Luqman Hakim Portfolio",
    images: [
      {
        url: "/Luqman-Hakim.png",
        width: 1200,
        height: 630,
        alt: "Luqman Hakim Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luqman Hakim | Backend Developer Portfolio",
    description: "Backend Developer specializing in Laravel & TDD",
    images: ["/Luqman-Hakim.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {/* Efek Cahaya Dekoratif */}
        <div className="fixed -z-10 top-0 right-0 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="fixed -z-10 bottom-0 left-0 w-125 h-125 bg-emerald-600/10 blur-[120px] rounded-full"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
