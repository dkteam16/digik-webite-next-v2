"use client";
import React, { useState } from 'react';

const stages = [
  {
    id: 1,
    title: "DISCOVERY & AUDIT",
    description: "We analyse your current site, your competitors, and your target buyer's search behaviour before writing a single line of code.",
    icon: "/icons/audit.png", 
  },
  {
    id: 2,
    title: "STRATEGY & ARCHITECTURE",
    description: "We design the sitemap, keyword map, and content structure — so every page has a purpose and a target keyword.",
    icon: "/icons/strategy.png",
  },
  {
    id: 3,
    title: "DESIGN & BUILD",
    description: "We build your site from scratch — custom designed, fast-loading, fully responsive, and built to convert industrial buyers.",
    icon: "/icons/design.png",
  },
  {
    id: 4,
    title: "SEO & CONTENT",
    description: "We optimise every page, publish technical content, and build your authority in Google for the keywords that drive RFQs.",
    icon: "/icons/seo.png",
  },
  {
    id: 5,
    title: "GROWTH & REPORTING",
    description: "Everything we build for you is something you own and that compounds in value over time. Never a subscription to someone else's platform.",
    icon: "/icons/growth.png",
  },
];

export default function HowWeWork() {
  // Active accordion section track karne ke liye dynamic hook state
  const [openStageId, setOpenStageId] = useState<number | null>(null);

  const toggleStage = (id: number) => {
    setOpenStageId(openStageId === id ? null : id);
  };

  return (
    
      <div className='brif-rank-inmobile'>        
        
     

        {/* --- 📱 STAGES MOBILE ACCORDION MAP GRID --- */}
        <div className="stages-accordion-container">
          {stages.map((stage) => {
            const isOpen = openStageId === stage.id;

            return (
              <div 
                key={stage.id} 
                className={`st-accordion-card ${isOpen ? 'st-is-expanded' : ''}`}
                onClick={() => toggleStage(stage.id)}
              >
                {/* Visible Header Frame */}
                <div className="st-card-header">
                  <h3 className="st-card-title">{stage.title}</h3>
                  <span className="st-toggle-icon">{isOpen ? '−' : '+'}</span>
                </div>

                {/* Collapsible Content Drawer Block */}
                <div className="st-card-drawer">
                  <div className="st-drawer-inner">
                    
                    {/* Stage Custom Icon */}
                    {/* <div className="w-14 h-14 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] flex items-center justify-center mb-4 border border-gray-100">
                      <img 
                        src={stage.icon} 
                        alt={stage.title} 
                        className="w-7 h-7 object-contain" 
                      />
                    </div> */}

                    {/* Stage Description Text */}
                    <p className="st-card-description">
                      {stage.description}
                    </p>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
 
  );
}
