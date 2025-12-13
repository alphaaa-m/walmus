import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Cpu, RefreshCw, Eye } from 'lucide-react';

export const Garments: React.FC = () => {
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
          <img src="https://picsum.photos/1920/1080?random=203" alt="Fashion Tech" className="w-full h-full object-cover opacity-20 filter hue-rotate-[240deg] contrast-125 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex items-center gap-4 mb-4 text-neon-purple">
             <Shirt className="w-8 h-8" />
             <span className="font-display tracking-[0.3em]">INTELLIGENT FABRIC</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            WALMUS <span className="text-neon-purple">GARMENTS</span>
          </h1>
          <p className="max-w-xl text-xl text-slate-300 border-l-2 border-neon-purple pl-6">
            Adaptive skins. Digital camouflage. Apparel that thinks, breathes, and protects.
          </p>
        </div>
      </div>

      {/* Interactive Showroom */}
      <div className="container mx-auto px-6 py-24">
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar controls */}
          <div className="w-full md:w-1/3 space-y-6">
             <h3 className="font-display text-2xl font-bold mb-6 text-white">FABRIC TECH</h3>
             
             {[
               { title: "Thermo-Regulation", icon: RefreshCw, active: true },
               { title: "Bio-Feedback Sensors", icon: Cpu, active: false },
               { title: "Optical Camouflage", icon: Eye, active: false },
             ].map((item, i) => (
               <div key={i} className={`p-6 border rounded-xl cursor-pointer transition-all ${item.active ? 'border-neon-purple bg-neon-purple/5' : 'border-white/10 hover:border-white/30'}`}>
                 <div className="flex items-center justify-between mb-2">
                   <h4 className={`font-display font-bold ${item.active ? 'text-neon-purple' : 'text-slate-300'}`}>{item.title}</h4>
                   <item.icon className={`w-5 h-5 ${item.active ? 'text-neon-purple' : 'text-slate-500'}`} />
                 </div>
                 <p className="text-sm text-slate-500">Active mesh layer adjusts to ambient temperature automatically.</p>
               </div>
             ))}
          </div>

          {/* Main Visual */}
          <div className="w-full md:w-2/3 relative h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-black group">
             <img src="https://picsum.photos/1000/1000?random=500" alt="Model" className="w-full h-full object-cover opacity-60" />
             
             {/* HUD Overlays */}
             <div className="absolute inset-0 p-8 pointer-events-none">
               <div className="absolute top-8 left-8 border-l border-t border-neon-purple w-16 h-16" />
               <div className="absolute top-8 right-8 border-r border-t border-neon-purple w-16 h-16" />
               <div className="absolute bottom-8 left-8 border-l border-b border-neon-purple w-16 h-16" />
               <div className="absolute bottom-8 right-8 border-r border-b border-neon-purple w-16 h-16" />
               
               <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-4">
                 <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                 <div className="w-2 h-2 bg-white/20 rounded-full" />
                 <div className="w-2 h-2 bg-white/20 rounded-full" />
               </div>

               <div className="absolute bottom-12 left-12 glass-panel p-4 rounded max-w-xs">
                 <div className="text-xs text-neon-purple mb-1 font-mono">SCANNING...</div>
                 <div className="text-white font-bold">NANOFIBER INTEGRITY: 98%</div>
                 <div className="h-1 bg-white/20 mt-2 rounded-full overflow-hidden">
                   <div className="h-full w-[98%] bg-neon-purple" />
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};