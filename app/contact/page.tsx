"use client";

import PageHero from "@/components/PageHero";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero 
        pill="// Contact Us"
        title='Let&apos;s Build <br/><span class="italic text-brand">The Future.</span>'
        subtitle="Available for select technical partnerships and complex digital transformations. Inquire below."
      />

      <section className="py-24 border-t border-border">
         <div className="grid-container">
            <div className="grid-layout gap-12">
               <div className="col-span-12 lg:col-span-12">
                  <div className="p-px bg-gradient-to-br from-brand/40 to-transparent rounded-3xl">
                     <div className="bg-background rounded-[23px] p-8 md:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                           <div>
                              <h3 className="text-3xl font-bold mb-12 uppercase tracking-tighter italic">Connect</h3>
                              <ul className="space-y-12">
                                 {[
                                   { label: "General Inquiry", value: "hello@axylot.com", icon: <Mail size={20} /> },
                                   { label: "Book a Project", value: "Schedule Call", icon: <ArrowUpRight size={20} /> },
                                   { label: "Location", value: "Working Globally", icon: <MapPin size={20} /> }
                                 ].map((item, i) => (
                                   <li key={i} className="flex flex-col gap-4">
                                      <div className="flex items-center gap-3 opacity-20">
                                         {item.icon}
                                         <span className="font-mono text-[10px] uppercase tracking-widest">{item.label}</span>
                                      </div>
                                      <span className="text-2xl font-bold hover:text-brand transition-colors cursor-pointer">{item.value}</span>
                                   </li>
                                 ))}
                              </ul>
                           </div>

                           <div className="space-y-8">
                              <h3 className="text-3xl font-bold mb-12 uppercase tracking-tighter italic">Quick Message</h3>
                              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                 <div className="space-y-2">
                                    <label className="font-mono text-[10px] uppercase tracking-widest opacity-20">Your Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand/40 transition-colors" placeholder="Fella Smith" />
                                 </div>
                                 <div className="space-y-2">
                                    <label className="font-mono text-[10px] uppercase tracking-widest opacity-20">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand/40 transition-colors" placeholder="hello@world.com" />
                                 </div>
                                 <div className="space-y-2">
                                    <label className="font-mono text-[10px] uppercase tracking-widest opacity-20">The Vision</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand/40 transition-colors" placeholder="Tell us what we're engineering..." />
                                 </div>
                                 <button className="w-full bg-brand text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3">
                                    Send Transmission <Send size={18} />
                                 </button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
