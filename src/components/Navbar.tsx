"use client";

import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Our Process', id: 'process' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Locations', id: 'locations' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => handleNavClick('home')} className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold tracking-widest text-stone-900 uppercase">ASHA</span>
              <span className="text-xs tracking-[0.25em] text-amber-700 uppercase font-sans-alt -mt-1">INTERIORS</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-stone-600 hover:text-amber-700 text-sm font-medium tracking-wider uppercase transition-colors font-sans-alt"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('quote')}
              className="bg-stone-900 hover:bg-amber-800 text-white px-5 py-2.5 rounded-none text-xs tracking-widest uppercase font-medium transition-all font-sans-alt"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-amber-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-3 py-2 text-stone-600 hover:text-amber-700 text-base font-medium tracking-wider uppercase font-sans-alt"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-stone-100">
            <button
              onClick={() => handleNavClick('quote')}
              className="w-full bg-stone-900 hover:bg-amber-800 text-white text-center py-3 text-xs tracking-widest uppercase font-medium transition-all font-sans-alt"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;