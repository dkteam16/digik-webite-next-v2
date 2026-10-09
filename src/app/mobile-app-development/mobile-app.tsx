"use client";
import React, { useState } from 'react';
import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "Dealer & Distributor Portals",
    description: "Custom apps for your dealer network — order placement, price lists, stock availability, order tracking, and promotional material downloads — all in one branded mobile application."
  },
  {
    subtitle: " ",
    title: "Customer Product Catalogue Apps",
    description: "Mobile product catalogues for your customer and buyer community — with full product specifications, enquiry submission, drawing uploads, and order tracking functionality."
  },
  {
    subtitle: " ",
    title: "Field Sales & Order Management",
    description: "Apps for your sales team on the road — customer visit logging, on-site order placement, product information access, and real-time order status visibility synced to your backend systems."
  },
  {
    subtitle: " ",
    title: "Production & Quality Tracking",
    description: "Internal apps for tracking production orders, quality inspection results, dispatch status, and delivery confirmation — replacing paper-based processes with real-time digital workflows."
  },
  {
    subtitle: "",
    title: "ERP & System Integration",
    description: "Deep integration with your existing ERP, accounting, or inventory management systems — so your app reflects live data rather than a disconnected, manually updated snapshot."
  },
  {
    subtitle: "",
    title: "Push Notifications & Alerts",
    description: "Automated push notifications for order confirmations, dispatch alerts, payment reminders, and promotional communications — keeping your buyers and dealers engaged and informed."
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
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Apps We Build</p>
                  <h2>Your Products Are Your <span className='text-[#F4A31D]'>Mobile Applications for</span> Every Industrial Use Case</h2>
                  {/* <p className='text-[#333333]'>Every day, procurement managers in the UK, USA, Germany, and Australia search Google for Indian manufacturers. The question is whether they find you or your competitor.</p> */}
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