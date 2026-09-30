"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  { 
    subtitle: " ",
    title: "Component Catalogue Website",
    description: "Full cycle parts catalogue with specs, images, and MOQ details"
  },
  {
    subtitle: " ",
    title: "Export Buyer Pages",
    description: "Country-specific landing pages for US, EU, Africa, and Gulf markets"
  },
  {
    subtitle: " ",
    title: "Sports Equipment SEO",
    description: "Rank for sports goods exporter Jalandhar, cycle manufacturer India and 40+ buyer terms"
  },
  {
    subtitle: " ",
    title: "RFQ & Sample Request Forms",
    description: "Structured forms for sample requests, catalogues, and bulk RFQs"
  } 
   
];

export default function beleive() {
  // ✅ Ab activeCardId number-id ke bajaye index track karega
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <section className="     scopy-one-agency">
       <div className='mv-section-iner'> 
        

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