"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 

const servicesData = [
  {
    id: 1,
    title: "INDUSTRIAL WEBSITE DESIGN",
    description: "High-performance websites built specifically for manufacturers, exporters, and B2B engineering companies. Credible, fast, mobile-first, and designed to convert international buyers into enquiries.",
    tags: ["Manufacturing Co Sites", "B2B Web Design", "Export-Ready", "Engineering Firms"],
    img: "/icons/industrial.png"
  },
  {
    id: 2,
    title: "PRODUCT CATALOGUE WEBSITES",
    description: "Structured, searchable product catalogue websites that let buyers find the exact component or product they need – with technical specs, material options, and a clear path to an RFQ submission.",
    tags: ["Product Pages", "Spec Sheets", "RFQ Forms", "Category Architecture"],
    img: "/icons/catalogue.png"
  },
  {
    id: 3,
    title: "WEBSITE REDESIGN FOR INDUSTRY",
    description: "Your existing website is costing you leads every day it remains live. We rebuild it from the ground up – faster, more credible, fully optimised – without disrupting your existing business operations.",
    tags: ["Full Redesign", "Content Migration", "SEO Preservation", "Speed Optimisation"],
    img: "/icons/redesign.png"
  },
  {
    id: 4,
    title: "INTERNATIONAL BUYER-READY WEBSITES",
    description: "Websites built to impress procurement managers and sourcing engineers in the UK, USA, Germany, and Australia – with the right trust signals, certifications display, and inquiry flow they expect.",
    tags: ["Export-Focused", "Trust Architecture", "Cert Display", "Multilingual Ready"],
    img: "/icons/international.png"
  },
  {
    id: 5,
    title: "B2B CONTENT & SEO GROWTH",
    description: "Long-form technical content that ranks on Google, educates your buyers, and positions your company as the expert in your niche – consistently generating inbound enquiries month after month.",
    tags: ["Technical Blogging", "Keyword Strategy", "Link Building", "Content Calendar"],
    img: "/icons/seo.png"
  },
  {
    id: 6,
    title: "B2B BRANDING",
    description: "Your brand is more than a logo. We create a visual identity that screams industrial expertise and reliability, ensuring you stand out in a crowded global marketplace.",
    tags: ["Technical Blogging", "Keyword Strategy", "Link Building", "Content Calendar"],
    img: "/icons/branding.png"
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
