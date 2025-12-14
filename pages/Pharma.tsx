import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, CheckCircle, Building2, Users, FileCheck, TrendingUp, Package } from 'lucide-react';

export const Pharma: React.FC = () => {
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
          <img src="https://picsum.photos/1920/1080?random=201" alt="Pharma Retail" className="w-full h-full object-cover opacity-20 filter grayscale blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex items-center gap-4 mb-4 text-neon-cyan">
             <Activity className="w-8 h-8" />
             <span className="font-display tracking-[0.3em]">MEDICAL RETAIL</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            WALMUS <span className="text-neon-cyan">PHARMA</span>
          </h1>
          <p className="max-w-xl text-xl text-slate-300 border-l-2 border-neon-cyan pl-6">
            Medical retail business providing medicines and healthcare products sourced from licensed manufacturers with full regulatory compliance.
          </p>
        </div>
      </div>

      {/* Business Overview */}
      <section id="overview" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            BUSINESS OVERVIEW
          </h2>
          <p className="text-slate-400 max-w-2xl">
            WalMus Pharma operates as a medical retail business, distributing medicines and healthcare products from licensed manufacturers with strict adherence to health regulations and compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Our commitment is to provide access to quality medicines and healthcare products while maintaining the highest standards of regulatory compliance, safety, and trust.
            </p>
            <p className="text-slate-400 leading-relaxed">
              All products are sourced exclusively from licensed manufacturers, ensuring quality, authenticity, and compliance with health regulations. We focus on availability, trust, and reliable distribution.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <CheckCircle className="w-6 h-6 text-neon-cyan" />
              <span className="text-slate-300">Licensed manufacturer sourcing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-neon-cyan" />
              <span className="text-slate-300">Full regulatory compliance</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-neon-cyan" />
              <span className="text-slate-300">Trusted distribution network</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-[50px] rounded-full" />
            <img src="https://picsum.photos/600/600?random=300" alt="Medical Products" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Products or Services */}
      <section id="products" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            PRODUCTS & SERVICES
          </h2>
          <p className="text-slate-400 max-w-2xl">
            We distribute medicines and healthcare products from licensed manufacturers, ensuring quality and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { 
              title: 'Pharmaceutical Products', 
              desc: 'Medicines and pharmaceutical products sourced from licensed and regulated manufacturers.',
              icon: Package,
              color: 'text-neon-cyan'
            },
            { 
              title: 'Healthcare Products', 
              desc: 'Healthcare and wellness products meeting regulatory standards and quality requirements.',
              icon: Activity,
              color: 'text-neon-cyan'
            },
            { 
              title: 'Distribution Services', 
              desc: 'Reliable distribution network ensuring timely availability of medical products.',
              icon: Building2,
              color: 'text-neon-cyan'
            },
            { 
              title: 'Compliance & Quality', 
              desc: 'Strict adherence to health regulations and quality assurance standards.',
              icon: Shield,
              color: 'text-neon-cyan'
            },
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-all"
              >
                <IconComponent className={`w-10 h-10 ${item.color} mb-6`} />
                <h3 className="font-display text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="glass-panel p-8 rounded-xl border border-neon-cyan/20">
          <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Shield className="w-8 h-8 text-neon-cyan" />
            Compliance & Quality Assurance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Licensed Sources', desc: 'All products sourced exclusively from licensed manufacturers' },
              { title: 'Regulatory Compliance', desc: 'Full compliance with health regulations and standards' },
              { title: 'Quality Control', desc: 'Rigorous quality assurance and verification processes' },
              { title: 'Documentation', desc: 'Complete documentation and traceability for all products' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
            <p className="text-slate-300 text-sm">
              <strong className="text-white">Important:</strong> WalMus Pharma does not provide medical advice. All products are distributed in compliance with applicable regulations. Please consult healthcare professionals for medical guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section id="customers" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            TARGET CUSTOMERS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            We serve healthcare facilities, pharmacies, and consumers requiring regulated medical products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Healthcare Facilities', desc: 'Hospitals, clinics, and medical centers requiring reliable pharmaceutical supply', icon: '🏥' },
            { title: 'Pharmacies', desc: 'Retail pharmacies and drug stores needing quality medical products', icon: '💊' },
            { title: 'Consumers', desc: 'Individuals requiring regulated medical products with proper documentation', icon: '👥' },
          ].map((customer, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl border-l-4 border-neon-cyan/50 hover:border-neon-cyan transition-all">
              <div className="text-4xl mb-4">{customer.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3 text-white">{customer.title}</h3>
              <p className="text-slate-400">{customer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Operations */}
      <section id="team" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            TEAM & OPERATIONS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Our operations are managed by medical retail and operations teams with expertise in pharmaceutical distribution and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Users className="w-8 h-8 text-neon-cyan" />
              Our Team Structure
            </h3>
            <div className="space-y-4">
              {[
                'Medical retail specialists with regulatory knowledge',
                'Operations teams managing distribution and logistics',
                'Quality assurance and compliance personnel',
                'Supply chain and procurement specialists',
                'Customer service and support teams'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-neon-cyan" />
              Operational Focus
            </h3>
            <div className="space-y-4">
              {[
                'Maintaining regulatory compliance and documentation',
                'Ensuring product quality and authenticity',
                'Building relationships with licensed manufacturers',
                'Managing efficient distribution networks',
                'Providing reliable customer service'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Expansion Plans */}
      <section id="expansion" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            FUTURE EXPANSION PLANS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Our roadmap for growth and expansion in the medical retail industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Expand Product Range', 
              desc: 'Increase our product catalog with additional medicines and healthcare products from licensed manufacturers.',
              icon: Package
            },
            { 
              title: 'Establish Retail Locations', 
              desc: 'Open physical retail locations to serve local communities with accessible medical products.',
              icon: Building2
            },
            { 
              title: 'Develop Distribution Networks', 
              desc: 'Build and expand distribution networks to improve product availability and reach.',
              icon: Activity
            },
            { 
              title: 'Enhance Compliance Infrastructure', 
              desc: 'Strengthen compliance systems and processes to maintain highest regulatory standards.',
              icon: TrendingUp
            },
          ].map((plan, i) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-xl border-l-4 border-neon-cyan/50 hover:border-neon-cyan transition-all"
              >
                <IconComponent className="w-10 h-10 text-neon-cyan mb-4" />
                <h3 className="font-display text-xl font-bold mb-3 text-white">{plan.title}</h3>
                <p className="text-slate-400">{plan.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};
