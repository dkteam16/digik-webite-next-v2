// import React, { useState } from 'react';
import Image from "next/image";
const stages = [
  { id: 1, description: "SEO for Manufacturing Companies India" },
  { id: 2, description: "B2B lead Generation SEO" },
  { id: 3, description: "Export Business SEO India" },
  { id: 4, description: "Google Ranking for Industrial Products" },
  { id: 5, description: "Technical SEO for Manufacturer Website" },
  { id: 6, description: "Organic Leads for B2B Company" },
  { id: 7, description: "Industrial SEO Agency India" },
  { id: 8, description: "B2B SEO services India" },
  { id: 9, description: "international SEO for Indian exporters" },
  { id: 10, description: "local SEO for manufacturing unit" },
 
];

export default function SectorDesign() {
  return (
    <>
    <div className="sector-design">
      <div className="mv-section-iner">
        <div className="sector-design-top">
           <Image
                src="/google.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto indus-img"
                priority
            />
          <p className="text-[#F4A31D]">Keywords We Target</p>
          <h2>
            The <span className="text-[#F4A31D]">Industrial Keywords</span> We Rank Your Business For
          </h2>
        </div>
        <ul>
          {stages.map((stage) => (
            <li key={stage.id}>
              <p>{stage.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
 
    </>
  );
}