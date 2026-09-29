"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: "STEP 01",
    title: "Free Website & SEO Audit",
    description: "Google's standards for speed, mobile usability, and Core Web Vitals have changed dramatically since 2024. A website built before these standards is actively penalised in search rankings and alienates mobile users."
  },
  {
    subtitle: "STEP 02",
    title: "Industry Strategy Session",
    description: "If your analytics show high bounce rates from international visitors, your website is failing the first impression test. International buyers have high expectations and zero patience for slow, outdated sites."
  },
  {
    subtitle: "STEP 03 ",
    title: "Design & Development",
    description: "If updating product information, adding a case study, or changing a phone number requires calling your developer, your website is a liability. Modern industrial websites should be manageable by your own team."
  },
  {
    subtitle: "STEP 04 ",
    title: "SEO Implementation",
    description: "If your website doesn't appear on page one of Google for any of your key products or services, it's not a content problem — it's a structural and strategic problem that redesign solves at the foundation."
  } 
  ,
  {
    subtitle: "STEP 05 ",
    title: "Launch & Lead Tracking",
    description: "If your website doesn't appear on page one of Google for any of your key products or services, it's not a content problem — it's a structural and strategic problem that redesign solves at the foundation."
  } 
];

export default function beleive() {
  // ✅ Ab activeCardId number-id ke bajaye index track karega
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <section className="mv-section   againt-you "> 
       <div className='mv-section-iner'>
          <div className='beleive-top'>
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Our Process</p>
                  <h2>How We Build Websites That Actually Work for Manufacturers </h2>
                  {/* <p className='text-[#333333]'>Every day, procurement managers in the UK, USA, Germany, and Australia search Google for Indian manufacturers. The question is whether they find you or your competitor.</p> */}
               </div>
 
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