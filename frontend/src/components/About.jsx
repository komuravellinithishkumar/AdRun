import React from 'react';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] leading-tight">
              Born from <span className="text-[#F59E0B]">Friendship</span>,
              <br />
              Built on <span className="text-[#F59E0B]">Vision</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-semibold text-[#0F1C3F]">
                AdRun Advertising & Media was founded by a group of childhood friends who shared
                more than memories — they shared ambition.
              </p>
              <p>
                Growing up together in Telangana, they witnessed how many local businesses
                struggled to gain visibility despite having great products and services.
              </p>
              <p>
                Instead of choosing separate paths, they united with a single mission:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2 text-2xl">•</span>
                  <span>To build something impactful</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2 text-2xl">•</span>
                  <span>To create visibility where it didn't exist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2 text-2xl">•</span>
                  <span>To elevate brands across Telangana</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-semibold text-[#0F1C3F]">
                AdRun was born from friendship, trust, and bold vision.
              </p>
              <p>
                What started as an idea between friends became a powerful advertising force
                delivering high-impact hoardings, bus shelter ads, and campaign branding across
                key cities in Telangana.
              </p>
              <div className="bg-[#0F1C3F] text-white p-8 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold mb-2">Our Philosophy:</p>
                <p className="text-xl italic">
                  "Advertising is not an expense — it is visibility, power, and growth."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-4 gap-8 pt-16 border-t border-gray-200">
          {[
            {
              icon: Users,
              title: 'Unity',
              description: 'Built on friendship and trust'
            },
            {
              icon: Target,
              title: 'Vision',
              description: 'Creating visibility for businesses'
            },
            {
              icon: TrendingUp,
              title: 'Growth',
              description: 'Elevating brands across Telangana'
            },
            {
              icon: Award,
              title: 'Excellence',
              description: 'Delivering high-impact campaigns'
            }
          ].map((value, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F59E0B]/10 rounded-full mb-4 group-hover:bg-[#F59E0B] transition-colors">
                <value.icon className="w-8 h-8 text-[#F59E0B] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-[#0F1C3F] mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Founders Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0F1C3F]">
              Meet the <span className="text-[#F59E0B]">Visionaries</span>
            </h3>
            <p className="text-gray-600 mt-4 text-lg">
              Founders & Driving Force Behind AdRun
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Sai Harsha Reddy',
                role: 'Co-Founder & Visionary',
                description: 'Strategic leader driving regional expansion and brand partnerships across Telangana.'
              },
              {
                name: 'Vijay Reddy',
                role: 'Co-Founder & Director',
                description: 'Operations expert ensuring excellence in campaign execution and client satisfaction.'
              },
              {
                name: 'Rohit Reddy',
                role: 'Co-Founder & Strategist',
                description: 'Creative force behind innovative advertising solutions and market positioning.'
              }
            ].map((founder, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0F1C3F] to-[#1E3A8A] p-8 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm border-4 border-[#F59E0B]/30">
                  <Users className="w-16 h-16 text-[#F59E0B]" />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-center">{founder.name}</h4>
                <p className="text-[#F59E0B] font-semibold text-center mb-4">{founder.role}</p>
                <p className="text-gray-300 text-center leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
