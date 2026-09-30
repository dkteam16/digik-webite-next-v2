"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  { 
    subtitle: " ",
    title: "Product & Grade Catalogue",
    description: "Structural sections, plates, pipes, bars — with grade, standard, and dimensional specs per product"
  },
  {
    subtitle: " ",
    title: "Fabrication Capability Pages",
    description: "Showcase your plant, machinery, fabrication capacity and quality inspection processes"
  },
  {
    subtitle: " ",
    title: "Project Portfolio",
    description: "Case studies and project photos that demonstrate your scale and execution capability"
  },
  {
    subtitle: " ",
    title: "Technical Downloads",
    description: "Mill test certificates, material data sheets, and product brochures as downloadable PDFs"
  },
   {
    subtitle: " ",
    title: "Industrial SEO Strategy",
    description: "Rank for steel fabricator India, MS plate supplier, structural steel manufacturer and 60+ terms"
  } ,
   {
    subtitle: " ",
    title: "RFQ & Tender Inquiry Forms",
    description: "Structured enquiry forms for material supply, fabrication projects, and export inquiries"
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
                <Image
                               src="/cartshop.png"
                               alt="logo"
                               width={0}
                               height={0}
                               sizes="100vw"
                               className="w-full h-auto iso"
                               priority
                             />
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