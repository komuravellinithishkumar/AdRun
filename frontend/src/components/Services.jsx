import React from 'react';
import {
  Building2,
  Bus,
  Radio,
  Printer,
  Monitor,
  Sparkles,
  Calendar,
  MapPin
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bus,
      title: 'Bus Shelter Advertising',
      description: 'Strategic placements at high-traffic bus stops ensuring maximum daily visibility and brand recall.'
    },
    {
      icon: Building2,
      title: 'Building Hoardings',
      description: 'Premium large-format hoardings on prime commercial buildings dominating city skylines.'
    },
    {
      icon: Radio,
      title: 'Highway Billboards',
      description: 'High-impact roadside displays capturing attention of thousands of commuters daily.'
    },
    {
      icon: Printer,
      title: 'Outdoor Flex & Large Format',
      description: 'Professional printing and installation of weather-resistant advertising materials.'
    },
    {
      icon: Monitor,
      title: 'Digital Advertisements',
      description: 'Modern LED and digital display solutions for dynamic, eye-catching campaigns.'
    },
    {
      icon: Sparkles,
      title: '2D & 3D Motion Posters',
      description: 'Creative animated content that brings your brand story to life with visual impact.'
    },
    {
      icon: Calendar,
      title: 'Event & Festival Branding',
      description: 'Comprehensive campaign management for events, festivals, and seasonal promotions.'
    },
    {
      icon: MapPin,
      title: 'Political Campaign Branding',
      description: 'Strategic political advertising solutions across Telangana with proven reach and impact.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] mb-6">
            Complete <span className="text-[#F59E0B]">Advertising Solutions</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution, we deliver high-impact outdoor and digital advertising
            campaigns that drive results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#F59E0B]/30"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-[#0F1C3F] mb-3 group-hover:text-[#F59E0B] transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#F59E0B] font-semibold inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom advertising solution? Let's discuss your requirements.
          </p>
          <button
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-[#0F1C3F] text-white px-8 py-4 rounded-lg hover:bg-[#1E3A8A] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
