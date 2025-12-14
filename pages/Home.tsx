import React from 'react';
import { motion } from 'framer-motion';
import { DivisionCard } from '../components/DivisionCard';
import { divisions } from '../data/divisions';
import { Users, Briefcase, Target, TrendingUp, UserPlus, Handshake, Mail } from 'lucide-react';

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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 leading-tight px-2">
              <span className="inline-block">WALMUS</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple inline-block">GROUP</span>
            </h1>
            <p className="text-neon-cyan text-sm sm:text-base md:text-lg tracking-[0.3em] mb-8 px-2">
              One Group. Multiple Businesses.
            </p>
            <p className="max-w-3xl mx-auto text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-4 px-2">
              A multi-division business group operating across food, healthcare, technology, garments, and education.
            </p>
            <p className="max-w-2xl mx-auto text-slate-500 text-sm sm:text-base leading-relaxed px-2">
              Each division has its own team. Each division offers real products or services. WalMus Group provides strategy, branding, and management.
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

      {/* Divisions Overview Section */}
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
            <p className="text-slate-400 mt-4 max-w-2xl">
              Each division operates independently with specialized teams, offering real products and services in their respective industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div, idx) => (
              <DivisionCard key={div.id} division={div} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* How WalMus Group Works */}
      <section className="py-24 relative z-10 bg-dark-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">HOW WALMUS GROUP WORKS</h2>
            <div className="w-20 h-1 bg-neon-cyan" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-xl border border-white/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Parent Organization</h3>
              <p className="text-slate-400">
                WalMus Group acts as the parent organization providing centralized strategy, branding, and management oversight.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-xl border border-white/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-neon-green/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Specialized Teams</h3>
              <p className="text-slate-400">
                Each division is run by specialized teams: Teachers handle Education, Engineers handle Tech, and retail/operations teams handle Food, Pharma, and Garments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-8 rounded-xl border border-white/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-neon-purple/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Centralized Branding</h3>
              <p className="text-slate-400">
                Unified branding and management approach while maintaining independent execution and operational autonomy for each division.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-8 rounded-xl border border-white/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Independent Execution</h3>
              <p className="text-slate-400">
                Each division operates independently with its own products, services, and customer base while benefiting from group resources.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact / Collaboration Section */}
      <section className="py-24 relative z-10 bg-dark-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">GET IN TOUCH</h2>
            <div className="w-20 h-1 bg-neon-cyan mx-auto" />
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Interested in partnering with WalMus Group, joining our team, or have a business inquiry? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-all text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Handshake className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Partner With WalMus</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Explore partnership opportunities and strategic collaborations with our divisions.
              </p>
              <a href="mailto:partnerships@walmusgroup.com" className="inline-block px-6 py-3 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 rounded-lg font-display font-medium tracking-wider hover:bg-neon-cyan hover:text-black transition-all text-sm">
                Contact Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-xl border border-white/5 hover:border-neon-green/50 transition-all text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-neon-green/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <UserPlus className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Join Our Team</h3>
              <p className="text-slate-400 mb-6 text-sm">
                We're building specialized teams across all divisions. Join us in shaping the future.
              </p>
              <a href="mailto:careers@walmusgroup.com" className="inline-block px-6 py-3 bg-neon-green/10 text-neon-green border border-neon-green/50 rounded-lg font-display font-medium tracking-wider hover:bg-neon-green hover:text-black transition-all text-sm">
                View Opportunities
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-xl border border-white/5 hover:border-neon-purple/50 transition-all text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-neon-purple/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Business Inquiries</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Have questions about our services, products, or operations? Get in touch with our team.
              </p>
              <a href="mailto:info@walmusgroup.com" className="inline-block px-6 py-3 bg-neon-purple/10 text-neon-purple border border-neon-purple/50 rounded-lg font-display font-medium tracking-wider hover:bg-neon-purple hover:text-black transition-all text-sm">
                Send Inquiry
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
