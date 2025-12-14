import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ChefHat, Truck, Clock, Users, MapPin, TrendingUp } from 'lucide-react';

export const Foods: React.FC = () => {
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
          <img src="https://picsum.photos/1920/1080?random=202" alt="Restaurant" className="w-full h-full object-cover opacity-20 filter sepia-[.5] hue-rotate-[90deg] blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="flex items-center gap-4 mb-4 text-neon-green">
             <Utensils className="w-8 h-8" />
             <span className="font-display tracking-[0.3em]">RESTAURANT & FAST-FOOD</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            WALMUS <span className="text-neon-green">FOODS</span>
          </h1>
          <p className="max-w-xl text-xl text-slate-300 border-l-2 border-neon-green pl-6">
            Fresh food, exceptional taste, and consistent quality. A restaurant and fast-food business dedicated to delivering memorable dining experiences.
          </p>
        </div>
      </div>

      {/* Business Overview */}
      <section id="overview" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-green"></span>
            BUSINESS OVERVIEW
          </h2>
          <p className="text-slate-400 max-w-2xl">
            WalMus Foods is a restaurant and fast-food business focused on delivering quality ready-to-eat meals through dine-in, takeaway, and delivery services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Our mission is to provide fresh, delicious food with consistent quality and exceptional customer service. We focus on taste, freshness, and creating positive dining experiences for every customer.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether you're dining in, taking away, or ordering for delivery, WalMus Foods is committed to serving meals that meet high standards of quality and taste.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-green/20 blur-[50px] rounded-full" />
            <img src="https://picsum.photos/600/600?random=401" alt="Restaurant Interior" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Products or Services */}
      <section id="products" className="container mx-auto px-6 py-24 scroll-mt-20 bg-dark-900/50">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-neon-green"></span>
            PRODUCTS & SERVICES
          </h2>
          <p className="text-slate-400 max-w-2xl">
            We offer ready-to-eat meals through multiple service channels to meet your dining preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { 
              title: 'Dine-In Service', 
              desc: 'Enjoy fresh meals in our comfortable restaurant setting with quality service and atmosphere.',
              icon: MapPin,
              color: 'text-neon-green'
            },
            { 
              title: 'Takeaway', 
              desc: 'Quick and convenient takeaway service for meals on the go without compromising on quality.',
              icon: Truck,
              color: 'text-neon-green'
            },
            { 
              title: 'Delivery', 
              desc: 'Fast and reliable delivery service bringing fresh meals directly to your location.',
              icon: Clock,
              color: 'text-neon-green'
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
                className="glass-panel p-8 rounded-xl border border-white/5 hover:border-neon-green/50 transition-all"
              >
                <IconComponent className={`w-10 h-10 ${item.color} mb-6`} />
                <h3 className="font-display text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="glass-panel p-8 rounded-xl border border-neon-green/20">
          <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <ChefHat className="w-8 h-8 text-neon-green" />
            Our Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Fresh Food', desc: 'Using quality ingredients and maintaining freshness standards' },
              { title: 'Taste', desc: 'Delicious flavors crafted with attention to detail' },
              { title: 'Consistency', desc: 'Reliable quality across all locations and service channels' },
              { title: 'Customer Experience', desc: 'Friendly service and positive interactions with every visit' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-neon-green mt-2 flex-shrink-0" />
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
            <span className="w-8 h-1 bg-neon-green"></span>
            TARGET CUSTOMERS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            We serve general consumers seeking quality fast-food and restaurant dining experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Busy Professionals', desc: 'Quality meals for those with limited time who value convenience and taste', icon: '💼' },
            { title: 'Families', desc: 'Family-friendly dining options with consistent quality and service', icon: '👨‍👩‍👧‍👦' },
            { title: 'Students', desc: 'Affordable, quality food options for students and young adults', icon: '🎓' },
            { title: 'Food Enthusiasts', desc: 'Customers who appreciate good food and dining experiences', icon: '🍽️' },
          ].map((customer, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl border-l-4 border-neon-green/50 hover:border-neon-green transition-all">
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
            <span className="w-8 h-1 bg-neon-green"></span>
            TEAM & OPERATIONS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Our operations are managed by specialized restaurant and operations teams with expertise in food service and customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Users className="w-8 h-8 text-neon-green" />
              Our Team Structure
            </h3>
            <div className="space-y-4">
              {[
                'Restaurant management and operations teams',
                'Kitchen staff and food preparation specialists',
                'Customer service and front-of-house teams',
                'Quality control and food safety personnel',
                'Delivery and logistics coordination'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-neon-green mt-2 flex-shrink-0" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Utensils className="w-8 h-8 text-neon-green" />
              Operational Focus
            </h3>
            <div className="space-y-4">
              {[
                'Maintaining high food quality and safety standards',
                'Ensuring consistent taste and presentation',
                'Delivering excellent customer service',
                'Managing efficient operations across all service channels',
                'Building strong supplier relationships'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-neon-green mt-2 flex-shrink-0" />
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
            <span className="w-8 h-1 bg-neon-green"></span>
            FUTURE EXPANSION PLANS
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Our roadmap for growth and expansion in the food service industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Establish Physical Locations', 
              desc: 'Open restaurant locations in strategic areas to serve local communities with dine-in and takeaway services.',
              icon: MapPin
            },
            { 
              title: 'Expand Menu Offerings', 
              desc: 'Develop and introduce new menu items based on customer feedback and market demand.',
              icon: ChefHat
            },
            { 
              title: 'Develop Delivery Infrastructure', 
              desc: 'Build robust delivery networks and partnerships to expand our reach and convenience.',
              icon: Truck
            },
            { 
              title: 'Scale Operations', 
              desc: 'Grow our team and operational capacity to serve more customers while maintaining quality standards.',
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
                className="glass-panel p-8 rounded-xl border-l-4 border-neon-green/50 hover:border-neon-green transition-all"
              >
                <IconComponent className="w-10 h-10 text-neon-green mb-4" />
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
