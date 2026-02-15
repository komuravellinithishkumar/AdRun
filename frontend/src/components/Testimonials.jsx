import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Prominent Business Owner',
      location: 'Karimnagar',
      text: 'AdRun transformed our brand visibility with their strategic hoarding placements. The increase in foot traffic has been remarkable!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Marketing Director',
      location: 'Warangal',
      text: 'Professional service from start to finish. Their understanding of the local market helped us achieve incredible campaign results.',
      rating: 5
    },
    {
      name: 'Venkat Reddy',
      company: 'Political Campaign Manager',
      location: 'Telangana',
      text: 'Excellent execution across multiple locations. AdRun team delivered beyond expectations with their attention to detail.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">
            Client Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] mb-6">
            What Our <span className="text-[#F59E0B]">Clients Say</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses and organizations across Telangana
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#F59E0B]/10">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-[#F59E0B] fill-current"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold text-[#0F1C3F]">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
                <p className="text-xs text-[#F59E0B] font-semibold mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
