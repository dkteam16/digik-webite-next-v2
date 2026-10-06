"use client";
import React, { useState } from 'react';
import Image from "next/image";
const missionVisionData = [
  {
    id: 1,
    subtitle: "Our Mission",
    title: "TO MAKE EVERY INDIAN MANUFACTURER FINDABLE, CREDIBLE, AND EASY TO BUY FROM",
    description:  "India has some of the world's finest manufacturing capability — in casting, machining, textiles, engineering, chemicals, and more. But outstanding factories are being overlooked by international buyers every day because their digital presence fails to communicate what they are actually capable of. Our mission is to close that gap. We build websites and SEO strategies that put Indian manufacturers on the screens of the buyers who need them, and make those buyers confident enough to send the RFQ."
  },{
    id: 2,
    subtitle: "Our Vision",
    title: "TO BE THE GO-TO DIGITAL PARTNER FOR B2B INDUSTRIAL COMPANIES ACROSS INDIA",
    description: "We envision a future where every serious manufacturing and export company in India — from a 10-person precision machining shop in Ludhiana to a multi-plant engineering group in Pune — has a digital presence that genuinely reflects their capability and actively generates business. We want to be the agency they call when they are ready to stop depending on platforms they don't own and start building digital assets that compound in value over time."
  }
];

export default function beleive() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <section className="mv-section bg-white">
       <div className='mv-section-iner'>
          <div className='beleive-top'>
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Mission & Vision</p>
                  <h2>What We Believe. Why We Exist.</h2>
                  <p className='text-[#333333]'>We are not in the business of building websites. We are in the business of building the digital engine that drives enquiries, builds credibility, and grows revenue for industrial companies across India.</p>
               </div>
                 <Image
                                src="/about/iso.png"
                                alt="logo logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="iso"  
                                priority
                                />
          </div>


          <div className="mv-container">
            
            {missionVisionData.map((item) => {
              const isActive = activeCardId === item.id;

              return (
                <div 
                  key={item.id}
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
