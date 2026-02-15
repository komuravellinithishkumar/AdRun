import React from 'react';
import { Instagram, Sparkles, Users, TrendingUp } from 'lucide-react';

const Treels = () => {
  return (
    <section id="treels" className="py-24 bg-gradient-to-b from-[#0F1C3F] to-[#1E3A8A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#F59E0B]/20 border border-[#F59E0B] rounded-full mb-6">
            <span className="text-[#F59E0B] font-semibold text-sm tracking-wide">
              Digital Creative Franchise
            </span>
          </div>
          <div className="mb-6">
            <img
              src="https://customer-assets.emergentagent.com/job_5da1d27d-5e41-4b14-9cca-a717fb1996cd/artifacts/9tlf2u3t_T-%20Reels-%20F-B.png"
              alt="Treels Logo"
              className="h-20 mx-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <h3 className="hidden text-5xl font-bold">
              <span className="text-red-600">T</span>
              <span className="text-white">REELS</span>
            </h3>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A Digital Creative Franchise Powered by AdRun Advertising & Media
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h4 className="text-3xl font-bold leading-tight">
              Amplifying AdRun's Reach Through{' '}
              <span className="text-[#F59E0B]">Digital Storytelling</span>
            </h4>
            <p className="text-lg text-gray-300 leading-relaxed">
              Treels strengthens AdRun's outdoor presence with digital storytelling and social
              media amplification. It operates as a partnered franchise focused on modern
              content-driven marketing.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              While AdRun dominates the physical advertising landscape, Treels extends that power
              into the digital realm — creating viral reels, event coverage, and social media
              campaigns that make brands unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Sparkles, title: 'Reels Marketing', desc: 'Viral short-form content' },
              { icon: Users, title: 'Event Coverage', desc: 'Professional documentation' },
              { icon: TrendingUp, title: 'Social Media Branding', desc: 'Growth strategies' },
              { icon: Instagram, title: 'Digital Amplification', desc: 'Maximum reach' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-[#F59E0B] mb-4" />
                <h5 className="font-bold mb-1">{item.title}</h5>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
          <h4 className="text-2xl font-bold mb-8 text-center">
            Treels Leadership
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Abhilash Saketh',
                role: 'Founder & Digital Strategist',
                description: 'Leading digital innovation and content strategy'
              },
              {
                name: 'Sai Harsha Reddy',
                role: 'Co-Founder & Partner',
                description: 'Strategic partnership and brand alignment'
              },
              {
                name: 'Vijay Reddy',
                role: 'Co-Founder & Partner',
                description: 'Operations and client relationships'
              }
            ].map((founder, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-[#F59E0B]/20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-[#F59E0B]">
                  <Users className="w-12 h-12 text-[#F59E0B]" />
                </div>
                <h5 className="text-xl font-bold mb-1">{founder.name}</h5>
                <p className="text-[#F59E0B] font-semibold text-sm mb-2">{founder.role}</p>
                <p className="text-gray-400 text-sm">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/treels.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105"
          >
            <Instagram className="w-6 h-6" />
            Visit Treels on Instagram
          </a>
          <p className="text-gray-400 mt-4">Follow our digital creative journey</p>
        </div>
      </div>
    </section>
  );
};

export default Treels;
