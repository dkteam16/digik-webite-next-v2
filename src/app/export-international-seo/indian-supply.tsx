"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "International Keyword Research",
    description: "We research the exact searches made by procurement teams in each target market — including product-specific, certification-specific, and country-of-origin queries like casting manufacturer India or precision machined parts India supplier."
  },
  {
    subtitle: " ",
    title: "Country & Market Targeting",
    description: "Technical configuration of your website to target specific countries — hreflang tags, geotargeting in Google Search Console, market-specific landing pages, and localised content for each target market."
  },
  {
    subtitle: " ",
    title: "Export-Intent Content Creation",
    description: "Technical articles and landing pages targeting the research phase of international buyer journeys — How to source X from India, Indian manufacturer for Y, and similar queries that capture buyers before they've identified a supplier."
  },
  {
    subtitle: " ",
    title: "International Trust Signal Optimisation ",
    description: "Ensuring your website displays the certifications, quality standards, export track record, and buyer-reference signals that international procurement teams specifically look for when qualifying Indian suppliers."
  },
  {
    subtitle: "",
    title: "International Link Building",
    description: "Building backlinks from international trade directories, export promotion boards, sector-specific publications, and B2B platforms in the UK, USA, and EU — signals that tell Google your site is relevant internationally."
  },
  {
    subtitle: "",
    title: "RFQ Funnel for International Buyers",
    description: "Optimising the enquiry journey specifically for international buyers — clear Incoterms information, export capability statements, and drawing upload functionality that international procurement expects."
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
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>The Opportunity</p>
                  <h2>International Buyers Are Searching for <span className='text-[#F4A31D]'>Indian Suppliers Right Now</span>.</h2>
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