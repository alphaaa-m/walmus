import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Smartphone, Globe, RefreshCw, Brain, Users, TrendingUp, Briefcase } from 'lucide-react';

export const Tech: React.FC = () => {
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
             <span className="font-display tracking-[0.3em]">TECHNOLOGY SERVICES</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            WALMUS <span className="text-neon-cyan">TECH</span>
          </h1>
          <p className="max-w-xl text-xl text-slate-300 border-l-2 border-neon-cyan pl-6">
            Technology services company providing AI solutions, web development, backend and frontend development, and custom technology solutions for businesses.
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
            WalMus Tech is a technology services company offering comprehensive solutions including AI integration, web development, backend systems, frontend development, and custom technology solutions tailored for businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              We help businesses transform their digital presence and operations through cutting-edge technology solutions. Our services range from AI integration to full-stack web development.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With expertise in modern technologies and business-focused solutions, WalMus Tech delivers scalable, efficient, and innovative software systems that drive business growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-[50px] rounded-full" />
            <img src="https://picsum.photos/600/600?random=302" alt="Technology Solutions" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Products or Services */}
      <section id="services" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-cyan"></span>
            PRODUCTS & SERVICES
          </h2>
          <p className="text-slate-400 max-w-2xl">
            We offer comprehensive technology services to help transform your business and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { 
              title: 'AI Solutions', 
              desc: 'Artificial intelligence integration, machine learning models, and AI-powered business solutions.',
              icon: Brain,
              color: 'text-neon-cyan'
            },
            { 
              title: 'Web Development', 
              desc: 'Full-stack web development, modern web applications, and responsive websites.',
              icon: Globe,
              color: 'text-neon-purple'
            },
            { 
              title: 'Backend Development', 
              desc: 'Scalable server-side solutions, API development, and backend systems architecture.',
              icon: Server,
              color: 'text-neon-green'
            },
            { 
              title: 'Frontend Development', 
              desc: 'Modern, responsive user interfaces and interactive web applications.',
              icon: Code,
              color: 'text-neon-cyan'
            },
            { 
              title: 'Database Solutions', 
              desc: 'Efficient data management, storage systems, and database architecture.',
              icon: Database,
              color: 'text-neon-purple'
            },
            { 
              title: 'Cloud Services', 
              desc: 'Cloud infrastructure, deployment solutions, and scalable cloud architecture.',
              icon: Cloud,
              color: 'text-neon-green'
            },
          ].map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-all group"
              >
                <IconComponent className={`w-10 h-10 ${service.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors text-white">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="glass-panel p-8 rounded-xl border border-neon-cyan/20">
          <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-neon-cyan" />
            Custom Solutions for Businesses
          </h3>
          <p className="text-slate-300 mb-4">
            We specialize in creating custom technology solutions tailored to your specific business needs. Whether you need AI integration, web applications, or complete digital transformation, we work with you to deliver solutions that drive results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { title: 'Enterprise Solutions', desc: 'Scalable infrastructure for growing businesses' },
              { title: 'Startup Packages', desc: 'Cost-effective solutions for emerging companies' },
              { title: 'Legacy Modernization', desc: 'Transform outdated systems into modern platforms' },
              { title: 'Consulting Services', desc: 'Expert guidance for your technology decisions' },
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
            We serve businesses requiring technology solutions, web development, and AI integration services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Enterprises', desc: 'Large organizations needing scalable technology solutions and digital transformation', icon: '🏢' },
            { title: 'Startups', desc: 'Emerging companies requiring cost-effective technology solutions to launch and grow', icon: '🚀' },
            { title: 'Small & Medium Businesses', desc: 'SMBs looking to modernize operations and enhance digital presence', icon: '💼' },
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
            Our operations are managed by engineers and technology specialists with expertise in software development and AI solutions.
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
                'Engineers specializing in software development',
                'AI and machine learning specialists',
                'Frontend and backend developers',
                'DevOps and cloud infrastructure experts',
                'Project managers and business analysts'
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
              <Code className="w-8 h-8 text-neon-cyan" />
              Operational Focus
            </h3>
            <div className="space-y-4">
              {[
                'Delivering scalable and efficient technology solutions',
                'Implementing AI and machine learning capabilities',
                'Building modern web and mobile applications',
                'Providing ongoing support and maintenance',
                'Ensuring security and best practices'
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
            Our roadmap for growth and expansion in the technology services industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Expand Service Offerings', 
              desc: 'Develop new service capabilities and expand our technology solution portfolio.',
              icon: RefreshCw
            },
            { 
              title: 'Build Client Portfolio', 
              desc: 'Grow our client base across different industries and business sizes.',
              icon: Briefcase
            },
            { 
              title: 'Develop Proprietary Solutions', 
              desc: 'Create proprietary technology solutions and products for market deployment.',
              icon: Brain
            },
            { 
              title: 'Scale Team & Infrastructure', 
              desc: 'Expand our team and infrastructure to serve more clients and larger projects.',
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

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
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
            { title: 'Email', value: 'tech@walmusgroup.com', icon: '✉️' },
            { title: 'Phone', value: 'Contact us for inquiries', icon: '📞' },
            { title: 'Business Inquiries', value: 'info@walmusgroup.com', icon: '💼' },
          ].map((contact, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl text-center border border-white/5 hover:border-neon-cyan/30 transition-all">
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="font-display font-bold mb-2 text-white">{contact.title}</h3>
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
            <a href="mailto:tech@walmusgroup.com" className="inline-block px-8 py-4 bg-neon-cyan text-black font-display font-bold tracking-wider hover:bg-white transition-colors">
              GET STARTED
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
