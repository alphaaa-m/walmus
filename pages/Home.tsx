import React from 'react';
import { motion } from 'framer-motion';
import { DivisionCard } from '../components/DivisionCard';
import { Division } from '../types';

const divisions: Division[] = [
  {
    id: '1',
    name: 'PHARMA',
    description: 'Revolutionizing healthcare with nano-molecular precision and AI-driven biological synthesis.',
    path: '/pharma',
    color: 'cyan',
    iconName: 'Activity',
    image: 'https://picsum.photos/800/600?random=101'
  },
  {
    id: '2',
    name: 'FOODS',
    description: 'Sustainable, lab-grown nutrition tailored for peak human performance and longevity.',
    path: '/foods',
    color: 'green',
    iconName: 'Utensils',
    image: 'https://picsum.photos/800/600?random=102'
  },
  {
    id: '3',
    name: 'GARMENTS',
    description: 'Adaptive smart-wear fabrics that respond to environment and vital signs.',
    path: '/garments',
    color: 'purple',
    iconName: 'Shirt',
    image: 'https://picsum.photos/800/600?random=103'
  },
  {
    id: '4',
    name: 'TECH',
    description: 'Cutting-edge technology solutions including backend, frontend, and full-stack development services.',
    path: '/tech',
    color: 'cyan',
    iconName: 'Code',
    image: 'https://picsum.photos/800/600?random=104'
  }
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/20 rounded-full blur-[120px] opacity-20 animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/20 rounded-full blur-[100px] opacity-20 animate-pulse-slow delay-1000" />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-medium text-neon-cyan tracking-[0.5em] mb-4 text-lg">WELCOME TO THE FUTURE</h2>
            <h1 className="font-display text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              WALMUS<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">.CORP</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
              Integrating biology, technology, and lifestyle. We build the infrastructure for the next stage of human evolution.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest text-slate-500 uppercase">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent" />
        </motion.div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 relative z-10 bg-dark-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">OUR DIVISIONS</h2>
            <div className="w-20 h-1 bg-neon-cyan" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {divisions.map((div, idx) => (
              <DivisionCard key={div.id} division={div} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};