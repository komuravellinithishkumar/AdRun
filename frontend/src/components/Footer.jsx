import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F1C3F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                <span className="text-white">Ad</span>
                <span className="text-[#F59E0B]">Run</span>
              </h3>
              <p className="text-sm text-gray-400 mt-2">Advertising & Media</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Telangana's leading outdoor advertising partner, making brands impossible to ignore
              across the region.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F59E0B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/treels.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F59E0B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F59E0B] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Treels', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                    className="text-gray-300 hover:text-[#F59E0B] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Bus Shelter Advertising</li>
              <li>Building Hoardings</li>
              <li>Highway Billboards</li>
              <li>Digital Advertisements</li>
              <li>Event Branding</li>
              <li>Political Campaigns</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+918500899994"
                    className="text-gray-300 hover:text-[#F59E0B] transition-colors"
                  >
                    +91 85008 99994
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:gudivijayreddy@gmail.com"
                    className="text-gray-300 hover:text-[#F59E0B] transition-colors break-all"
                  >
                    gudivijayreddy@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  2-11/9, Balaji Nagar 2B,
                  <br />
                  Behind Hotel Vpark,
                  <br />
                  Rekurthi, Karimnagar
                  <br />
                  Telangana – 505451
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} AdRun Advertising & Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-[#F59E0B] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#F59E0B] transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
