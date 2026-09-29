"use client";
import React, { useState } from 'react';
import Image from "next/image";
const missionVisionData = [
  {
    id: 1,
    subtitle: "The Problem",
    title: "Generalist Agencies Don't Speak Industrial",
    description:  "When a general agency builds your manufacturing website, they use stock photos of factories they've never visited and write copy that could belong to any business. They don't know what an RFQ is, what PPAP means, or what an international buyer needs to see before qualifying a supplier."
  },{
    id: 2,
    subtitle: "The Digital Kangaroos Difference",
    title: "We've Spent a Decade Learning Your Industry",
    description: "Every service we offer has been refined specifically for industrial clients. We know how procurement engineers search Google. We know what trust signals matter on a B2B website. We know how to write about castings, fasteners, and machining tolerances — and rank for those terms on Google."
  }
];

export default function beleive() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <section className="mv-section bg-[#F5F5F5]">
       <div className='mv-section-iner'>
          <div className='beleive-top'>
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Why Specialisation Wins</p>
                  <h2>One Agency. <span className='text-[#F4A31D]'>One Niche. Maximum Results.</span></h2>
                  <p className='text-[#333333]'>A generalist agency splits its expertise across dozens of industries. We put 100% of our knowledge into one — yours.</p>
               </div>
                 <Image
                  src="/google.png"
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
