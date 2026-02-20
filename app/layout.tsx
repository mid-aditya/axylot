import Footer from "@/components/Footer";
import GradualBlur from "@/components/GradualBlur";
import GridOverlay from "@/components/GridOverlay";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "axylot — Digital Solutions | Engineered for Growth",
  description:
    "axylot is a digital solution team providing high-end web, app, and custom system engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Preloader />

        {/* Grid overlay — client component avoids SSR/client key mismatch */}
        <GridOverlay />

        {/* Navbar */}
        <Navbar />

        {/* Gradual blur at the bottom of the screen */}
        <GradualBlur
          direction="bottom"
          height="120px"
          blurStrength={16}
          layers={10}
          className="fixed bottom-0 z-[55]"
        />

        <PageTransition>{children}</PageTransition>

        <Footer />
      </body>
    </html>
  );
}