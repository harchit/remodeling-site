"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const locations = [
  {
    city: 'Houston',
    address: '2400 Post Oak Blvd, Houston, TX 77056',
    phone: '(713) 555-0192',
    email: 'houston@ashainteriors.com',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    neighborhoods: 'River Oaks, Memorial, West University, The Heights',
  },
  {
    city: 'Dallas',
    address: '1617 Hi Line Dr, Dallas, TX 75207',
    phone: '(214) 555-0143',
    email: 'dallas@ashainteriors.com',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    neighborhoods: 'Highland Park, Preston Hollow, Lakewood, Uptown',
  },
  {
    city: 'San Antonio',
    address: '112 E Pecan St, San Antonio, TX 78205',
    phone: '(210) 555-0187',
    email: 'sanantonio@ashainteriors.com',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    neighborhoods: 'The Dominion, Alamo Heights, Stone Oak, Terrell Hills',
  },
];

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-semibold tracking-[0.25em] uppercase font-sans-alt block mb-3">
            Our Showrooms
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-stone-900 mb-6">
            Serving Texas's Premier Cities
          </h2>
          <div className="w-16 h-[1px] bg-amber-700 mx-auto mb-6" />
          <p className="text-stone-600 font-sans-alt font-light leading-relaxed">
            Visit our design studios or schedule an in-home consultation. We proudly serve the most prestigious neighborhoods in Houston, Dallas, and San Antonio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="border border-stone-200 p-8 bg-stone-50 hover:border-amber-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="text-amber-700" size={20} />
                  <h3 className="text-2xl font-serif font-normal text-stone-900">
                    {loc.city}
                  </h3>
                </div>

                <div className="space-y-4 mb-8 text-stone-600 text-sm font-sans-alt font-light">
                  <p className="flex items-start gap-3">
                    <span className="font-semibold text-stone-800 min-w-[70px]">Address:</span>
                    <span>{loc.address}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone size={14} className="text-stone-400" />
                    <a href={`tel:${loc.phone}`} className="hover:text-amber-700 transition-colors">
                      {loc.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail size={14} className="text-stone-400" />
                    <a href={`mailto:${loc.email}`} className="hover:text-amber-700 transition-colors">
                      {loc.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock size={14} className="text-stone-400" />
                    <span>{loc.hours}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200">
                <span className="text-xs font-semibold tracking-wider uppercase text-stone-800 font-sans-alt block mb-2">
                  Key Service Areas:
                </span>
                <p className="text-xs text-stone-500 font-sans-alt leading-relaxed">
                  {loc.neighborhoods}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;