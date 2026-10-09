"use client";
import React, { useState } from 'react';
import Image from "next/image";
const missionVisionData = [
  {
    id: 1,
    subtitle: "01",
    title: "Overseas Buyers Can't Trust What They See",
    description:  "A 2012-era layout with stock photos and no certifications displayed sends one message to an international buyer: this supplier is not serious. Your factory may be outstanding — your website is costing you deals."
  },{
    id: 2,
    subtitle: "02",
    title: "No Clear Path to an RFQ Submission",
    description: "If a buyer visits your site and can't immediately find how to submit an enquiry with their drawing or specification, they leave. Most manufacturing websites have no structured RFQ pathway at all. "
  },{
    id: 3,
    subtitle: "03",
    title: "Products Listed Without Technical Detail",
    description: "Listing product names without specifications, material options, tolerance capabilities, or certification information tells a technical buyer nothing. They need data, not descriptions."
  },{
    id: 4,
    subtitle: "04",
    title: "Slow, Mobile-Unfriendly & Not Indexed",
    description: "A slow website loses buyers before they read a word. A mobile-unfriendly site fails buyers on their phones. A site not indexed by Google is invisible to buyers searching for what you make."
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
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>The Problem We Solve</p>
                  <h2>Your Factory Is World-Class.   <span className='text-[#F4A31D]'>Your Website Is Not.</span></h2>
                  <p className='text-[#333333]'>Most manufacturing websites in India are outdated, slow, and fail to communicate what the company is actually capable of. International buyers move on in seconds.</p>
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
