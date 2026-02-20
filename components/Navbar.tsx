"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-stretch justify-between h-[64px] md:h-[72px] border-b border-white/10">

          {/* ── LEFT: Logo ───────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-3 px-6 md:px-10 border-r border-white/10 group shrink-0"
          >
            <div className="relative h-7 w-7 overflow-hidden shrink-0 group-hover:rotate-12 transition-transform duration-300">
              <Image
                src="/axylot.svg"
                alt="axylot"
                fill
                className="object-contain [filter:brightness(0)_saturate(100%)_invert(86%)_sepia(90%)_saturate(1912%)_hue-rotate(359deg)_brightness(103%)_contrast(107%)]"
              />
            </div>
            <span className="font-mono font-black text-[15px] tracking-[0.12em] uppercase text-white hidden xs:block">
              axylot
            </span>
          </Link>

          {/* ── CENTER: Menu toggle (desktop nav hidden, menu button shown) ── */}
          <div className="flex items-center justify-center flex-1">
            {/* Desktop links — shown as a clean centered list */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative font-mono text-[11px] font-bold uppercase tracking-[0.22em] transition-opacity duration-200 group ${
                    pathname === item.path
                      ? "text-white opacity-100"
                      : "text-white opacity-40 hover:opacity-100"
                  }`}
                >
                  {item.name}
                  {/* Active underline */}
                  {pathname === item.path && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-brand"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile: MENU label + hamburger lines */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden flex items-center gap-3 group"
              aria-label="Open Menu"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white opacity-70 group-hover:opacity-100 transition-opacity">
                Menu
              </span>
              {/* 3-line hamburger */}
              <div className="flex flex-col gap-[5px]">
                <span className="block w-5 h-[1.5px] bg-white" />
                <span className="block w-5 h-[1.5px] bg-white" />
              </div>
            </button>
          </div>

          {/* ── RIGHT: CTA + Plus button ─────────────────── */}
          <div className="flex items-stretch shrink-0 border-l border-white/10">
            <Link
              href="/contact"
              className="hidden sm:flex items-center px-6 md:px-8 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white border-r border-white/10 hover:bg-white hover:text-black transition-colors duration-200"
            >
              Let's Talk
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-[56px] md:w-[64px] text-white hover:bg-white hover:text-black transition-colors duration-200 text-xl font-light"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} strokeWidth={1.5} /> : <span className="text-2xl leading-none font-extralight">+</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile / Full-screen Menu Overlay ─────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-stretch justify-between h-[64px] border-b border-white/10">
              <Link href="/" className="flex items-center gap-3 px-6 border-r border-white/10">
                <div className="relative h-7 w-7">
                  <Image src="/axylot.svg" alt="axylot" fill className="object-contain invert" />
                </div>
                <span className="font-mono font-black text-[15px] tracking-[0.12em] uppercase text-white">
                  axylot
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-[64px] border-l border-white/10 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col flex-1 justify-center px-8 md:px-16 gap-1">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, ease: [0.76, 0, 0.24, 1] }}
                  className="border-b border-white/10 py-5 md:py-7"
                >
                  <Link
                    href={item.path}
                    className={`flex items-center justify-between group ${
                      pathname === item.path ? "text-white" : "text-white/40 hover:text-white"
                    } transition-colors duration-200`}
                  >
                    <span className="font-mono font-black text-4xl md:text-6xl uppercase tracking-tight">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-60 transition-opacity">
                      → Go
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between px-8 md:px-16 py-6 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Accepting Projects
                </span>
              </div>
              <Link
                href="/contact"
                className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black bg-white px-6 py-3 hover:bg-brand transition-colors duration-200"
              >
                Start Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}