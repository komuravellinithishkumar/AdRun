import React, { useState } from 'react';
import { X } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'hoardings', label: 'Outdoor Hoardings' },
    { id: 'bus-shelters', label: 'Bus Shelters' },
    { id: 'commercial', label: 'Commercial Ads' },
    { id: 'motion', label: '2D/3D Motion Posters' }
  ];

  const projects = [
    {
      id: 1,
      image: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/rag45t23_WhatsApp%20Image%202026-02-12%20at%2002.26.03.jpeg',
      title: 'Hoarding - Rekurthi, Karimnagar',
      category: 'hoardings',
      size: '25×20 ft',
      location: 'Outgoing, Rekurthi'
    },
    {
      id: 2,
      image: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/xyfq68fd_WhatsApp%20Image%202026-02-12%20at%2002.26.36.jpeg',
      title: 'Hoarding - Rekurthi, Karimnagar',
      category: 'hoardings',
      size: '20×20 ft',
      location: 'Incoming, Rekurthi'
    },
    {
      id: 3,
      image: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/yiqnhmim_WhatsApp%20Image%202026-02-12%20at%2002.31.05.jpeg',
      title: 'Bus Shelter - Bus Stand, Karimnagar',
      category: 'bus-shelters',
      size: '25×5 ft & 23×3 ft',
      location: 'Front of Bus Stand'
    },
    {
      id: 4,
      image: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/s2j44dao_WhatsApp%20Image%202026-02-12%20at%2002.32.14.jpeg',
      title: 'Bus Shelter - Subhash Nagar',
      category: 'bus-shelters',
      size: '25×5 ft & 23×3 ft',
      location: 'SC Hostel, Subhash Nagar'
    },
    {
      id: 5,
      image: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/oh2sf44m_WhatsApp%20Image%202026-02-12%20at%2002.44.07.jpeg',
      title: 'Bus Shelter - Padmanagar',
      category: 'bus-shelters',
      size: '25×5 ft & 23×3 ft',
      location: 'Opp. Manair High School'
    },
    {
      id: 6,
      image: 'https://customer-assets.emergentagent.com/job_5da1d27d-5e41-4b14-9cca-a717fb1996cd/artifacts/ruphgdh7_WhatsApp%20Image%202026-02-12%20at%2002.32.14.jpeg',
      title: 'Healthcare Campaign',
      category: 'commercial',
      size: 'Multiple Formats',
      location: 'Karimnagar City'
    },
    {
      id: 7,
      video: 'https://customer-assets.emergentagent.com/job_adrun-telangana/artifacts/3ivuefv4_WhatsApp%20Video%202026-02-15%20at%2014.09.38.mp4',
      title: '3D Product Motion Poster',
      category: 'motion',
      size: 'Digital Format',
      location: 'Social Media Campaign'
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wide mb-3">
            Our Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F1C3F] mb-6">
            High-Impact <span className="text-[#F59E0B]">Campaigns</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful advertising campaigns across Telangana
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#F59E0B] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxImage(project)}
            >
              {/* Image or Video */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C3F]/95 via-[#0F1C3F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-[#F59E0B] font-semibold mb-1">{project.size}</p>
                <p className="text-gray-300 text-sm">{project.location}</p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-[#F59E0B] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                {categories.find(cat => cat.id === project.category)?.label.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#F59E0B] transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-5xl w-full">
              {lightboxImage.video ? (
                <video
                  src={lightboxImage.video}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              )}
              <div className="text-center mt-6 text-white">
                <h4 className="text-2xl font-bold mb-2">{lightboxImage.title}</h4>
                <p className="text-[#F59E0B] font-semibold mb-1">{lightboxImage.size}</p>
                <p className="text-gray-300">{lightboxImage.location}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-200">
          <h4 className="text-2xl font-bold text-[#0F1C3F] mb-4">
            Ready to Launch Your Campaign?
          </h4>
          <p className="text-gray-600 mb-6">
            Let's create advertising that makes your brand impossible to ignore
          </p>
          <button
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-[#F59E0B] text-white px-8 py-4 rounded-lg hover:bg-[#D97706] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
