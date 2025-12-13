import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Shield, Microscope } from 'lucide-react';

export const Pharma: React.FC = () => {
  const products = [
    { title: 'Neural Repair Kit', desc: 'Nanobots that repair neural pathways.', price: 'Credits: 5000' },
    { title: 'Immuno-Boost V5', desc: 'Synthetic white cell enhancement.', price: 'Credits: 1200' },
    { title: 'Cryo-Stasis Gel', desc: 'Emergency trauma preservation.', price: 'Credits: 850' },
  ];

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
          <img src="https://picsum.photos/1920/1080?random=201" alt="Pharma Lab" className="w-full h-full object-cover opacity-20 filter grayscale blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex items-center gap-4 mb-4 text-neon-cyan">
             <Activity className="w-8 h-8" />
             <span className="font-display tracking-[0.3em]">EST. 2045</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            WALMUS <span className="text-neon-cyan">PHARMA</span>
          </h1>
          <p className="max-w-xl text-xl text-slate-300 border-l-2 border-neon-cyan pl-6">
            Extending life beyond natural limits through synthetic biology and computational medicine.
          </p>
        </div>
      </div>

      {/* Research Section */}
      <section id="research" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            RESEARCH
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Cutting-edge research in synthetic biology and computational medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Microscope, title: "Molecular Precision", desc: "Targeted delivery systems down to the atomic level." },
            { icon: Zap, title: "Rapid Synthesis", desc: "On-demand compound generation in seconds." },
            { icon: Shield, title: "Genetic Defense", desc: "Proactive DNA shielding against environmental hazards." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-xl border-t border-neon-cyan/20"
            >
              <feature.icon className="w-10 h-10 text-neon-cyan mb-6" />
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            SOLUTIONS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Comprehensive pharmaceutical solutions for modern healthcare challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Therapeutic Solutions', desc: 'Advanced treatments for complex diseases', icon: Activity },
            { title: 'Preventive Medicine', desc: 'Proactive health management systems', icon: Shield },
            { title: 'Personalized Treatment', desc: 'Tailored medical solutions based on genetics', icon: Microscope },
            { title: 'Emergency Response', desc: 'Rapid deployment medical systems', icon: Zap },
          ].map((solution, i) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-xl border-l-4 border-neon-cyan/50 hover:border-neon-cyan transition-all"
              >
                <IconComponent className="w-10 h-10 text-neon-cyan mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-slate-400">{solution.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Labs Section */}
      <section id="labs" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            LABS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            State-of-the-art research facilities and latest innovations.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-neon-cyan/50 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src={`https://picsum.photos/600/400?random=${300+i}`} alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{prod.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{prod.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-neon-cyan">{prod.price}</span>
                  <button className="px-4 py-2 bg-white/5 hover:bg-neon-cyan hover:text-black rounded text-xs font-display tracking-wider uppercase transition-all">
                    Acquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};