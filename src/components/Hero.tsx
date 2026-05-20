"use client";

import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  onAction: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <div id="home" className="relative min-h-screen flex items-center bg-stone-900 pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Kitchen Remodel"
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
          style={{ animationDuration: '15s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-white">
        <div className="max-w-3xl">
          <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase font-sans-alt block mb-4">
            Award-Winning Kitchen Remodeling
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-tight mb-6">
            Crafting the <span className="italic font-normal text-amber-100">Heart</span> of Your Home
          </h1>
          <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl font-sans-alt">
            Asha Interiors designs and builds bespoke luxury kitchens tailored to your lifestyle. Serving Texas's premier neighborhoods with unmatched craftsmanship.
          </p>

          {/* Locations Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {['Houston', 'Dallas', 'San Antonio'].map((city) => (
              <div
                key={city}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-xs tracking-widest uppercase font-sans-alt"
              >
                <MapPin size={12} className="text-amber-400" />
                <span>{city}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onAction('quote')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all flex items-center justify-center gap-2 font-sans-alt"
            >
              Schedule Consultation
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => onAction('portfolio')}
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all font-sans-alt"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;