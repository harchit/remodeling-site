"use client";

import React, { useState } from 'react';

const projects = [
  {
    title: 'Modern Minimalist Masterpiece',
    location: 'River Oaks, Houston',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    category: 'Modern',
  },
  {
    title: 'Classic Transitional Elegance',
    location: 'Preston Hollow, Dallas',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    category: 'Transitional',
  },
  {
    title: 'Rustic Mediterranean Charm',
    location: 'The Dominion, San Antonio',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80',
    category: 'Rustic',
  },
  {
    title: 'Sleek Contemporary Kitchen',
    location: 'Memorial, Houston',
    image: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=800&q=80',
    category: 'Modern',
  },
  {
    title: 'Grand Traditional Culinary Space',
    location: 'Highland Park, Dallas',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    category: 'Traditional',
  },
  {
    title: 'Warm Contemporary Oasis',
    location: 'Alamo Heights, San Antonio',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    category: 'Modern',
  },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Modern', 'Transitional', 'Traditional', 'Rustic'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-700 text-xs font-semibold tracking-[0.25em] uppercase font-sans-alt block mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-stone-900 mb-6">
            Featured Transformations
          </h2>
          <div className="w-16 h-[1px] bg-amber-700 mx-auto mb-6" />
          <p className="text-stone-600 font-sans-alt font-light leading-relaxed">
            Explore our gallery of bespoke kitchen remodels across Texas. Each project represents a unique collaboration of design, luxury materials, and master craftsmanship.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-all font-sans-alt ${
                filter === cat
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-stone-900 aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase font-sans-alt mb-1">
                  {project.location}
                </span>
                <h3 className="text-xl font-serif font-normal mb-1">
                  {project.title}
                </h3>
                <span className="text-stone-300 text-xs font-sans-alt font-light">
                  {project.category} Style
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;