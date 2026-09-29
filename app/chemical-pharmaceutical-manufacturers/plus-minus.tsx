"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  { 
    subtitle: " ",
    title: "Product Monograph Pages",
    description: "Full product pages with CAS, grade, pharmacopoeial standards, and CoA download links"
  },
  {
    subtitle: " ",
    title: "Regulatory Compliance Section",
    description: "WHO-GMP, ISO 9001, USFDA, EU GMP certs displayed with downloadable certificate PDFs"
  },
  {
    subtitle: " ",
    title: "API & Chemical SEO",
    description: "Rank for API manufacturer India, bulk drug exporter, specialty chemical supplier and CAS-based searches"
  },
  {
    subtitle: " ",
    title: "Sample & RFQ Request Forms",
    description: "Structured inquiry forms capturing product, grade, purity, quantity, and intended use"
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
               
                <p>Our Approach</p>
                <h2>Compliant by Design. SEO-Ready. Buyer-Trusted.</h2>
                <p className='ssad'>We build chemical and pharma websites that navigate regulatory sensitivity while maximising organic search visibility for your active pharmaceutical ingredients, specialty chemicals, and export product range.</p>

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