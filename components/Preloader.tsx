"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Preloader() {
  const pathname = usePathname();
  const [complete, setComplete] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    // Show preloader
    setComplete(false);

    // Duration: 1.6s for first load, 0.8s for page hops
    const timer = setTimeout(() => {
      setComplete(true);
      // After first load is done, subsequent hits are not initial
      if (isInitial) setIsInitial(false);
    }, isInitial ? 1800 : 1000);

    return () => clearTimeout(timer);
  }, [pathname, isInitial]);

  return (
    <AnimatePresence mode="wait">
      {!complete && (
        <motion.div
          key="master-preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center gap-10">
            {/* Logo Centerpiece */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, rotate: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: 360
              }}
              transition={{ 
                scale: { duration: 0.6, ease: "easeOut" },
                opacity: { duration: 0.6, ease: "easeOut" },
                rotate: { duration: 4, ease: "linear", repeat: Infinity }
              }}
              className="relative w-24 h-24 md:w-32 md:h-32"
            >
              <Image 
                src="/axylot.svg" 
                alt="axylot" 
                fill 
                className="object-contain [filter:brightness(0)_saturate(100%)_invert(86%)_sepia(90%)_saturate(1912%)_hue-rotate(359deg)_brightness(103%)_contrast(107%)]"
                priority
              />
            </motion.div>

            {/* Progress Design */}
            <div className="flex flex-col items-center gap-5 w-40 md:w-56 text-center">
              <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: isInitial ? 1.5 : 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand"
                />
              </div>
              
              <div className="flex justify-between w-full mt-1">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-mono text-[9px] tracking-[0.4em] uppercase opacity-30 text-left"
                >
                  {isInitial ? "System.Init" : "Route.Sync"}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-mono text-[9px] tracking-[0.4em] uppercase text-brand text-right"
                >
                  Axylot
                </motion.span>
              </div>
            </div>
          </div>
          
          {/* Subtle technical background grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10">
             <div className="grid-container h-full">
                <div className="grid-layout h-full">
                   {[...Array(6)].map((_, i) => (
                     <div key={i} className="h-full w-px bg-white"></div>
                   ))}
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
