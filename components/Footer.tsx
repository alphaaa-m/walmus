import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Twitter, Linkedin, Facebook, Activity, Utensils, Shirt, Code } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export const Footer: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const { isStandalone } = useNavigation();

  const getFooterConfig = () => {
    if (path.includes('/pharma')) {
      return {
        brand: 'WALMUS PHARMA',
        desc: "Advancing human longevity through molecular engineering and synthetic biology systems.",
        showDivisions: false,
        Icon: Activity,
        color: "text-neon-cyan",
        contact: "pharma.lab@walmus.corp"
      };
    } else if (path.includes('/foods')) {
      return {
        brand: 'WALMUS FOODS',
        desc: "Sustainable, lab-grown nutrition tailored for peak human performance.",
        showDivisions: false,
        Icon: Utensils,
        color: "text-neon-green",
        contact: "nutrition@walmus.corp"
      };
    } else if (path.includes('/garments')) {
      return {
        brand: 'WALMUS GARMENTS',
        desc: "Adaptive smart-wear fabrics that respond to environment and vital signs.",
        showDivisions: false,
        Icon: Shirt,
        color: "text-neon-purple",
        contact: "apparel@walmus.corp"
      };
    } else if (path.includes('/tech')) {
      return {
        brand: 'WALMUS TECH',
        desc: "Cutting-edge technology solutions for the digital future.",
        showDivisions: false,
        Icon: Code,
        color: "text-neon-cyan",
        contact: "tech@walmus.corp"
      };
    } else {
      return {
        brand: 'WALMUS',
        desc: "Pioneering the future of humanity through advanced pharmaceuticals, sustainable nutrition, and next-gen apparel.",
        showDivisions: true,
        Icon: Hexagon,
        color: "text-neon-cyan",
        contact: "contact@walmus.corp"
      };
    }
  };

  const config = getFooterConfig();
  const FooterIcon = config.Icon;

  return (
    <footer className="glass-panel border-t border-white/5 bg-dark-900/50 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className={`grid grid-cols-1 ${config.showDivisions ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-12`}>
          {/* Brand */}
          <div className={`${config.showDivisions ? 'col-span-1 md:col-span-2' : 'col-span-1 md:col-span-1'}`}>
            <Link to={path} className="flex items-center space-x-2 mb-4">
              <FooterIcon className={`w-6 h-6 ${config.color}`} />
              <span className="font-display text-xl font-bold tracking-widest text-white">
                {config.brand}
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              {config.desc}
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className={`w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white transition-all hover:bg-white/10`}>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Conditional Divisions Column - Only show on home page, not in standalone mode */}
          {config.showDivisions && !isStandalone && (
            <div>
              <h4 className="font-display font-bold text-white mb-6">DIVISIONS</h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/pharma" 
                    state={{ fromHome: true }}
                    className="text-slate-400 hover:text-neon-cyan transition-colors"
                  >
                    Pharma
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/foods" 
                    state={{ fromHome: true }}
                    className="text-slate-400 hover:text-neon-green transition-colors"
                  >
                    Foods
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/garments" 
                    state={{ fromHome: true }}
                    className="text-slate-400 hover:text-neon-purple transition-colors"
                  >
                    Garments
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/tech" 
                    state={{ fromHome: true }}
                    className="text-slate-400 hover:text-neon-cyan transition-colors"
                  >
                    Tech
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Quick Links (Replacement for Divisions on subpages if needed, or just Contact) */}
          {!config.showDivisions && (
             <div>
                <h4 className="font-display font-bold text-white mb-6">LEGAL</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><a href="#" className="hover:text-white">Privacy Protocol</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-white">Compliance</a></li>
                </ul>
             </div>
          )}

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">CONTACT</h4>
            <ul className="space-y-4 text-slate-400">
              <li>HQ: Neo-Tokyo Dist. 9</li>
              <li>{config.contact}</li>
              <li>+1 (555) 909-2077</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} {config.brand === 'WALMUS' ? 'WalMus Enterprise' : config.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};