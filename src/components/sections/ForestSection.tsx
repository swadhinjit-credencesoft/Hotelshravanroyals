import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ForestSection() {
  return (
    <section className="bg-forest py-48 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <Image 
            src='/images/exterior3.jpeg' 
            alt="Hotel Surya Bella Casa Purnea - Best Hotel in Purnea Near Bus Stand" 
            fill 
             className="object-cover mix-blend-overlay"
             sizes="100vw"
          />
       </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10 text-center text-ivory">
         <div className="max-w-3xl mx-auto">
            <SectionLabel light className="justify-center mb-8">Guardians of the Land</SectionLabel>
            <h2 className="font-display text-5xl md:text-8xl italic mb-12 leading-none">
               Preserving the <br /> Eternal Horizon
            </h2>
            <p className="font-serif text-xl md:text-2xl font-light italic mb-16 leading-relaxed opacity-80">
               At Hotel Surya Bella Casa, we do not own the land; we hold it in trust. From our solar-passive sanctuaries to our preservation programs, every aspect of the inn is designed to leave no trace but memories.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
               <div className="border-l border-gold/30 pl-6">
                  <span className="font-serif text-4xl text-gold mb-4 block">0%</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest opacity-60">Single-use Plastic</p>
               </div>
               <div className="border-l border-gold/30 pl-6">
                  <span className="font-serif text-4xl text-gold mb-4 block">100%</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest opacity-60">Renewable Energy</p>
               </div>
               <div className="border-l border-gold/30 pl-6">
                  <span className="font-serif text-4xl text-gold mb-4 block">12k</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest opacity-60">Native Trees Planted</p>
               </div>
            </div>

             <a href="/about" className="inline-block mt-20 bg-ivory text-forest font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold hover:text-forest transition-all duration-500">
                Our Commitment
             </a>
         </div>
      </div>

      {/* Decorative floating leaf or branch element if desired, but keeping it clean for now */}
    </section>
  );
}
