import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, Activity, Utensils, Shirt, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  // Define branding and navigation based on current path
  const getNavConfig = () => {
    if (path.includes('/pharma')) {
      return {
        brand: 'WALMUS PHARMA',
        baseColor: 'text-neon-cyan',
        glowShadow: 'shadow-[0_0_10px_#06b6d4]',
        Icon: Activity,
        links: [
          { name: 'MAIN', path: '/' },
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
          { name: 'MAIN', path: '/' },
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
          { name: 'MAIN', path: '/' },
          { name: 'COLLECTION', path: '#' },
          { name: 'TECH', path: '#' },
          { name: 'FITTING', path: '#' },
        ]
      };
    } else {
      // Default / Home
      return {
        brand: 'WALMUS',
        baseColor: 'text-white',
        glowShadow: 'shadow-[0_0_10px_#06b6d4]',
        Icon: Hexagon,
        iconColor: 'text-neon-cyan', // specific override for home icon
        links: [
          { name: 'HOME', path: '/' },
          { name: 'PHARMA', path: '/pharma' },
          { name: 'FOODS', path: '/foods' },
          { name: 'GARMENTS', path: '/garments' },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="glass-panel border-b border-white/5 bg-dark-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to={path === '/' ? '/' : path} className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <NavIcon className={`w-8 h-8 ${brandColor} fill-current/10`} />
            </motion.div>
            <span className={`font-display text-2xl font-bold tracking-widest transition-colors ${config.brand === 'WALMUS' ? 'text-white group-hover:text-neon-cyan' : config.baseColor}`}>
              {config.brand}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {config.links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
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
            ))}
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
              {config.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-display text-lg tracking-widest ${
                    isActive(link.path) ? config.baseColor : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};