"use client";
import React from "react";
// Agar aapne alag se CSS file banayi hai toh use yahan import karein, 
// jaise: import "./dot-marquee.css"; 

const slideItems = [
  "Engineering Firm Web Design",
  "Web Design for Manufacturers",
  "Industrial SEO Agency India",
  "B2B Website Design & Development",
  "Export Company Website Design"
];

export default function ContinuousSlide() {
  // Seamless loop ke liye teen baar repeat kiya gaya hai
  const tripledItems = [...slideItems, ...slideItems, ...slideItems];

  return (
    <div className="dot-marquee-container">
      <div className="dot-marquee-track">
        {tripledItems.map((text, index) => (
          <div key={index} className="dot-marquee-item">
            <span>{text}</span>
            {/* Orange Dot Indicator */}
            <span className="dot-marquee-divider" />
          </div>
        ))}
      </div>
    </div>
  );
}
