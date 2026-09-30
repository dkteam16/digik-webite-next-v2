"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  { 
    subtitle: " ",
    title: "SKU-Level Product Pages",
    description: "Individual pages for bolt types, nut types, washers, screws with grade and material filters"
  },
  {
    subtitle: " ",
    title: "Standard & Grade Pages",
    description: "SEO pages for DIN 931, ISO 4014, ASTM A325 and other standards your buyers search for"
  },
  {
    subtitle: " ",
    title: "Coating & Material Pages",
    description: "Hot-dip galvanized, zinc plated, stainless steel — each gets its own SEO-optimised page"
  },
  {
    subtitle: " ",
    title: "Instant RFQ Form",
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
    <section className="scopy-one-agency">
       <div className='mv-section-iner'> 
          <div className='mv-section-tops'>
              <p>The Core Problem</p>
              <h2>Your Product Range Is Huge. Your Website Shows Almost None of It.</h2>
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