import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, Activity, Utensils, Shirt, Code, GraduationCap, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const { isStandalone, fromHome } = useNavigation();

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  // Define branding and navigation based on current path and access method
  const getNavConfig = () => {
    // If standalone (direct link), only show page-specific links, no home navigation
    if (isStandalone) {
      if (path.includes('/pharma')) {
        return {
          brand: 'WALMUS PHARMA',
          baseColor: 'text-neon-cyan',
          glowShadow: 'shadow-[0_0_10px_#06b6d4]',
          Icon: Activity,
          links: [
            { name: 'RESEARCH', path: '#' },
            { name: 'SOLUTIONS', path: '#' },
            { name: 'LABS', path: '#' },
          ]
        };
      } else if (path.includes('/foods')) {
        return {
          brand: 'WALMUS FOODS',
          baseColor: 'text-neon-green',
          glowShadow: 'shadow-[0_0_10px_#10b981]',
          Icon: Utensils,
          links: [
            { name: 'MENU', path: '#' },
            { name: 'NUTRITION', path: '#' },
            { name: 'SOURCES', path: '#' },
          ]
        };
      } else if (path.includes('/garments')) {
        return {
          brand: 'WALMUS GARMENTS',
          baseColor: 'text-neon-purple',
          glowShadow: 'shadow-[0_0_10px_#a855f7]',
          Icon: Shirt,
          links: [
            { name: 'COLLECTION', path: '#' },
            { name: 'TECH', path: '#' },
            { name: 'FITTING', path: '#' },
          ]
        };
      } else if (path.includes('/tech')) {
        return {
          brand: 'WALMUS TECH',
          baseColor: 'text-neon-cyan',
          glowShadow: 'shadow-[0_0_10px_#06b6d4]',
          Icon: Code,
          links: [
            { name: 'SERVICES', path: '#' },
            { name: 'SOLUTIONS', path: '#' },
            { name: 'CONTACT', path: '#' },
          ]
        };
      } else if (path.includes('/education')) {
        return {
          brand: 'WALMUS EDUCATION',
          baseColor: 'text-neon-purple',
          glowShadow: 'shadow-[0_0_10px_#a855f7]',
          Icon: GraduationCap,
          links: [
            { name: 'COURSES', path: '#' },
            { name: 'TRAINING', path: '#' },
            { name: 'GUIDANCE', path: '#' },
          ]
        };
      }
    }

    // Normal navigation (from home or on home page)
    if (path.includes('/pharma')) {
      return {
        brand: 'WALMUS PHARMA',
        baseColor: 'text-neon-cyan',
        glowShadow: 'shadow-[0_0_10px_#06b6d4]',
        Icon: Activity,
        links: [
          { name: 'MAIN', path: '/', withState: true },
          { name: 'RESEARCH', path: '#' },
          { name: 'SOLUTIONS', path: '#' },
          { name: 'LABS', path: '#' },
        ]
      };
    } else if (path.includes('/foods')) {
      return {
        brand: 'WALMUS FOODS',
        baseColor: 'text-neon-green',
        glowShadow: 'shadow-[0_0_10px_#10b981]',
        Icon: Utensils,
        links: [
          { name: 'MAIN', path: '/', withState: true },
          { name: 'MENU', path: '#' },
          { name: 'NUTRITION', path: '#' },
          { name: 'SOURCES', path: '#' },
        ]
      };
    } else if (path.includes('/garments')) {
      return {
        brand: 'WALMUS GARMENTS',
        baseColor: 'text-neon-purple',
        glowShadow: 'shadow-[0_0_10px_#a855f7]',
        Icon: Shirt,
        links: [
          { name: 'MAIN', path: '/', withState: true },
          { name: 'COLLECTION', path: '#' },
          { name: 'TECH', path: '#' },
          { name: 'FITTING', path: '#' },
        ]
      };
    } else if (path.includes('/tech')) {
      return {
        brand: 'WALMUS TECH',
        baseColor: 'text-neon-cyan',
        glowShadow: 'shadow-[0_0_10px_#06b6d4]',
        Icon: Code,
        links: [
          { name: 'MAIN', path: '/', withState: true },
          { name: 'SERVICES', path: '#' },
          { name: 'SOLUTIONS', path: '#' },
          { name: 'CONTACT', path: '#' },
        ]
      };
    } else if (path.includes('/education')) {
      return {
        brand: 'WALMUS EDUCATION',
        baseColor: 'text-neon-purple',
        glowShadow: 'shadow-[0_0_10px_#a855f7]',
        Icon: GraduationCap,
        links: [
          { name: 'MAIN', path: '/', withState: true },
          { name: 'COURSES', path: '#' },
          { name: 'TRAINING', path: '#' },
          { name: 'GUIDANCE', path: '#' },
        ]
      };
    } else {
      // Default / Home
      return {
        brand: 'WALMUS GROUP',
        baseColor: 'text-white',
        glowShadow: 'shadow-[0_0_10px_#06b6d4]',
        Icon: Hexagon,
        iconColor: 'text-neon-cyan', // specific override for home icon
        links: [
          { name: 'HOME', path: '/' },
          { name: 'FOODS', path: '/foods', withState: true },
          { name: 'PHARMA', path: '/pharma', withState: true },
          { name: 'GARMENTS', path: '/garments', withState: true },
          { name: 'TECH', path: '/tech', withState: true },
          { name: 'EDUCATION', path: '/education', withState: true },
        ]
      };
    }
  };

  const config = getNavConfig();
  const NavIcon = config.Icon;
  const brandColor = config.iconColor || config.baseColor;

  const isActive = (linkPath: string) => {
    if (linkPath === '#' || linkPath === '/') return location.pathname === linkPath;
    return location.pathname.startsWith(linkPath);
  };

  // Map navigation names to section IDs
  const getSectionId = (name: string): string | null => {
    const sectionMap: Record<string, string> = {
      'SERVICES': 'services',
      'SOLUTIONS': 'solutions',
      'CONTACT': 'contact',
      'RESEARCH': 'research',
      'LABS': 'labs',
      'MENU': 'menu',
      'NUTRITION': 'nutrition',
      'SOURCES': 'sources',
      'COLLECTION': 'collection',
      'TECH': 'tech',
      'FITTING': 'fitting',
      'COURSES': 'products',
      'TRAINING': 'products',
      'GUIDANCE': 'products',
    };
    return sectionMap[name] || null;
  };

  // Handle scroll to section
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string | null) => {
    if (sectionId) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="glass-panel border-b border-white/5 bg-dark-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo - In standalone mode, logo should not be a link to home */}
          {isStandalone ? (
            <div className="flex items-center space-x-2 group">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <NavIcon className={`w-8 h-8 ${brandColor} fill-current/10`} />
              </motion.div>
              <span className={`font-display text-2xl font-bold tracking-widest transition-colors ${config.brand === 'WALMUS GROUP' ? 'text-white group-hover:text-neon-cyan' : config.baseColor}`}>
                {config.brand}
              </span>
            </div>
          ) : (
            <Link to={path === '/' ? '/' : path} className="flex items-center space-x-2 group">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <NavIcon className={`w-8 h-8 ${brandColor} fill-current/10`} />
              </motion.div>
              <span className={`font-display text-2xl font-bold tracking-widest transition-colors ${config.brand === 'WALMUS GROUP' ? 'text-white group-hover:text-neon-cyan' : config.baseColor}`}>
                {config.brand}
              </span>
            </Link>
          )}

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {config.links.map((link) => {
              const sectionId = getSectionId(link.name);
              
              if (link.path === '#' && sectionId) {
                return (
                  <a
                    key={link.name}
                    href={`#${sectionId}`}
                    onClick={(e) => handleSectionClick(e, sectionId)}
                    className={`relative px-2 py-1 font-display tracking-wider text-sm font-medium transition-colors hover:opacity-100 cursor-pointer ${
                      'text-slate-400 opacity-70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              }
              
              if (link.path === '#') {
                return (
                  <span
                    key={link.name}
                    className={`relative px-2 py-1 font-display tracking-wider text-sm font-medium transition-colors hover:opacity-100 text-slate-400 opacity-70 cursor-default`}
                  >
                    {link.name}
                  </span>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  state={link.withState ? { fromHome: true } : undefined}
                  className={`relative px-2 py-1 font-display tracking-wider text-sm font-medium transition-colors hover:opacity-100 ${
                    isActive(link.path) 
                      ? `${config.baseColor} opacity-100` 
                      : 'text-slate-400 opacity-70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${config.baseColor.replace('text-', 'bg-')} ${config.glowShadow}`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-dark-900/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {config.links.map((link) => {
                const sectionId = getSectionId(link.name);
                
                if (link.path === '#' && sectionId) {
                  return (
                    <a
                      key={link.name}
                      href={`#${sectionId}`}
                      onClick={(e) => {
                        handleSectionClick(e, sectionId);
                        setIsOpen(false);
                      }}
                      className={`font-display text-lg tracking-widest text-slate-400 hover:text-white cursor-pointer transition-colors`}
                    >
                      {link.name}
                    </a>
                  );
                }
                
                if (link.path === '#') {
                  return (
                    <span
                      key={link.name}
                      className={`font-display text-lg tracking-widest text-slate-400 cursor-default`}
                    >
                      {link.name}
                    </span>
                  );
                }
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    state={link.withState ? { fromHome: true } : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-lg tracking-widest ${
                      isActive(link.path) ? config.baseColor : 'text-slate-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};