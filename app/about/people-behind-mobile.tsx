"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 

const servicesData = [
  {
    id: 1,
    title: "Founder & Strategy Lead",
    description: "With over 8 years building digital strategies for manufacturers and exporters, our founder has developed a deep understanding of what makes industrial buyers convert — and what makes them leave. Every strategy at Digital Kangaroos starts with this knowledge.",
 
    subdescription: " Web Strategy · B2B SEO · Client Relations"
  },
  { 
    id: 2,
    title: "Lead Web Designer",
    description: "Our design lead specialises in creating industrial websites that balance credibility with clarity. Every layout, every section, and every visual decision is informed by B2B buyer research — not personal aesthetic preference.",
 
    subdescription: "UI/UX · Industrial Design · Frontend"
  },
  {
    id: 3,
    title: "SEO & Content Strategist",
    description: "Our SEO strategist focuses exclusively on B2B industrial search — building keyword strategies, content programmes, and link profiles that rank manufacturing companies for the exact terms their ideal buyers are searching.",
    
    subdescription: "Technical SEO · Industrial Content · Rankings"
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
                

                  {/* Description */}
                  <p className="ms-card-description">{service.description}</p> 

                    <div className="people-p">
                    {service.subdescription}
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
