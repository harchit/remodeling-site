"use client";

import React from 'react';
import { Hammer, Palette, Layers, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Custom Kitchen Design',
    description: 'Collaborate with our award-winning interior designers to create a 3D rendering of your dream kitchen, optimized for flow, lighting, and luxury aesthetics.',
  },
  {
    icon: Hammer,
    title: 'Bespoke Cabinetry',
    description: 'Handcrafted, custom-built cabinets designed to maximize storage and elevate your kitchen style. Choose from premium hardwoods, finishes, and smart hardware.',
  },
  {
    icon: Layers,
    title: 'Premium Countertops',
    description: 'Expert sourcing and precision installation of luxury quartz, marble, granite, and quartzite surfaces with seamless edge profiles.',
  },
  {
    icon: Sparkles,
    title: 'Full-Service Remodeling',
    description: 'From demolition to final polish, we manage all plumbing, electrical, structural changes, and high-end appliance integration seamlessly.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-semibold tracking-[0.25em] uppercase font-sans-alt block mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-stone-900 mb-6">
            Tailored Kitchen Solutions
          </h2>
          <div className="w-16 h-[1px] bg-amber-700 mx-auto mb-6" />
          <p className="text-stone-600 font-sans-alt font-light leading-relaxed">
            We handle every aspect of your kitchen transformation. Our comprehensive approach ensures a stress-free experience and a breathtaking final result.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                  <Icon className="text-stone-700 group-hover:text-amber-700 transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-serif font-normal text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm font-sans-alt font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;