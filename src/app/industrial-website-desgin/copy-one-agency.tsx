"use client";
import React, { useState } from 'react';
// import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "Custom Industrial Design",
    description: "Unique visual design built around your brand — not a template. Communicates capability, credibility, and seriousness to international buyers instantly."
  },
  {
    subtitle: " ",
    title: "Structured RFQ System",
    description: "A properly designed RFQ form that captures drawing uploads, material specifications, quantities, and delivery requirements — giving your sales team everything they need to quote accurately."
  },
  {
    subtitle: " ",
    title: "Product / Capability Pages",
    description: "Detailed pages for each product range or manufacturing capability — with technical specifications, material options, tolerance statements, and certification information."
  },
  {
    subtitle: " ",
    title: "Certifications & Quality Display  ",
    description: "Your ISO, IATF, AS9100, or other certifications displayed prominently with context — so buyers understand what they mean and why your quality system matters."
  },
  {
    subtitle: "",
    title: "Core Web Vitals Optimised",
    description: "Every website we build scores 90+ on Google PageSpeed. Fast loading isn't optional for industrial buyers — slow sites signal poor operations to a technical audience."
  },
  {
    subtitle: "",
    title: "On-Page SEO From Day One",
    description: "Every page is built with proper keyword targeting, meta data, schema markup, and technical SEO foundations — so Google can find and rank you from launch day."
  },
  {
    subtitle: "",
    title: "Mobile-First Responsive Design",
    description: "Fully responsive across all devices — because procurement managers and sourcing engineers browse on phones and tablets just as much as on desktop."
  },
  {
    subtitle: "",
    title: "WhatsApp & Enquiry Integration",
    description: "WhatsApp Business integration, enquiry forms, and callback request functionality — making it frictionless for buyers to reach you through whichever channel they prefer."
  }
];

export default function beleive() {
  // ✅ Ab activeCardId number-id ke bajaye index track karega
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <section className="mv-section bg-[#F5F5F5]  copy-one-agency">
       <div className='mv-section-iner'>
          <div className='beleive-top'>
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>What You Get</p>
                  <h2>What's Included in Every<span className='text-[#F4A31D]'> Industrial Website</span></h2>
                  <p className='text-[#333333]'>Not a template. Not a page builder. A custom-built, fully optimised website designed around your specific manufacturing capability and your ideal buyer.</p>
               </div>
                
          </div>


          <div className="mv-container">
            
            {missionVisionData.map((item, index) => {
              const isActive = activeCardIndex === index;

              return (
                <div 
                  key={index}
                  className={`mv-card ${isActive ? 'mv-card-active' : ''}`}
                  onClick={() => toggleCard(index)}
                >
                

                  <h3 className="mv-main-title">
                    {item.title}
                  </h3>

                  {/* 🔄 Accordion Drawer Box Logic */}
                  <div className="mv-card-drawer">
                    <div className="mv-drawer-inner">
                      <p className="mv-description-text">
                        {item.description}
                      </p>
                    </div>
                  </div>
                         <div className="mv-card-header">
                    {/* <span className="mv-subtitle">{item.subtitle}</span> */}
                    <span className="mv-plus-icon">{isActive ? '−' : '+'}</span>
                  </div>
                </div>
              );
            })}

          </div>
      </div>
    </section>
  );
}