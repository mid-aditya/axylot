import FeaturedWork from "@/components/FeaturedWork";
import PageHero from "@/components/PageHero";

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <PageHero 
        pill="// Selected Work"
        title='Engineering <span class="italic text-brand">Masterpieces.</span>'
        subtitle="A collection of performance-optimized systems and avant-garde interfaces built for the modern web."
      />
      
      <FeaturedWork />

      <section className="py-24 border-t border-border">
        <div className="grid-container">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Frontend", desc: "Pixel perfect motion-driven sites." },
                { title: "Backend", desc: "Scalable, secure cloud infrastructure." },
                { title: "Mobile", desc: "Native experiences for iOS & Android." }
              ].map((service, i) => (
                <div key={i} className="group">
                  <span className="font-mono text-xs opacity-20 block mb-4">0{i+1}</span>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="opacity-40 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
