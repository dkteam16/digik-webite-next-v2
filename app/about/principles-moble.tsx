"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 

const servicesData = [
  {
    id: 1,
    title: "Specialisation Over Scale",
    description: "We would rather be the best agency for manufacturers than a large agency for everyone. Depth always beats breadth.",
    tags: ["Manufacturing Co Sites", "B2B Web Design", "Export-Ready", "Engineering Firms"],
    img: "/icons/industrial.png"
  },
  {
    id: 2,
    title: "Results, Not Deliverables",
    description: "We measure success in RFQs, rankings, and revenue — not in pages delivered, reports sent, or hours billed.",
    tags: ["Product Pages", "Spec Sheets", "RFQ Forms", "Category Architecture"],
    img: "/icons/catalogue.png"
  },
  {
    id: 3,
    title: "Honest Before Comfortable",
    description: "We will tell you when your idea won't work. We will tell you when your budget is too low for what you need. We don't tell clients what they want to hear.",
    tags: ["Full Redesign", "Content Migration", "SEO Preservation", "Speed Optimisation"],
    img: "/icons/redesign.png"
  },
  {
    id: 4,
    title: "Build Assets, Not Dependencies",
    description: "Everything we build for you is something you own and that compounds in value over time. Never a subscription to someone else's platform.",
    tags: ["Export-Focused", "Trust Architecture", "Cert Display", "Multilingual Ready"],
    img: "/icons/international.png"
  } 
   
];

const ServicesSection = () => {
  // Mobile par active accordion track karne ke liye state
  const [openServiceId, setOpenServiceId] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  return (
    <section className="web-seo-mobile">
      
   

      {/* --- 📱 ONLY MOBILE ACCORDION VIEW --- */}
      <div className="mobile-services-accordion">
        {servicesData.map((service) => {
          const isOpen = openServiceId === service.id;

          return (
            <div 
              key={service.id} 
              className={`ms-accordion-card ${isOpen ? 'ms-is-expanded' : ''}`}
              onClick={() => toggleService(service.id)}
            >
              {/* Header Box (Hamesha visible rahega) */}
              <div className="ms-card-header">
                <h3 className="ms-card-title">{service.title}</h3>
                <span className="ms-toggle-icon">{isOpen ? '−' : '+'}</span>
              </div>

              {/* Collapsible Content Drawer Block */}
              <div className="ms-card-drawer">
                <div className="ms-drawer-inner">
                  {/* Service Icon */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white rounded-xl p-2 shadow-sm">
                    <img src={service.img} alt={service.title} className="w-full h-full object-contain" />
                  </div>

                  {/* Description */}
                  <p className="ms-card-description">{service.description}</p>

                  {/* Tags Inner Mapping */}
                  <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
                    {service.tags.map((tag, index) => (
                      <span key={index} className="ms-tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
 

    </section>
  );
};

export default ServicesSection;
