import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Target, TrendingUp, Award, Briefcase, Lightbulb } from 'lucide-react';

export const Education: React.FC = () => {
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
          <img src="https://picsum.photos/1920/1080?random=204" alt="Education" className="w-full h-full object-cover opacity-20 filter sepia-[.3] hue-rotate-[180deg] blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex items-center gap-4 mb-4 text-neon-purple">
             <GraduationCap className="w-8 h-8" />
             <span className="font-display tracking-[0.3em]">SKILL-BASED EDUCATION</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            WALMUS <span className="text-neon-purple">EDUCATION</span>
          </h1>
          <p className="max-w-xl text-xl text-slate-300 border-l-2 border-neon-purple pl-6">
            Skill-based education division offering courses, professional training, career guidance, and educational programs to support professional development.
          </p>
        </div>
      </div>

      {/* Business Overview */}
      <section id="overview" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-purple"></span>
            BUSINESS OVERVIEW
          </h2>
          <p className="text-slate-400 max-w-2xl">
            WalMus Education is a skill-based education division offering comprehensive courses, professional training, career guidance, and educational programs designed to support professional development and career advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Our mission is to provide practical, skill-based education that empowers individuals to advance their careers and achieve their professional goals.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We offer courses and training programs across various fields, with specialized support for technology and healthcare sectors. Our programs are designed by experienced teachers and instructors who understand the needs of modern professionals.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-purple/20 blur-[50px] rounded-full" />
            <img src="https://picsum.photos/600/600?random=501" alt="Education Programs" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Products or Services */}
      <section id="products" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-purple"></span>
            PRODUCTS & SERVICES
          </h2>
          <p className="text-slate-400 max-w-2xl">
            We offer comprehensive educational programs and services to support professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { 
              title: 'Skill-Based Courses', 
              desc: 'Comprehensive courses designed to develop practical skills and professional competencies.',
              icon: BookOpen,
              color: 'text-neon-purple'
            },
            { 
              title: 'Professional Training', 
              desc: 'Specialized training programs for career advancement and skill enhancement.',
              icon: Briefcase,
              color: 'text-neon-purple'
            },
            { 
              title: 'Career Guidance', 
              desc: 'Expert guidance and counseling to help individuals navigate their career paths.',
              icon: Target,
              color: 'text-neon-purple'
            },
            { 
              title: 'Educational Programs', 
              desc: 'Structured educational programs covering various professional fields and industries.',
              icon: GraduationCap,
              color: 'text-neon-purple'
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
                className="glass-panel p-8 rounded-xl border border-white/5 hover:border-neon-purple/50 transition-all"
              >
                <IconComponent className={`w-10 h-10 ${item.color} mb-6`} />
                <h3 className="font-display text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="glass-panel p-8 rounded-xl border border-neon-purple/20">
          <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-neon-purple" />
            Specialized Training Support
          </h3>
          <p className="text-slate-300 mb-4">
            WalMus Education can provide specialized training to support other WalMus Group divisions, including technology training for WalMus Tech and healthcare training for WalMus Pharma.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { title: 'Tech Training', desc: 'Technology and software development training programs' },
              { title: 'Healthcare Training', desc: 'Medical and pharmaceutical industry training' },
              { title: 'Business Skills', desc: 'Professional development and business skills training' },
              { title: 'Industry-Specific', desc: 'Tailored training for specific industries and roles' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-neon-purple mt-2 flex-shrink-0" />
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
            <span className="w-8 h-1 bg-neon-purple"></span>
            TARGET CUSTOMERS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            We serve individuals seeking professional development, skill enhancement, and career advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Career Changers', desc: 'Individuals looking to transition into new fields or industries', icon: '🔄' },
            { title: 'Skill Seekers', desc: 'Professionals wanting to enhance existing skills or learn new ones', icon: '📚' },
            { title: 'Recent Graduates', desc: 'New graduates seeking practical skills and career guidance', icon: '🎓' },
            { title: 'Career Advancers', desc: 'Professionals aiming to advance in their current careers', icon: '📈' },
          ].map((customer, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl border-l-4 border-neon-purple/50 hover:border-neon-purple transition-all">
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
            <span className="w-8 h-1 bg-neon-purple"></span>
            TEAM & OPERATIONS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Our operations are managed by teachers and instructors with expertise in curriculum development and professional training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Users className="w-8 h-8 text-neon-purple" />
              Our Team Structure
            </h3>
            <div className="space-y-4">
              {[
                'Teachers and instructors with industry experience',
                'Curriculum developers and educational designers',
                'Career counselors and guidance specialists',
                'Training coordinators and program managers',
                'Subject matter experts across various fields'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-neon-purple mt-2 flex-shrink-0" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-neon-purple" />
              Operational Focus
            </h3>
            <div className="space-y-4">
              {[
                'Developing practical and relevant curriculum',
                'Delivering high-quality instruction and training',
                'Providing career guidance and support',
                'Ensuring student success and outcomes',
                'Building partnerships with industry professionals'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-neon-purple mt-2 flex-shrink-0" />
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
            <span className="w-8 h-1 bg-neon-purple"></span>
            FUTURE EXPANSION PLANS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Our roadmap for growth and expansion in the education and training industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Develop Comprehensive Course Catalog', 
              desc: 'Build a wide range of courses covering various professional fields and skill areas.',
              icon: BookOpen
            },
            { 
              title: 'Establish Training Facilities', 
              desc: 'Set up physical and online training facilities to deliver educational programs.',
              icon: Award
            },
            { 
              title: 'Support Tech and Pharma Divisions', 
              desc: 'Develop specialized training programs to support WalMus Tech and WalMus Pharma divisions.',
              icon: Briefcase
            },
            { 
              title: 'Expand Educational Reach', 
              desc: 'Grow our student base and expand educational offerings to serve more learners.',
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
                className="glass-panel p-8 rounded-xl border-l-4 border-neon-purple/50 hover:border-neon-purple transition-all"
              >
                <IconComponent className="w-10 h-10 text-neon-purple mb-4" />
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

