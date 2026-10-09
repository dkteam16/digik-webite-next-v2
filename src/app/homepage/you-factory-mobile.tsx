"use client";
import React, { useState } from 'react';

const problems = [
  {
    number: "01",
    title: "OVERSEAS BUYERS CAN'T FIND YOU",
    description: "Your business is missing out on massive global trade opportunities because your brand lacks digital visibility in international search markets."
  },
  {
    number: "02",
    title: "YOUR WEBSITE DOESN'T BUILD TRUST",
    description: "A buyer from Germany or the UK visits your site and sees a 2012-era layout with stock photos and no certifications displayed. They move on. Your business may be outstanding — your website is losing you business."
  },
  {
    number: "03",
    title: "INDIAMART OWNS YOUR LEADS",
    description: "Relying purely on third-party B2B directories means you are fighting a price-war with hundreds of competitors for the exact same lead."
  },
  {
    number: "04",
    title: "NO RFQ SYSTEM, NO ENQUIRY FLOW",
    description: "Without a structured Request-For-Quote framework, international clients find it difficult to submit clear technical specifications easily."
  }
];

export default function MobileProblemAccordion() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <div className="mobile-problem-grid">
      {problems.map((item, index) => {
        const isOpen = openCardIndex === index;
        
        return (
          <div 
            className={`mobile-problem-card ${isOpen ? 'mobile-is-expanded' : ''}`} 
            key={index}
            onClick={() => toggleCard(index)}
          >
            {/* Number Indicator */}
            <span className="mobile-problem-number">{item.number}</span>

            {/* Content Area */}
            <div className="mobile-problem-content-block">
              <h3 className="mobile-problem-title">{item.title}</h3>
              <div className="mobile-problem-description-wrapper">
                <p className="mobile-problem-description-text">{item.description}</p>
              </div>
            </div>

            {/* Bottom Right Icon */}
            <div className="mobile-problem-toggle-container">
              <span className="mobile-problem-toggle-icon">{isOpen ? '−' : '+'}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
