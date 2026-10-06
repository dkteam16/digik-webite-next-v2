"use client";
import React, { useState } from 'react';
import Image from "next/image";

// Timeline elements data array jise loop me chalana hai
const timelineStages = [
  {
    id: 1,
    badge: "DAY 1",
    title: "A HUMBLE BEGINNING WITH A CLEAR VISION",
    description: "  Digital Kangaroos was founded as a web development agency driven by a simple but powerful belief: that every business deserves a digital presence that works as hard as they do. Our earliest clients were small and medium businesses across industries — and from each project, we learned what made a website genuinely effective versus merely presentable."
  },
  {
    id: 2,
    badge: "YEAR 2",
    title: "DISCOVERING THE INDUSTRIAL GAP",
    description: "We began working with our first manufacturing clients — a fastener exporter and a precision machining company — both of whom had the same problem: outstanding physical operations and a digital presence that completely failed to communicate their capability to international buyers. The gap was striking, and the opportunity was obvious. We started learning the industrial sector from the inside."
  },
  {
    id: 3,
    badge: "YEAR 4",
    title: "GOING ALL-IN ON MANUFACTURERS & EXPORTERS",
    description: "We made the decision that would define Digital Kangaroos: to stop being a generalist agency and to commit entirely to web design and SEO for manufacturers, exporters, and B2B industrial companies. We turned away clients outside this niche. We built expertise in industrial buyer behaviour, B2B SEO, technical content writing, and the specific trust signals that convert an overseas buyer from a visitor into an RFQ submission."
  },
  {
    id: 4,
    badge: "YEARS 6",
    title: "SERVING THE GLOBAL MARKET FROM LUDHIANA",
    description: "Our clients began receiving direct enquiries from buyers in the UK, Germany, the USA, and Australia — not through IndiaMart or trade fairs, but through Google. Through websites and content we had built for them. Indian manufacturing companies were being found and qualified by international procurement teams because of the digital infrastructure we had created. That is the outcome we measure ourselves against."
  },
  {
    id: 5,
    badge: "TODAY",
    title: "INDIA'S SPECIALIST WEB & SEO AGENCY FOR INDUSTRY",
    description: "Digital Kangaroos today serves manufacturers, exporters, engineering firms, and B2B industrial companies across India and the global market. We have delivered over 150 industrial websites, driven measurable increases in RFQ volumes for our clients, and built a body of technical SEO work in the manufacturing sector that no generalist agency in India can match. The journey that began with a vision to create captivating online experiences has evolved into something more specific — and because of that specificity, far more powerful."
  }
];

export default function HowWeGotHere() {
  // Id number 4 ko screenshot ke according starting me default active set kiya hai
  const [activeStageId, setActiveStageId] = useState<number | null>(4);

  const toggleTimelineCard = (id: number) => {
    setActiveStageId(activeStageId === id ? null : id);
  };

  return (
    <section className="hwgh-section">
      <div className="hwgh-container">
        
        {/* LEFT COLUMN: BRAND STATIC IDENTITY */}
        <div className="hwgh-left-column">
          <p  >2019 EST. INDIA</p>
          <h2  >HOW WE GOT HERE</h2>
          <p  >
            Every decision we have made as an agency - every pivot, every
            specialisation, every client we said yes or no to - has been in service of
            one goal: building the most effective digital growth engine possible for
            industrial businesses in India and beyond.
          </p>
           
          <div className="hwgh-illustration-box">
             <Image
                                            src="/about/kangro.png"
                                            alt="logo logo"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="iso"  
                                            priority
                                            />
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE ACCORDION TIMELINE LOOP */}
        <div className="hwgh-right-column">
          {timelineStages.map((stage) => {
            const isCurrentActive = activeStageId === stage.id;

            return (
              <div 
                key={stage.id}
                className={`hwgh-timeline-card ${isCurrentActive ? 'hwgh-card-expanded' : ''}`}
                onClick={() => toggleTimelineCard(stage.id)}
              >
                {/* Micro Orange Highlight Ribbon */}
                <div className="hwgh-badge-wrapper">
                  <span className="hwgh-badge-lbl">{stage.badge}</span>
                </div>

                {/* Primary Card Header Grid Layer */}
                <div className="hwgh-card-header">
                  <h3 className="hwgh-card-title">{stage.title}</h3>
                  <span className="hwgh-plus-minus-indicator">
                    {isCurrentActive ? '−' : '+'}
                  </span>
                </div>

                {/* Vertical Expansion Content Cabinet */}
                <div className="hwgh-drawer-mechanism">
                  <div className="hwgh-drawer-interior">
                    <p className="hwgh-drawer-description">{stage.description}</p>
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
