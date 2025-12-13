import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Smartphone, Globe, RefreshCw } from 'lucide-react';

export const Tech: React.FC = () => {
  const services = [
    { 
      title: 'Backend Development', 
      desc: 'Scalable server-side solutions and API development.',
      icon: Server,
      color: 'text-neon-cyan'
    },
    { 
      title: 'Frontend Development', 
      desc: 'Modern, responsive user interfaces and web applications.',
      icon: Code,
      color: 'text-neon-purple'
    },
    { 
      title: 'Database Solutions', 
      desc: 'Efficient data management and storage systems.',
      icon: Database,
      color: 'text-neon-green'
    },
    { 
      title: 'Cloud Services', 
      desc: 'Cloud infrastructure and deployment solutions.',
      icon: Cloud,
      color: 'text-neon-cyan'
    },
    { 
      title: 'Mobile Development', 
      desc: 'Native and cross-platform mobile applications.',
      icon: Smartphone,
      color: 'text-neon-purple'
    },
    { 
      title: 'Web Solutions', 
      desc: 'Full-stack web development and optimization.',
      icon: Globe,
      color: 'text-neon-green'
    },
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
          <img src="https://picsum.photos/1920/1080?random=301" alt="Tech Services" className="w-full h-full object-cover opacity-20 filter grayscale blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex items-center gap-4 mb-4 text-neon-cyan">
             <Code className="w-8 h-8" />
             <span className="font-display tracking-[0.3em]">TECHNOLOGY DIVISION</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            WALMUS <span className="text-neon-cyan">TECH</span>
          </h1>
          <p className="max-w-xl text-xl text-slate-300 border-l-2 border-neon-cyan pl-6">
            Cutting-edge technology solutions for the digital future. We build scalable, efficient, and innovative software systems.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            OUR SERVICES
          </h2>
          <p className="text-slate-400 max-w-2xl">
            We offer comprehensive technology services to help transform your business and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-xl border-t border-neon-cyan/20 hover:border-neon-cyan/50 transition-all group"
              >
                <IconComponent className={`w-10 h-10 ${service.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </motion.div>
            );
          })}
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
            Tailored technology solutions designed to solve your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Enterprise Solutions', desc: 'Scalable infrastructure for growing businesses', icon: Server },
            { title: 'Startup Packages', desc: 'Cost-effective solutions for emerging companies', icon: Code },
            { title: 'Legacy Modernization', desc: 'Transform outdated systems into modern platforms', icon: RefreshCw },
            { title: 'Consulting Services', desc: 'Expert guidance for your technology decisions', icon: Globe },
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

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            CONTACT US
            <span className="w-8 h-1 bg-neon-cyan"></span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Get in touch with our team to discuss your technology needs and how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { title: 'Email', value: 'tech@walmus.corp', icon: '✉️' },
            { title: 'Phone', value: '+1 (555) 909-2077', icon: '📞' },
            { title: 'Location', value: 'Neo-Tokyo Dist. 9', icon: '📍' },
          ].map((contact, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl text-center border border-white/5 hover:border-neon-cyan/30 transition-all">
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="font-display font-bold mb-2">{contact.title}</h3>
              <p className="text-slate-400">{contact.value}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl border border-neon-cyan/20 bg-gradient-to-r from-dark-900 to-slate-900/50 p-12">
          <div className="absolute inset-0 bg-neon-cyan/5 blur-[100px]" />
          <div className="relative z-10 text-center">
            <h2 className="font-display text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Let's discuss how we can help bring your vision to life with our technology services.
            </p>
            <button className="px-8 py-4 bg-neon-cyan text-black font-display font-bold tracking-wider hover:bg-white transition-colors skew-x-[-10deg]">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

