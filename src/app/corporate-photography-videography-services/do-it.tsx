"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  { 
    subtitle: " ",
    title: "Factory & Facility Photography",
    description: "Professional photography of your production facility — machines, processes, workstations, quality lab, warehousing, and team — communicating operational scale and professionalism to international buyers who will never visit in person."
  },
  {
    subtitle: " ",
    title: "Product & Component Photography",
    description: "High-quality product photography for your website, export catalogues, and marketing materials — showing finish quality, dimensional precision, and material character in a way that builds buyer confidence."
  },
  {
    subtitle: " ",
    title: "Factory Tour Videos",
    description: "Professional video walkthroughs of your facility — showing your machinery, processes, quality control, and team in action. The most powerful trust-building content for your website and for email outreach to international buyers."
  },
  {
    subtitle: " ",
    title: "Team & Leadership Portraits",
    description: "Professional portraits of your founder, management team, and key technical staff — because buyers want to know the people behind the factory before they commit to a supply relationship."
  },
  {
    subtitle: "",
    title: "Process & Quality Documentation",
    description: "Photography and video of your specific manufacturing processes, inspection procedures, and quality checkpoints — content that demonstrates process maturity and quality orientation to technically sophisticated buyers."
  },
  {
    subtitle: "",
    title: "Brand Video Production",
    description: "A 2–3 minute brand video that tells your company's story — who you are, what you make, who you serve, and what makes you the right partner. The centrepiece of your website's homepage and your most shareable marketing asset."
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
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Why Visuals Matter for Manufacturers</p>
                  <h2>An Overseas Buyer Can't Visit Your Factory. Your Photos <span className='text-[#F4A31D]'>Do It for Them.</span> </h2>
                  <p className='text-[#333333]'>When a procurement manager in Germany evaluates Indian suppliers, they cannot fly to every factory. Your photography & Videography is their factory visit. Stock photos & Videos destroy trust. Professional photography & Videography builds it.</p>
               </div>
                 <Image
                                    src="/cartshop.png"
                                    alt="logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto iso"
                                    priority
                                  />
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
                  <div className="mv-card-header">
                    {/* <span className="mv-subtitle">{item.subtitle}</span> */}
                    <span className="mv-plus-icon">{isActive ? '−' : '+'}</span>
                  </div>

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

                </div>
              );
            })}

          </div>
      </div>
    </section>
  );
}