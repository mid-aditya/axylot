"use client";

import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

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

      <div className="py-24">
         <div className="grid-container text-center max-w-2xl">
            <h3 className="text-3xl font-bold mb-12 uppercase tracking-tighter italic">We don&apos;t build projects. We engineer partnerships.</h3>
            <p className="opacity-40 font-light">Join the 40+ brands that have scaled their digital footprint with Axylot.</p>
         </div>
      </div>
    </div>
  );
}
