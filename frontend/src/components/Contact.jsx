import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/918500899994?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] mb-6">
            Let's Start Your <span className="text-[#F59E0B]">Campaign</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make your brand impossible to ignore? Contact us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 className="text-2xl font-bold text-[#0F1C3F] mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+918500899994"
                  className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors">
                    <Phone className="w-6 h-6 text-[#F59E0B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Call Us</p>
                    <p className="text-lg font-semibold text-[#0F1C3F] group-hover:text-[#F59E0B]">
                      +91 85008 99994
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:Adrunadvertisement@gmail.com"
                  className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors">
                    <Mail className="w-6 h-6 text-[#F59E0B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email Us</p>
                    <p className="text-lg font-semibold text-[#0F1C3F] group-hover:text-[#F59E0B] break-all">
                      Adrunadvertisement@gmail.com
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Visit Us</p>
                    <p className="text-lg font-semibold text-[#0F1C3F]">
                      2-11/9, Balaji Nagar 2B,
                      <br />
                      Behind Hotel Vpark,
                      <br />
                      Rekurthi, Karimnagar
                      <br />
                      Telangana – 505451, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <iframe
                title="AdRun Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.123456789!2d79.1234567!3d18.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzI0LjQiTiA3OcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#0F1C3F] to-[#1E3A8A] rounded-2xl shadow-2xl p-8 md:p-10 text-white">
            <h4 className="text-2xl font-bold mb-2">Send Us a Message</h4>
            <p className="text-gray-300 mb-8">
              Fill out the form below and we'll redirect you to WhatsApp to complete your inquiry
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all text-white placeholder-gray-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 transition-all text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your advertising needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#F59E0B] text-white px-8 py-4 rounded-lg hover:bg-[#D97706] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Send via WhatsApp
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-400 text-center">
                By submitting, you'll be redirected to WhatsApp to complete your inquiry
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
