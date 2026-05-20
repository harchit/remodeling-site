"use client";

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'In-Home Consultation',
    description: 'We visit your home in Houston, Dallas, or San Antonio to understand your vision, measure the space, and discuss budget and design preferences.',
  },
  {
    number: '02',
    title: '3D Design & Selection',
    description: 'Our design team creates detailed 3D renderings. You select premium materials, custom cabinetry styles, countertops, and high-end appliances.',
  },
  {
    number: '03',
    title: 'Precision Construction',
    description: 'Our skilled craftsmen execute the remodel with meticulous attention to detail, keeping your home clean and respecting your schedule.',
  },
  {
    number: '04',
    title: 'The Reveal',
    description: 'We conduct a final walkthrough to ensure every detail meets our rigorous standards of luxury, functionality, and beauty.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase font-sans-alt block mb-3">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
            Our Seamless Process
          </h2>
          <div className="w-16 h-[1px] bg-amber-400 mx-auto mb-6" />
          <p className="text-stone-400 font-sans-alt font-light leading-relaxed">
            From initial concept to the final reveal, we guide you through a structured, transparent journey to bring your dream kitchen to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col">
              <div className="text-5xl md:text-6xl font-serif font-light text-amber-500/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-serif font-normal mb-3 text-stone-100">
                {step.title}
              </h3>
              <p className="text-stone-400 text-sm font-sans-alt font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;