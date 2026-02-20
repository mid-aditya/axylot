"use client";

import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero 
        pill="// The Studio"
        title='Engineered By <br/><span class="italic text-brand">Vanguards.</span>'
        subtitle="A compact crew of senior engineers and designers focused on creating technical solutions with surgical precision."
      />

      <section className="py-24 border-y border-border">
         <div className="grid-container">
            <div className="grid-layout items-start gap-12">
               <div className="col-span-12 lg:col-span-6">
                  <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">Our Philosophy</h2>
                  <div className="space-y-12">
                     {[
                       { t: "Speed is a Feature", d: "Performance isn't an afterthought. We optimize every millisecond for maximum responsiveness." },
                       { t: "Zero Friction", d: "Direct Slack access. Weekly sprints. No account managers standing between you and the engineers." },
                       { t: "The Detail is Everything", d: "We care about the hover states on your buttons and the security of your database equally." }
                     ].map((item, i) => (
                       <div key={i} className="max-w-md">
                          <h4 className="text-xl font-bold mb-4 italic text-brand">— {item.t}</h4>
                          <p className="opacity-40 leading-relaxed font-light">{item.d}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-6 aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group overflow-hidden">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border-2 border-brand/20 rounded-full flex items-center justify-center p-8 group-hover:border-brand/60 transition-colors"
                  >
                     <div className="w-full h-full border-2 border-brand/40 rounded-full flex items-center justify-center p-8">
                         <span className="font-mono text-xs font-bold text-center tracking-tighter uppercase opacity-40 group-hover:opacity-100 transition-opacity">Axylot <br/> Core</span>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* The Developers Section */}
      <section className="py-32">
        <div className="grid-container">
          <div className="mb-20">
            <span className="text-brand font-mono text-[10px] uppercase tracking-[0.4em] block mb-4">// The Collective</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">The <span className="italic text-brand/40">Entities</span> behind<br/>the machine.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "Zolt", type: "Electric / Core", image: "/cat.jpg", desc: "Specialist in high-voltage frontend architectures and instantaneous state management.", colors: "from-brand/20 to-transparent" },
              { id: "Hexa", type: "Geometric / Logic", image: "/dog.jpg", desc: "Expert in complex backend geometry and modular system distribution.", colors: "from-blue-400/10 to-transparent" },
              { id: "Byte", type: "Data / Shell", image: "/sheep.jpg", desc: "Master of database encapsulation and ultra-secure information layers.", colors: "from-emerald-400/10 to-transparent" }
            ].map((dev, i) => (
              <motion.div 
                key={dev.id}
                whileHover={{ y: -10 }}
                className="group relative bg-white/[0.02] border border-white/5 p-10 rounded-2xl hover:bg-white/[0.05] hover:border-brand/20 transition-all duration-500"
              >
                {/* Developer Visual */}
                <div className="relative w-full aspect-square mb-10 bg-black/40 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${dev.colors} opacity-30`} />
                  
                  {/* Image Container */}
                  <div className="relative z-10 w-full h-full p-2">
                    <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 group-hover:border-brand/40 transition-colors">
                      <Image 
                        src={dev.image} 
                        alt={dev.id}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 font-mono text-[8px] opacity-20 group-hover:opacity-40 transition-opacity z-20">
                    ENTITY_TYPE: {dev.id}_MOD_{i+1}<br/>STATUS: ACTIVE
                  </div>

                  {/* Universal Nano Banana Overlay */}
                  <motion.div 
                    animate={{ y: [0, -4, 0], rotate: [-2, 2, -2] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 z-20"
                  >
                    <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
                      <path d="M72 65 C74 65, 78 68, 78 73 C78 77, 74 80, 69 80 C66 80, 64 78, 64 75 C64 70, 68 65, 72 65 Z" fill="#FAFF00" />
                      <path d="M71 63 L72 60" stroke="#FAFF00" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">{dev.id}</h4>
                  <p className="text-sm font-mono text-brand uppercase tracking-widest opacity-60">{dev.type}</p>
                  <p className="mt-6 text-sm opacity-30 leading-relaxed font-light">{dev.desc}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-brand/20 group-hover:bg-brand transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-24">
         <div className="grid-container text-center max-w-2xl">
            <h3 className="text-3xl font-bold mb-12 uppercase tracking-tighter italic">We don&apos;t build projects. We engineer partnerships.</h3>
            <p className="opacity-40 font-light">Join the 40+ brands that have scaled their digital footprint with Axylot.</p>
         </div>
      </div>
    </div>
  );
}
