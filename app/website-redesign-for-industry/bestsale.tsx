"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "Full Website Audit First",
    description: "Before writing a line of code, we audit every aspect of your current site — existing rankings, content worth preserving, technical issues, and structural problems — so we carry forward what works and fix what doesn't."
  },
  {
    subtitle: " ",
    title: "SEO Migration Guarantee",
    description: "Every URL redirect mapped, every existing ranking protected, every piece of indexed content preserved or properly redirected. We have never lost a client's search rankings through a redesign."
  },
  {
    subtitle: " ",
    title: "Parallel Development",
    description: "We build the new site on a staging server while your current site remains fully live — so your business operations and existing enquiry flow are never interrupted during the redesign process."
  },
  {
    subtitle: " ",
    title: "Content Audit & Rewrite",
    description: "We review all existing content, identify what needs to be kept, what needs to be rewritten for SEO, and what new pages need to be created from scratch to target the keywords your current site misses."
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
                  {/* <p className='text-[#333333]'>Every day, procurement managers in the UK, USA, Germany, and Australia search Google for Indian manufacturers. The question is whether they find you or your competitor.</p> */}
               </div>
                 <Image
                                    src="/google.png"
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