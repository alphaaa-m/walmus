import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Twitter, Linkedin, Facebook, Activity, Utensils, Shirt, Code, GraduationCap } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export const Footer: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const { isStandalone } = useNavigation();

  const getFooterConfig = () => {
    if (path.includes('/pharma')) {
      return {
        brand: 'WALMUS PHARMA',
        desc: "Medical retail business providing medicines and healthcare products from licensed manufacturers with full regulatory compliance.",
        showDivisions: false,
        Icon: Activity,
        color: "text-neon-cyan",
        contact: "pharma@walmusgroup.com"
      };
    } else if (path.includes('/foods')) {
      return {
        brand: 'WALMUS FOODS',
        desc: "Restaurant and fast-food business offering fresh, ready-to-eat meals with focus on taste, consistency, and exceptional customer experience.",
        showDivisions: false,
        Icon: Utensils,
        color: "text-neon-green",
        contact: "foods@walmusgroup.com"
      };
    } else if (path.includes('/garments')) {
      return {
        brand: 'WALMUS GARMENTS',
        desc: "Clothing and wearable products business offering quality shirts, pants, and everyday wear focused on comfort, quality, and affordability.",
        showDivisions: false,
        Icon: Shirt,
        color: "text-neon-purple",
        contact: "garments@walmusgroup.com"
      };
    } else if (path.includes('/tech')) {
      return {
        brand: 'WALMUS TECH',
        desc: "Technology services company providing AI solutions, web development, backend and frontend development, and custom technology solutions.",
        showDivisions: false,
        Icon: Code,
        color: "text-neon-cyan",
        contact: "tech@walmusgroup.com"
      };
    } else if (path.includes('/education')) {
      return {
        brand: 'WALMUS EDUCATION',
        desc: "Skill-based education division offering courses, professional training, career guidance, and educational programs.",
        showDivisions: false,
        Icon: GraduationCap,
        color: "text-neon-purple",
        contact: "education@walmusgroup.com"
      };
    } else {
      return {
        brand: 'WALMUS GROUP',
        desc: "A multi-division business group operating across food, healthcare, technology, garments, and education. Each division operates independently with specialized teams.",
        showDivisions: true,
        Icon: Hexagon,
        color: "text-neon-cyan",
        contact: "info@walmusgroup.com"
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
            {path === '/' && (
              <p className="text-slate-500 text-sm mb-6 italic">
                "One Group. Multiple Businesses."
              </p>
            )}
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
                    to="/foods" 
                    state={{ fromHome: true }}
                    className="text-slate-400 hover:text-neon-green transition-colors"
                  >
                    Foods
                  </Link>
                </li>
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
                <li>
                  <Link 
                    to="/education" 
                    state={{ fromHome: true }}
                    className="text-slate-400 hover:text-neon-purple transition-colors"
                  >
                    Education
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Quick Links (Replacement for Divisions on subpages if needed, or just Contact) */}
          {!config.showDivisions && (
             <div>
                <h4 className="font-display font-bold text-white mb-6">QUICK LINKS</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                </ul>
             </div>
          )}

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">CONTACT</h4>
            <ul className="space-y-4 text-slate-400">
              <li>{config.contact}</li>
              <li>Business Inquiries</li>
              <li>Partnerships & Careers</li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        {path === '/' && (
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-slate-500 text-sm text-center max-w-3xl mx-auto">
              WalMus Group is an early-stage business group. Individual divisions operate independently under dedicated teams.
            </p>
          </div>
        )}
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} {config.brand === 'WALMUS GROUP' ? 'WalMus Group' : config.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
