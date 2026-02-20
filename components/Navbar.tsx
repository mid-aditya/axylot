"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-8 pointer-events-none">
      <div className="grid-container flex items-center justify-between pointer-events-auto bg-background/50 backdrop-blur-md rounded-full px-10 py-5 border border-border/50 max-w-[95%] md:max-w-[85%] lg:max-w-[75%] mx-auto mt-4 transition-all hover:bg-background/80">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-sm group-hover:scale-110 transition-transform duration-300">
             <Image 
               src="/axylot.svg" 
               alt="axylot" 
               fill 
               className="object-contain invert"
             />
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter uppercase hidden sm:block">axylot</span>
        </Link>

        <div className="flex items-center space-x-10">
          {[
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: "Pricing", path: "/pricing" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-[12px] font-mono font-bold uppercase tracking-[0.25em] transition-all relative group ${
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

        <Link 
          href="/contact" 
          className="group relative overflow-hidden bg-brand text-black px-7 py-3 rounded-full text-[11px] uppercase font-mono font-bold tracking-[0.1em] hidden lg:block"
        >
          <span className="relative z-10 transition-colors group-hover:text-white">Let's Talk</span>
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </Link>
      </div>
    </nav>
  );
}
