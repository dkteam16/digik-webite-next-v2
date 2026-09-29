"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "Visual Product Catalogue",
    description: "Category-wise product pages with fabric specs, GSM, composition, and care instructions"
  },
  {
    subtitle: " ",
    title: "Certifications Showcase",
    description: "Dedicated compliance page for GOTS, OEKO-TEX, BCI, and other export certifications"
  },
  {
    subtitle: " ",
    title: "Sample Request Forms",
    description: "Professional sample request and bulk RFQ forms that route leads to your sales team instantly"
  },
  {
    subtitle: " ",
    title: "Export SEO Strategy",
    description: `Rank for "hosiery exporter India", "knitwear manufacturer Ludhiana", "cotton T-shirt OEM India" and more`
  } 
];

export default function beleive() {
  // ✅ Ab activeCardId number-id ke bajaye index track karega
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className='export-web'>
    <section className="mv-section bg-[#F5F5F5]  copy-one-agency">
       <div className='mv-section-iner'>
          <div className='beleive-top'>
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Our Solution</p>
                  <h2>We Build Textile Export Websites That Tick Every Box</h2>
                  <p className='text-[#333333]'>From the product catalogue to the enquiry form, every element of your website is designed to make an overseas buyer feel confident placing an order with you.</p>
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
    </section></div>
  );
}