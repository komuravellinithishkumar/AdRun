import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: 'Siddartha Group of Schools',
      logo: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/ezax5ppo_WhatsApp%20Image%202026-02-16%20at%2002.45.11.jpeg'
    },
    {
      name: 'Advita International School',
      logo: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/eze0vgn4_WhatsApp%20Image%202026-02-16%20at%2002.45.12.jpeg'
    },
    {
      name: 'Ivy High',
      logo: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/fnnle4vl_WhatsApp%20Image%202026-02-16%20at%2002.45.13.jpeg'
    },
    {
      name: 'H&H Partner',
      logo: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/b0hvv82b_H%26H%20Logo.PDF'
    },
    {
      name: 'Partner Logo',
      logo: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/oc8dld00_lOGOOOOO.PDF'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">
            Our Partners
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] mb-6">
            Our Leading <span className="text-[#F59E0B]">Partners</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proud to collaborate with industry leaders across sectors
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center border border-gray-100 group"
            >
              <div className="text-center w-full">
                {partner.logo.endsWith('.PDF') || partner.logo.endsWith('.pdf') ? (
                  <object
                    data={partner.logo}
                    type="application/pdf"
                    className="w-full h-24 pointer-events-none"
                  >
                    <div className="w-full h-24 bg-gradient-to-br from-[#0F1C3F]/5 to-[#F59E0B]/5 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-xs font-semibold text-center px-2">
                        {partner.name}
                      </span>
                    </div>
                  </object>
                ) : (
                  <>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-24 bg-gradient-to-br from-[#0F1C3F]/5 to-[#F59E0B]/5 rounded-lg items-center justify-center">
                      <span className="text-gray-400 text-xs font-semibold text-center px-2">
                        {partner.name}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#0F1C3F] to-[#1E3A8A] rounded-2xl p-12 text-white shadow-xl">
          <h4 className="text-3xl font-bold mb-4">Become Our Partner</h4>
          <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
            Join our network of leading brands and organizations making an impact across Telangana
          </p>
          <button
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-[#F59E0B] text-white px-8 py-4 rounded-lg hover:bg-[#D97706] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
