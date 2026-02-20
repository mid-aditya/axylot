"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] py-4 md:py-8 pointer-events-none">
        <div className="grid-container flex items-center justify-between pointer-events-auto bg-background/50 backdrop-blur-md rounded-full px-6 md:px-10 py-3 md:py-5 border border-border/50 max-w-[95%] md:max-w-[85%] lg:max-w-[75%] mx-auto mt-2 md:mt-4 transition-all hover:bg-background/80 relative">
          
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-2 md:gap-3">
            <div className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-sm group-hover:scale-110 transition-transform duration-300">
               <Image 
                 src="/axylot.svg" 
                 alt="axylot" 
                 fill 
                 className="object-contain invert"
               />
            </div>
            <span className="font-mono font-bold text-lg md:text-xl tracking-tighter uppercase hidden xs:block">axylot</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-[11px] lg:text-[12px] font-mono font-bold uppercase tracking-[0.2em] transition-all relative group ${
                  pathname === item.path ? "text-brand" : "opacity-60 hover:opacity-100"
                }`}
              >
                {item.name}
                <motion.span 
                  initial={false}
                  animate={{ width: pathname === item.path ? "100%" : "0%" }}
                  className="absolute -bottom-1 left-0 h-px bg-brand"
                />
              </Link>
            ))}
            
            <div className="hidden xl:flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60">Accepting Projects</span>
            </div>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className="group relative overflow-hidden bg-brand text-black px-5 md:px-7 py-2 md:py-3 rounded-full text-[10px] md:text-[11px] uppercase font-mono font-bold tracking-[0.1em] hidden sm:block"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">Let's Talk</span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <Link
                    href={item.path}
                    className={`text-3xl font-mono font-bold uppercase tracking-[0.2em] ${
                      pathname === item.path ? "text-brand" : "opacity-60"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Link 
                  href="/contact" 
                  className="bg-brand text-black px-12 py-5 rounded-full text-sm uppercase font-mono font-bold tracking-widest"
                >
                  Start Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
