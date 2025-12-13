import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Pharma } from './pages/Pharma';
import { Foods } from './pages/Foods';
import { Garments } from './pages/Garments';
import { Tech } from './pages/Tech';

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/pharma" element={<Pharma />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/garments" element={<Garments />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-slate-200 bg-dark-900 selection:bg-neon-cyan selection:text-dark-900">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;