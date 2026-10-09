"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "Product Category Architecture",
    description: "A logical, intuitive category structure that mirrors how your buyers think about and search for products — not how your internal team organises the stockroom."
  },
  {
    subtitle: " ",
    title: "Technical Specification Pages",
    description: "Individual product pages with full technical specifications, dimensions, material options, tolerance capabilities, surface finish options, and applicable standards — everything a buyer needs to qualify a product."
  },
  {
    subtitle: " ",
    title: "Drawing & Datasheet Downloads",
    description: "Downloadable PDF datasheets, dimensional drawings, and material test certificates — so serious buyers can verify your products meet their requirements before submitting an RFQ."
  },
  {
    subtitle: " ",
    title: "Product-Level RFQ Forms ",
    description: "RFQ submission forms embedded at product level — capturing product code, quantity, required specifications, delivery location, and drawing uploads, pre-filled with the product the buyer was viewing."
  },
  {
    subtitle: "",
    title: "SEO-Optimised Product Pages",
    description: "Every product page is optimised for the search terms buyers use to find that specific product — with proper schema markup, structured data, and meta information that helps Google rank each page for relevant searches."
  },
  {
    subtitle: "",
    title: "Filter & Search Functionality",
    description: "Buyers can filter your catalogue by material, size, standard, application, or certification — making it fast and easy to find the exact product variant they need, even in a catalogue of hundreds of items."
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