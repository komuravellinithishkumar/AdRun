import React from 'react';
import { MapPin, Target, Award, Users, TrendingUp, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: MapPin,
      title: 'Strategic High Visibility Locations',
      description: 'Prime positioning at high-traffic areas ensuring maximum brand exposure and reach.'
    },
    {
      icon: Target,
      title: 'Deep Understanding of Telangana Market',
      description: 'Local expertise with insights into regional preferences and cultural nuances.'
    },
    {
      icon: Award,
      title: 'Creative & Execution Excellence',
      description: 'Professional design, printing, and installation with attention to every detail.'
    },
    {
      icon: TrendingUp,
      title: 'Affordable & Scalable Campaigns',
      description: 'Flexible solutions tailored to your budget and growth objectives.'
    },
    {
      icon: Users,
      title: 'End-to-End Campaign Management',
      description: 'Complete support from concept to installation and performance tracking.'
    },
    {
      icon: Shield,
      title: 'Strong Regional Presence',
      description: 'Established network across key cities in Telangana with proven track record.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] mb-6">
            What Sets <span className="text-[#F59E0B]">AdRun</span> Apart
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with Telangana's most trusted outdoor advertising agency
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F59E0B]/10 rounded-xl group-hover:bg-[#F59E0B] transition-colors duration-300">
                  <reason.icon className="w-8 h-8 text-[#F59E0B] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h4 className="relative text-xl font-bold text-[#0F1C3F] mb-3 group-hover:text-[#F59E0B] transition-colors">
                {reason.title}
              </h4>
              <p className="relative text-gray-600 leading-relaxed">
                {reason.description}
              </p>

              {/* Number Badge */}
              <div className="absolute bottom-4 right-4 text-6xl font-bold text-[#F59E0B]/5 group-hover:text-[#F59E0B]/10 transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-[#0F1C3F] to-[#1E3A8A] rounded-2xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2025', label: 'Established with Vision' },
              { number: '100+', label: 'Active Locations' },
              { number: '500+', label: 'Successful Campaigns' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#F59E0B] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
