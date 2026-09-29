"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 

const sectors = [
  { 
    id: 1, 
    title: "AUTO PARTS & ENGINEERING COMPONENTS",
    description: "High-quality web solutions for automotive parts manufacturers, ensuring technical specs and catalogs are easily accessible to B2B buyers."
  },
  { 
    id: 2, 
    title: "FASTENERS & HARDWARE MANUFACTURERS",
    description: "We build specialized platforms for bolt, nut, and screw manufacturers with robust product filtering and RFQ management systems."
  },
  { 
    id: 3, 
    title: "STEEL & METAL FABRICATION",
    description: "Digital presence for metal fabricators that showcases heavy machinery capabilities and past project portfolios effectively."
  },
  { 
    id: 4, 
    title: "CASTINGS & PRECISION MACHINING",
    description: "Precision-focused websites for foundries and CNC machining shops to demonstrate technical accuracy and ISO standards."
  },
  { 
    id: 5, 
    title: "HOSIERY & TEXTILE EXPORTERS",
    description: "Global-ready websites for textile exporters with focus on fabric quality visualization and international trade compliance."
  },
  { 
    id: 6, 
    title: "CYCLE & SPORTS EQUIPMENT",
    description: "B2B and D2C ready solutions for the sports industry, highlighting durability and performance engineering."
  },
];

export default function IndustryAccordion() {
  // activeId यह ट्रैक करेगा कि कौन सा बॉक्स खुला है
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    // अगर वही बॉक्स दोबारा क्लिक हो तो बंद कर दो (null), वरना नया खोलो
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className=' bg-white    '>
    <section className="  faqq">
      
      {/* Header */}
      <div className="text-center faq-top">
        <p>Industries We Serve</p>
        <h2 className="    uppercase">
          We Speak <span className="text-[#f5a623]">Industrial</span>.<br></br> Your Sector, Our Expertise.
        </h2>
        <p>We don't build websites for everyone. We specialise in manufacturers, exporters, and B2B industrial companies — which means we already understand your buyers, your process, and your terminology.</p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {sectors.map((sector) => (
          <div
            key={sector.id}
            className={`overflow-hidden rounded-xl   transition-all duration-500  accordifn
              ${activeId === sector.id 
                ? "bg-[#f5a623] border-[#f5a623] shadow-lg" 
                : "bg-white border-gray-100 "
              }`}
          >
            {/* Question / Title Section */}
            <button
              onClick={() => toggleAccordion(sector.id)}
              className="w-full flex items-center justify-between px-8 py-6 text-left outline-none"
            >
              <h3 className={`text-sm md:text-lg font-black uppercase tracking-wide transition-colors
                ${activeId === sector.id ? "text-black" : "text-[#000]"}`}>
                {sector.title}
              </h3>
              
              <span className={` icon-pluss font-bold transition-transform duration-300 
                ${activeId === sector.id ? "text-black rotate-45" : "text-black rotate-0"}`}>
                +
              </span>
            </button>

            {/* Answer / Description Section */}
            <div 
              className={`transition-all duration-500 ease-in-out px-8  faq-answer
                ${activeId === sector.id ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className={`text-sm md:text-base font-medium leading-relaxed
                ${activeId === sector.id ? "text-black/90" : "text-transparent"}`}>
                {sector.description}
              </p>
            </div>
          </div>
        ))}
      </div>

       <div className='text-center button-ourlatest'>
     <Link href="/contact-us" className="btn-group-link">
        {/* मुख्य बटन का कंटेनर */}
        <div className="btn-main-container">
          
          {/* अंदर का बॉर्डर वाला डिब्बा */}
          <div className="btn-inner-border">
            
            {/* बायाँ एरो (शुरुआत में छुपा हुआ, होवर पर अंदर आएगा) */}
            <span className="btn-arrow-left font-bold">
              &gt;&gt;
            </span>

            {/* मुख्य टेक्स्ट */}
            <span className="btn-text font-bold uppercase tracking-tight">
              View all 
            </span>

            {/* दायाँ एरो (शुरुआत में दिखेगा, होवर पर बाहर जाएगा) */}
            <span className="btn-arrow-right font-bold">
              &gt;&gt;
            </span>
          </div>

          {/* होवर करने पर पीछे से आने वाला काला गोला (Background Fill Effect) */}
          <div className="btn-bg-fill"></div>
        </div>
      </Link>  

</div>


    </section>
    </div>
  );
}
