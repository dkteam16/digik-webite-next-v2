"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "Industry-Specific SEO",
    description: "We target the exact keywords your buyers type — not generic traffic that never converts for B2B."
  },
  {
    subtitle: " ",
    title: "RFQ-First Design",
    description: "Every page, every layout decision is made with one goal: get more quote requests from qualified buyers."
  },
  {
    subtitle: " ",
    title: "International Buyer-Ready",
    description: "Websites built to earn trust from US, EU, Middle East, and African importers who've never met you."
  },
  {
    subtitle: " ",
    title: "Product Catalogue Websites ",
    description: "Structured product pages with specs, certifications, and MOQ — exactly what serious buyers need."
  },
  {
    subtitle: "",
    title: "Reduce IndiaMart Dependency",
    description: "Your own website. Your own leads. No commission. No competition with 50 other suppliers on one page."
  },
  {
    subtitle: "",
    title: "Fast, Technical SEO",
    description: "Core Web Vitals, schema markup, technical audits — we handle the backend ranking factors most agencies skip."
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
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Why Manufacturers Choose Us</p>
                  <h2>We Understand How Industrial Buyers Think</h2>
                  <p className='text-[#333333]'>Most web agencies build websites that look good in a portfolio. We build websites that generate RFQs, rank on Google for buyer search terms, and make overseas buyers trust you before they even send an email.</p>
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