"use client";

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Houston',
    budget: '$30,000 - $50,000',
    timeframe: 'Within 3 months',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase font-sans-alt block mb-3">
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
            Request a Consultation
          </h2>
          <div className="w-16 h-[1px] bg-amber-400 mx-auto mb-6" />
          <p className="text-stone-400 font-sans-alt font-light leading-relaxed">
            Let's discuss your kitchen remodeling project. Fill out the form below, and our design consultant from your nearest city will contact you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/5 border border-white/10 p-12 text-center max-w-xl mx-auto">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-amber-400" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-normal mb-3">Thank You!</h3>
            <p className="text-stone-300 font-sans-alt font-light leading-relaxed mb-6">
              Your request has been received. An Asha Interiors design consultant from the <span className="text-amber-400 font-semibold">{formData.city}</span> office will reach out to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-amber-400 hover:text-amber-300 text-xs tracking-widest uppercase font-semibold font-sans-alt"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs tracking-wider uppercase text-stone-300 font-sans-alt mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-sans-alt text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-stone-300 font-sans-alt mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-sans-alt text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-stone-300 font-sans-alt mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-sans-alt text-sm"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs tracking-wider uppercase text-stone-300 font-sans-alt mb-2">
                  Your Location
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-sans-alt text-sm"
                >
                  <option value="Houston">Houston Metro</option>
                  <option value="Dallas">Dallas / Fort Worth</option>
                  <option value="San Antonio">San Antonio Metro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-stone-300 font-sans-alt mb-2">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-sans-alt text-sm"
                >
                  <option value="$20,000 - $30,000">$20,000 - $30,000</option>
                  <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000+">$100,000+ (Luxury Custom)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-stone-300 font-sans-alt mb-2">
                  Desired Timeframe
                </label>
                <select
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-sans-alt text-sm"
                >
                  <option value="Immediately">Immediately</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="3 - 6 months">3 - 6 months</option>
                  <option value="Planning phase">Just planning</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-wider uppercase text-stone-300 font-sans-alt mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-sans-alt text-sm"
                placeholder="Describe your dream kitchen, current layout issues, or specific materials you love..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 text-xs tracking-widest uppercase font-semibold transition-all inline-flex items-center gap-2 font-sans-alt"
              >
                Submit Request
                <Send size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;