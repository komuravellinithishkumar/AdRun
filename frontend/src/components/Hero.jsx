import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1769578952560-b3e794bd368e?q=80&w=2000"
          alt="Outdoor Advertising"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C3F]/95 via-[#0F1C3F]/85 to-[#0F1C3F]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F1C3F]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full backdrop-blur-sm">
            <span className="text-[#F59E0B] font-semibold text-sm tracking-wide">
              Premium Advertising Solutions Across Telangana
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Telangana's <span className="text-[#F59E0B]">High-Impact</span>
            <br />
            Advertising Partner
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            From Bus Shelters to Mega Hoardings – We Make Your Brand{' '}
            <span className="text-[#F59E0B] font-semibold">Impossible to Ignore</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-[#F59E0B] text-white px-8 py-4 rounded-lg hover:bg-[#D97706] transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center gap-2"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/30 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              View Projects
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { number: '100+', label: 'Active Hoardings' },
              { number: '50+', label: 'Bus Shelters' },
              { number: '500+', label: 'Campaigns Delivered' },
              { number: '10+', label: 'Cities Covered' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold text-[#F59E0B]">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F59E0B] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#F59E0B] rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
