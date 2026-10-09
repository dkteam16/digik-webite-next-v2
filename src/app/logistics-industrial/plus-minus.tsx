"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  { 
    subtitle: " ",
    title: "Service Pages by Vertical",
    description: "Separate SEO pages for 3PL, CFS, warehousing, freight forwarding, and last-mile delivery"
  },
  {
    subtitle: " ",
    title: "Industry-Specific Pages",
    description: "Logistics for pharma, FMCG, auto, engineering, textile — target clients by their sector"
  },
  {
    subtitle: " ",
    title: "Network & Coverage Map",
    description: "Visual coverage map showing your warehouse network, delivery zones, and pan-India reach"
  },
  {
    subtitle: " ",
    title: "RFQ & Quote Forms",
    description: "Shipment inquiry forms capturing origin, destination, cargo type, volume, and frequency"
  },
   {
    subtitle: " ",
    title: "Local & Pan-India SEO",
    description: "Rank for industrial logistics company Delhi, 3PL warehouse Punjab, freight company India"
  } ,
   {
    subtitle: " ",
    title: "Compliance & Certifications",
    description: "IATA, FIATA, ISO, AEO certifications displayed — table stakes for international logistics contracts"
  } 
   
];

export default function beleive() {
  // ✅ Ab activeCardId number-id ke bajaye index track karega
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <section className="scopy-one-agency">
       <div className='mv-section-iner'> 
          <div className='mv-section-tops'>
              <div className='mv-section-tops-iner'>
                <p>What We Build</p>
                <h2>B2B Digital Presence for Industrial Logistics & Supply Chain Companies</h2>
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
                    <h3 className="mv-main-title">
                    {item.title}
                  </h3>
                    <span className="mv-plus-icon">{isActive ? '−' : '+'}</span>
                  </div>

                 

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