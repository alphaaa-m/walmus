import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Leaf, Droplet, Sun } from 'lucide-react';

export const Foods: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark-900 text-white"
    >
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/1920/1080?random=202" alt="Hydroponics" className="w-full h-full object-cover opacity-20 filter sepia-[.5] hue-rotate-[90deg] blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex items-center gap-4 mb-4 text-neon-green">
             <Utensils className="w-8 h-8" />
             <span className="font-display tracking-[0.3em]">ORGANIC SYNTHESIS</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            WALMUS <span className="text-neon-green">FOODS</span>
          </h1>
          <p className="max-w-xl text-xl text-slate-300 border-l-2 border-neon-green pl-6">
            Pure energy. Zero waste. Lab-grown perfection engineered for the modern metabolism.
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-green"></span>
            MENU
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Our complete range of lab-grown nutrition products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Protein Synthesis', desc: 'Complete amino acid profiles', price: 'Credits: 250' },
            { title: 'Vitamin Complex', desc: 'Essential nutrients in optimal ratios', price: 'Credits: 180' },
            { title: 'Mineral Blend', desc: 'Bioavailable mineral supplements', price: 'Credits: 150' },
          ].map((item, i) => (
            <div key={i} className="group glass-panel p-6 rounded-xl border border-white/5 hover:border-neon-green/50 transition-all">
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-neon-green">{item.price}</span>
                <button className="px-4 py-2 bg-white/5 hover:bg-neon-green hover:text-black rounded text-xs font-display tracking-wider uppercase transition-all">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-green"></span>
            NUTRITION
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Advanced nutrition science for optimal health and performance.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-y border-white/10 py-12">
           {[
             { label: "Purity", val: "99.9%" },
             { label: "Efficiency", val: "400%" },
             { label: "Water Usage", val: "-85%" },
             { label: "Growth Time", val: "12h" },
           ].map((stat, i) => (
             <div key={i} className="text-center">
               <div className="text-4xl font-display font-bold text-neon-green mb-1">{stat.val}</div>
               <div className="text-slate-500 text-sm uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="flex gap-4">
               <div className="w-12 h-12 rounded bg-neon-green/10 flex items-center justify-center text-neon-green">
                 <Leaf className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-display text-xl font-bold mb-2">Cellular Agriculture</h3>
                 <p className="text-slate-400">Meat and vegetables grown from single cells in sterile environments. No antibiotics, no suffering.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="w-12 h-12 rounded bg-neon-green/10 flex items-center justify-center text-neon-green">
                 <Droplet className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-display text-xl font-bold mb-2">Hydro-Nutrient Injection</h3>
                 <p className="text-slate-400">Direct nutrient infusion technology maximizing bioavailability and absorption rates.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="w-12 h-12 rounded bg-neon-green/10 flex items-center justify-center text-neon-green">
                 <Sun className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-display text-xl font-bold mb-2">Solar Synthesis</h3>
                 <p className="text-slate-400">Edible compounds harvested directly from enhanced photosynthetic bacteria.</p>
               </div>
             </div>
             
             <button className="mt-8 px-8 py-4 bg-neon-green text-black font-display font-bold tracking-wider hover:bg-white transition-colors skew-x-[-10deg]">
               VIEW NUTRITION PLANS
             </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-neon-green/20 blur-[50px] rounded-full" />
            <img src="https://picsum.photos/600/600?random=401" alt="Future Food" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section id="sources" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-green"></span>
            SOURCES
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Sustainable sourcing and production methods for our nutrition products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Lab Facilities', desc: 'State-of-the-art sterile environments for cellular agriculture', icon: '🧪' },
            { title: 'Research Partners', desc: 'Collaborations with leading nutrition science institutions', icon: '🔬' },
            { title: 'Quality Control', desc: 'Rigorous testing and certification processes', icon: '✅' },
            { title: 'Distribution Network', desc: 'Global supply chain for efficient delivery', icon: '🌍' },
          ].map((source, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl border-l-4 border-neon-green/50 hover:border-neon-green transition-all">
              <div className="text-4xl mb-4">{source.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3">{source.title}</h3>
              <p className="text-slate-400">{source.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};