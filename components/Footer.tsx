"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES_LINKS = [
  { label: "Web Development", href: "/contact" },
  { label: "Mobile Apps", href: "/contact" },
  { label: "System Engineering", href: "/contact" },
  { label: "UI/UX Design", href: "/contact" },
  { label: "Consulting", href: "/contact" },
];

const SOCIALS = [
  { label: "X (Twitter)", short: "X", href: "https://x.com" },
  { label: "LinkedIn", short: "in", href: "https://linkedin.com" },
  { label: "GitHub", short: "gh", href: "https://github.com" },
  { label: "Dribbble", short: "db", href: "https://dribbble.com" },
];

const MARQUEE_TEXT = "LET'S BUILD SOMETHING GREAT · ENGINEERED FOR GROWTH · AXYLOT STUDIO · ";

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let x = 0;
    let raf: number;
    const speed = 0.5;

    const animate = () => {
      x -= speed;
      const width = el.scrollWidth / 2;
      if (Math.abs(x) >= width) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <footer className="relative bg-background overflow-hidden">

      {/* ── Top accent line ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-40" />

      {/* ── CTA Hero Band ── */}
      <div className="grid-container pt-24 pb-16">
        <div className="flex flex-col gap-6">

          {/* label pill */}
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-brand" />
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand">
              Ready to Start?
            </span>
          </div>

          {/* Huge display headline */}
          <div className="relative">
            <h2
              className="font-sans font-bold uppercase leading-none tracking-tighter text-foreground"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              Let&apos;s{" "}
              <span className="text-brand italic">engineer</span>
              <br />
              your future.
            </h2>
            {/* decorative circle */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-border pointer-events-none hidden lg:block"
              style={{ width: "clamp(160px, 18vw, 280px)", height: "clamp(160px, 18vw, 280px)" }}
            >
              <div className="absolute inset-4 rounded-full border border-border flex items-center justify-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] opacity-40 text-center leading-relaxed px-4">
                  axylot<br />studio<br />2026
                </p>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-brand transition-colors duration-300"
            >
              Start a Project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="mailto:hello@axylot.com"
              className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-brand transition-all duration-300 border-b border-transparent hover:border-brand pb-0.5"
            >
              hello@axylot.com
            </Link>
          </div>
        </div>
      </div>

      {/* ── Scrolling Marquee Band ── */}
      <div className="border-y border-border py-4 overflow-hidden select-none my-4">
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-20 pr-0">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* ── Link Grid ── */}
      <div className="grid-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative h-9 w-9 overflow-hidden rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/axylot.svg" 
                  alt="axylot" 
                  fill 
                  className="object-contain [filter:brightness(0)_saturate(100%)_invert(86%)_sepia(90%)_saturate(1912%)_hue-rotate(359deg)_brightness(103%)_contrast(107%)] opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="font-bold text-xl tracking-tighter uppercase">axylot</span>
            </Link>
            <p className="font-mono text-[11px] leading-relaxed opacity-30 max-w-[200px]">
              Digital engineering studio. High-end solutions, built to scale.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-auto">
              {SOCIALS.map(({ label, short, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 border border-border rounded-full flex items-center justify-center text-[9px] font-mono uppercase hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-200"
                >
                  {short}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.22em] opacity-30">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider opacity-50 hover:opacity-100 hover:text-brand transition-all duration-200"
                  >
                    <span className="h-px w-0 bg-brand transition-all duration-200 group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.22em] opacity-30">Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider opacity-50 hover:opacity-100 hover:text-brand transition-all duration-200"
                  >
                    <span className="h-px w-0 bg-brand transition-all duration-200 group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Status */}
          <div className="flex flex-col gap-5">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.22em] opacity-30">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@axylot.com"
                  className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider opacity-50 hover:opacity-100 hover:text-brand transition-all duration-200"
                >
                  <span className="h-px w-0 bg-brand transition-all duration-200 group-hover:w-3" />
                  hello@axylot.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider opacity-50 hover:opacity-100 hover:text-brand transition-all duration-200"
                >
                  <span className="h-px w-0 bg-brand transition-all duration-200 group-hover:w-3" />
                  Schedule a Call
                </Link>
              </li>
            </ul>

            {/* Availability status */}
            <div className="mt-4 p-4 border border-border rounded-lg bg-card/50">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-green-500">Available</span>
              </div>
              <p className="font-mono text-[9px] opacity-30 leading-relaxed">
                Currently accepting new projects for Q2 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-border">
        <div className="grid-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-20">
            © 2026 Axylot Studio GmbH — All rights reserved
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-mono text-[9px] uppercase tracking-wider opacity-20 hover:opacity-60 hover:text-brand transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
