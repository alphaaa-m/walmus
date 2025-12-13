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

      {/* Content */}
      <div className="container mx-auto px-6 py-24">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 border-y border-white/10 py-12">
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
      </div>
    </motion.div>
  );
};