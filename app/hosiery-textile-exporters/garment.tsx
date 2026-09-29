"use client";
import React, { useState } from 'react';
import Image from "next/image";
const missionVisionData = [
  {
    id: 1,
    subtitle: "1",
    title: "Product Photography",
    description:  "Professional product images showing fabric quality, finish, and range — not blurry WhatsApp photos."
  },{
    id: 2,
    subtitle: "2",
    title: "Factory & Capacity",
    description: "Photos of your production facility and clear statements of production capacity and lead times."
  },{
    id: 3,
    subtitle: "3",
    title: "Certifications",
    description: "GOTS, OEKO-TEX, ISO certifications prominently displayed — without these, EU buyers won't proceed."
  },{
    id: 4,
    subtitle: "4",
    title: "MOQ & Customisation",
    description: "Clear minimum order quantities, customisation options, and private label / OEM capabilities."
  },{
    id: 5,
    subtitle: "5",
    title: "Export Experience",
    description: "Countries you've exported to, buyer logos (with permission), and export documentation capability."
  },{
    id:6,
    subtitle: "6",
    title: "Easy RFQ Process",
    description: "A simple, professional way to request samples or submit a bulk order inquiry — not just a phone number."
  }
];

export default function beleive() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <div className='garment'>
    <section className="mv-section bg-white   copy-indus-world">
       <div className='mv-section-iner'>
          <div className='beleive-top'>
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>What Textile Buyers Look for Online</p>
                  <h2>A Garment Buyer in Paris or New York Checks These 7 Things Before Emailing You</h2>
               </div>
                 
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
    </section></div>
  );
}
