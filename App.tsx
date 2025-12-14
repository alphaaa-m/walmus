import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Pharma } from './pages/Pharma';
import { Foods } from './pages/Foods';
import { Garments } from './pages/Garments';
import { Tech } from './pages/Tech';
import { Education } from './pages/Education';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-slate-200 bg-dark-900 selection:bg-neon-cyan selection:text-dark-900">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/pharma" element={<Pharma />} />
            <Route path="/garments" element={<Garments />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;