"use client";
import React, { useState } from 'react';
// import Image from "next/image";

// ✅ Ab 'id' likhne ki zaroorat nahi — jitna chaho copy-paste karo,
// error kabhi nahi aayega kyunki key automatically index se banegi.
const missionVisionData = [
  {
    subtitle: " ",
    title: "Industrial Keyword Research",
    description: "In-depth research into the exact search terms your ideal buyers use — from product-specific queries to industry, certification, and problem-aware searches across domestic and international markets."
  },
  {
    subtitle: " ",
    title: "Technical SEO Audit & Fixes",
    description: "A complete audit of your website's technical health — crawlability, indexation, site speed, Core Web Vitals, structured data, internal linking, and mobile usability — with all issues fixed."
  },
  {
    subtitle: " ",
    title: "On-Page Optimisation",
    description: "Every page optimised for its target keyword — title tags, meta descriptions, heading structure, content depth, and internal linking aligned to the industrial buyer's search intent."
  },
  {
    subtitle: " ",
    title: "Technical Content Writing ",
    description: "Long-form, expert-level technical content written by people who understand manufacturing — articles that rank for industrial search terms and demonstrate genuine expertise to buyers."
  },
  {
    subtitle: "",
    title: "Link Building for Industry",
    description: "Authoritative backlinks from industrial directories, trade publications, manufacturing associations, and B2B platforms — building domain authority specifically relevant to your sector."
  },
  {
    subtitle: "",
    title: "Industry Page Architecture",
    description: "Creation of dedicated pages targeting specific industries, materials, processes, and product types — the page structure that captures long-tail industrial searches at scale."
  },
  {
    subtitle: "",
    title: "Conversion Rate Optimisation",
    description: "Improving the percentage of organic visitors who submit an RFQ — through better calls-to-action, improved page layout, trust signal placement, and enquiry form optimisation."
  },
  {
    subtitle: "",
    title: "Generative search optimisation",
    description: "Optimising your content to appear in AI-generated answers across ChatGPT, Gemini, Perplexity, and Google's AI Overviews — structuring pages, building authority signals, and crafting content that large language models cite when buyers ask industry questions."
  },{
    subtitle: "",
    title: "Monthly Reporting & Calls",
    description: "Transparent monthly reporting on keyword rankings, organic traffic, enquiry volume, and competitor movement — with a call to discuss results and strategy adjustments."
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
               <div className='beleive-top-iner'>  <p className='text-[#F4A31D]'>Our SEO Services</p>
                  <h2>Everything Included in Our <span className='text-[#F4A31D]'> Manufacturing SEO Programme</span></h2>
                  <p className='text-[#333333]'>Not a template. Not a page builder. A custom-built, fully optimised website designed around your specific manufacturing capability and your ideal buyer.</p>
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