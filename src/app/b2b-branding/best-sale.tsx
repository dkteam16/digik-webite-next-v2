"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "Logo Design & Visual Identity",
    description: "A professional logo and complete visual identity system — typography, colour palette, icon set, and usage guidelines — built to work across your website, export catalogues, packaging, and factory signage."
  },
  {
    subtitle: " ",
    title: "Brand Guidelines Document",
    description: "A complete brand guidelines document specifying exactly how your brand elements should be used — so every touchpoint from business cards to trade fair banners looks consistent and professional."
  },
  {
    subtitle: " ",
    title: "Company Profile / Capabilities Brochure",
    description: "A professionally designed company profile document for export buyers — covering your facility, capabilities, quality certifications, customer base, and contact information in a format that impresses international procurement teams."
  },
  {
    subtitle: " ",
    title: "Business Stationery & Collateral",
    description: "Letterheads, business cards, email signatures, presentation templates, and packaging designs — all consistent with your brand identity and positioned to reinforce professionalism at every buyer touchpoint."
  },
  {
    subtitle: "",
    title: "Social Media Brand Kit",
    description: "LinkedIn and other social platform profile designs, post templates, and banner graphics — so your digital presence on social channels matches the quality of your website and export materials."
  },
  {
    subtitle: "",
    title: "Exhibition & Trade Fair Materials",
    description: "Banner designs, booth graphics, product display materials, and exhibition collateral for domestic and international trade fairs — designed to attract and impress serious buyers in a crowded exhibition environment."
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
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Why Your Catalogue Matters</p>
                  <h2>Your Products Are Your <span className='text-[#F4A31D]'>Best Sales Team</span>. Are They Working?</h2>
                  <p className='text-[#333333]'>Every day, procurement managers in the UK, USA, Germany, and Australia search Google for Indian manufacturers. The question is whether they find you or your competitor.</p>
               </div>
                 <a href="http://cartpotato.com/" target="_blank" rel="noopener noreferrer" className="contents"><Image
                                    src="/cartshop.png"
                                    alt="logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto iso"
                                    priority
                                  /></a>
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