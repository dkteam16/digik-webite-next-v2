"use client";
import React, { useState } from 'react';
import Image from "next/image";
const missionVisionData = [
  {
    id: 1,
    subtitle: "Buyer Behaviour",
    title: " Industrial Buyers Search Very Specifically",
    description:  "A procurement manager doesn't search casting company. They search ductile iron casting machined to drawing India or PPAP capable casting supplier India. Our keyword strategy is built around these specific, high-intent industrial search queries — not generic traffic."
  },{
    id: 2,
    subtitle: "Sales Cycle Reality",
    title: "B2B Sales Cycles Are Months, Not Minutes",
    description: "An industrial buyer who finds your website today may not submit an RFQ for 3 months. Our SEO strategy accounts for the full B2B buying journey — from awareness and research to supplier shortlisting and first contact — with content at every stage."
  } 
];

export default function beleive() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <section className="mv-section bg-white   copy-indus-world">
       <div className='mv-section-iner'>
          <div className='beleive-top'>
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Why Industrial SEO Is Different</p>
                  <h2>B2B SEO Is Not Consumer SEO. It Needs   <span className='text-[#F4A31D]'>Different Expertise.</span></h2>
                  <p className='text-[#333333]'>The way a procurement engineer searches Google is fundamentally different from a consumer purchase. Our SEO is built around that reality.</p>
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
              const isActive = activeCardId === item.id;

              return (
                <div 
                  key={index}
                  className={`mv-card ${isActive ? 'mv-card-active' : ''}`}
                  onClick={() => toggleCard(item.id)}
                >
                  <div className="mv-card-header">
                    <span className="mv-subtitle">{item.subtitle}</span>
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
