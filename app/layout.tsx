import Footer from "@/components/Footer";
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
  description: "axylot is a digital solution team providing high-end web, app, and custom system engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Preloader />
        
        {/* Global Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[40] opacity-[0.03]">
          <div className="grid-container h-full">
            <div className="grid-layout h-full">
              {[...Array(13)].map((_, i) => (
                <div key={i} className="h-full w-px bg-white"></div>
              ))}
            </div>
          </div>
        </div>

        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
