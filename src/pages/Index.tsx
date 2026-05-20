"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Locations from '../components/Locations';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar onNavigate={handleNavigate} />
      <Hero onAction={handleNavigate} />
      <Services />
      <Process />
      <Gallery />
      <Locations />
      <QuoteForm />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;