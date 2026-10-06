"use client";
import React, { useState } from 'react';
import Image from "next/image";

const missionVisionData = [
  {
    id: 1,
    subtitle: "01",
    title: "Industrial Buyer Psychology",
    description: "We design every website around how a B2B industrial buyer actually behaves — what they search, what they need to see, and what makes them submit an RFQ versus bouncing."
  },
  {
    id: 2,
    subtitle: "02",
    title: "Technical Content Expertise",
    description: "We write about castings, tolerances, certifications, export documentation, and manufacturing processes ourselves — not outsourced to generalist content farms who don't know the difference between ductile iron and grey iron."
  },
  {
    id: 3,
    subtitle: "03",
    title: "B2B SEO Built for Long Sales Cycles",
    description: " Industrial buying decisions take weeks or months. Our SEO strategies are built around the full buyer journey — from awareness to evaluation to first contact — not just quick traffic spikes."
  },
  {
    id: 4,
    subtitle: "04",
    title: "Export-Ready Design Standards",
    description: " We build websites that pass the scrutiny of international procurement teams — the right trust signals, certifications display, product catalogue structure, and inquiry pathway that overseas buyers expect."
  },
  {
    id: 5,
    subtitle: "05",
    title: "Located in India's Industrial Heartland",
    description: " Based in Ludhiana — one of India's most important manufacturing hubs — we understand the industrial ecosystem of Punjab, and we build for clients across India from that vantage point."
  },
  {
    id: 6,
    subtitle: "06",
    title: "You Own Everything We Build",
    description: "No proprietary platforms. No locked-in systems. Every website we build is yours — your code, your hosting, your domain, your asset. Full stop."
  }
];

export default function WorkPurpose() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleCard = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };
 
  return (
    <div className='work-purpose-main bg-black'>
      <section className="mv-section-work ">
        <div className='mv-section-iner'>
          <div className='wor-purpose'>
            <div className='workpurpose-top'>
              <p className='text-[#F4A31D]'>What Makes Us Different</p>
              <h2 className='text-[#fff]'>We Only Work <br />With <span className='text-[#F4A31D]'>Manufacturers. On Purpose.</span></h2>
              
              {/* Main Paragraph */}
              <p className='text-[#fff]'>
                Most digital agencies will take any client who walks through the door — retail, healthcare, hospitality, real estate, manufacturing. They are generalists by design. The work they do is competent but never genuinely expert, because expertise requires depth, and depth requires focus.
                
                {/* 📱 READ MORE: Sirf mobile me dikhega (`md:hidden`), desktop me gayab rahega */}
                {!isExpanded && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-[#F4A31D] font-semibold ml-2 uppercase underline cursor-pointer hover:text-amber-400 focus:outline-none md:hidden"
                  >
                    Read More
                  </button>
                )}
              </p>

              {/* 🔄 Content Box Container */}
              {/* Mobile par state match karega, desktop par hamesha visible rahega (`md:block`) */}
              <div className={`${isExpanded ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
                <p className='text-[#fff] mt-4'>
                  Digital Kangaroos made a deliberate choice to focus exclusively on manufacturers, exporters, and B2B industrial companies.
                  That choice means we understand your buyers in a way a generalist never will. We know how a procurement engineer searches. We know what a sourcing director from Germany needs to see before they consider a supplier. We know what trust signals matter on an industrial website, what an RFQ form needs to capture, and what kind of technical content ranks for the keywords your buyers actually type.
                </p>

                <div className='workpurpose-top-iner bg-[#F4A31D] my-4'>
                  <h3 className='text-white'>3×</h3>
                  <p className='text-white'>Average increase in qualified RFQ enquiries reported by our clients within 6 months of launching their Digital Kangaroos website and SEO programme.</p>
                </div>   

                <p className='text-[#fff]'>
                  That knowledge was not learned in a workshop. It was earned project by project, client by client, in conversations with manufacturing MDs, export managers, quality directors, and procurement professionals across more than a decade of focused industrial work.{' '}
                  <span className='text-[#F4A31D]'>
                    That is the difference specialisation makes — and it is a difference you will feel in every conversation we have and every page we build for you.
                  </span>
                </p>

                {/* 📱 READ LESS: Sirf mobile par band karne ke liye dikhega */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-[#F4A31D] font-semibold mt-4 uppercase underline cursor-pointer hover:text-amber-400 focus:outline-none md:hidden"
                >
                  Read Less
                </button>
              </div>
            </div>

            {/* Accordion Layout Grid */}
            <div className="mv-container-work">
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
        </div>
      </section>
    </div>
  );
}
