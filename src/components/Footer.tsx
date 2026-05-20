"use client";

import React from 'react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <button onClick={() => onNavigate('home')} className="flex flex-col items-start text-left mb-6">
              <span className="text-2xl font-bold tracking-widest text-white uppercase">ASHA</span>
              <span className="text-xs tracking-[0.25em] text-amber-500 uppercase font-sans-alt -mt-1">INTERIORS</span>
            </button>
            <p className="text-sm font-sans-alt font-light leading-relaxed max-w-sm mb-6">
              Bespoke kitchen remodeling and luxury interior design services. Transforming homes with timeless elegance and master craftsmanship across Texas.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-semibold font-sans-alt mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-sans-alt font-light">
              {['services', 'process', 'portfolio', 'locations'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-amber-400 transition-colors capitalize"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-semibold font-sans-alt mb-4">
              Our Locations
            </h4>
            <ul className="space-y-2 text-sm font-sans-alt font-light">
              <li>Houston Metro</li>
              <li>Dallas / Fort Worth</li>
              <li>San Antonio Metro</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 text-center text-xs font-sans-alt font-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Asha Interiors. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;