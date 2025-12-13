import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Utensils, Shirt, Code, LucideIcon } from 'lucide-react';
import { Division } from '../types';

interface DivisionCardProps {
  division: Division;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  'Activity': Activity,
  'Utensils': Utensils,
  'Shirt': Shirt,
  'Code': Code,
};

export const DivisionCard: React.FC<DivisionCardProps> = ({ division, index }) => {
  const location = useLocation();
  const Icon = iconMap[division.iconName];
  
  // If we're on the home page, pass state to indicate navigation from home
  const linkState = location.pathname === '/' ? { fromHome: true } : undefined;

  // Determine border/shadow color classes based on division
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'cyan': return 'hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:text-neon-cyan';
      case 'green': return 'hover:border-neon-green hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:text-neon-green';
      case 'purple': return 'hover:border-neon-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:text-neon-purple';
      default: return 'hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:text-neon-cyan';
    }
  };

  const getButtonColor = (color: string) => {
      switch(color) {
        case 'cyan': return 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/50 hover:bg-neon-cyan hover:text-black';
        case 'green': return 'bg-neon-green/10 text-neon-green border-neon-green/50 hover:bg-neon-green hover:text-black';
        case 'purple': return 'bg-neon-purple/10 text-neon-purple border-neon-purple/50 hover:bg-neon-purple hover:text-black';
        default: return 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/50 hover:bg-neon-cyan hover:text-black';
      }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="h-full"
    >
      <Link 
        to={division.path} 
        state={linkState}
        className="block h-full group"
      >
        <div className={`
          relative h-full glass-panel rounded-2xl p-8 overflow-hidden transition-all duration-500 border border-white/5
          ${getColorClasses(division.color)}
        `}>
          {/* Background Image Gradient Overlay */}
          <div className="absolute inset-0 z-0">
             <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-dark-900 opacity-90`} />
             <img src={division.image} alt={division.name} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 scale-100 group-hover:scale-110" />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className={`w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-8 h-8 text-white ${getColorClasses(division.color)}`} />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2 tracking-wide group-hover:translate-x-2 transition-transform">
                {division.name}
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                {division.description}
              </p>
            </div>

            <div className={`mt-8 flex items-center gap-4 py-3 px-6 rounded-lg w-fit border transition-all duration-300 ${getButtonColor(division.color)}`}>
              <span className="font-display font-medium tracking-widest uppercase text-sm">Explore Division</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};