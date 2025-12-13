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

      {/* Collection Section */}
      <section id="collection" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-purple"></span>
            COLLECTION
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Explore our latest smart-wear collections featuring adaptive technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Performance Line', desc: 'Optimized for athletic performance', price: 'Credits: 1200' },
            { title: 'Executive Series', desc: 'Professional smart-wear for business', price: 'Credits: 1500' },
            { title: 'Casual Collection', desc: 'Everyday adaptive clothing', price: 'Credits: 800' },
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-neon-purple/50 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src={`https://picsum.photos/600/400?random=${600+i}`} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-neon-purple">{item.price}</span>
                  <button className="px-4 py-2 bg-white/5 hover:bg-neon-purple hover:text-black rounded text-xs font-display tracking-wider uppercase transition-all">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-purple"></span>
            TECH
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Advanced fabric technology integrated into every garment.
          </p>
        </div>

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
      </section>

      {/* Fitting Section */}
      <section id="fitting" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-purple"></span>
            FITTING
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Advanced fitting technology ensures perfect fit for every body type.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: '3D Body Scanning', desc: 'Precise measurements using advanced scanning technology', icon: '📐' },
            { title: 'Custom Tailoring', desc: 'Personalized fit based on your unique measurements', icon: '✂️' },
            { title: 'Virtual Try-On', desc: 'See how garments look before ordering', icon: '👔' },
            { title: 'Size Recommendations', desc: 'AI-powered sizing suggestions for optimal fit', icon: '🤖' },
          ].map((fitting, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl border-l-4 border-neon-purple/50 hover:border-neon-purple transition-all">
              <div className="text-4xl mb-4">{fitting.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3">{fitting.title}</h3>
              <p className="text-slate-400">{fitting.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};