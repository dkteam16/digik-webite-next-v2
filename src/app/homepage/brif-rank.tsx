import React from 'react';
import BrifMobile from "./brif-rank-mobile"

const stages = [
  {
    id: 1,
    title: "DISCOVERY & AUDIT",
    description: "We analyse your current site, your competitors, and your target buyer's search behaviour before writing a single line of code.",
    icon: "/belief5.png", 
  },  
  {
    id: 2,
    title: "STRATEGY & ARCHITECTURE",
    description: "We design the sitemap, keyword map, and content structure — so every page has a purpose and a target keyword.",
    icon: "/belief4.png",
  },
  {
    id: 3,
    title: "DESIGN & BUILD",
    description: "We build your site from scratch — custom designed, fast-loading, fully responsive, and built to convert industrial buyers.",
    icon: "/belief3.png",
  },
  {
    id: 4,
    title: "SEO & CONTENT",
    description: "We optimise every page, publish technical content, and build your authority in Google for the keywords that drive RFQs.",
    icon: "/belief2.png",
  },
  {
    id: 5,
    title: "GROWTH & REPORTING",
    description: "Everything we build for you is something you own and that compounds in value over time. Never a subscription to someone else's platform.",
    icon: "/belief1.png",
  },
];

export default function HowWeWork() {
  return (    
    <section className="brif-rank overflow-hidden">
        <div className='brif-rank-in'>        
                {/* --- Heading Section (Left Aligned) --- */}
                <div className="  brif-rank-in-top text-left">
                    <p className="  uppercase  ">HOW WE WORK</p>
                    <h2 className=" uppercase ">
                    FROM BRIEF TO <span className="text-[#f5a623]">RANKED</span> <br /> IN FIVE STAGES
                    </h2>
                    <p className=" font-bold uppercase  ">
                    A CLEAR, STRUCTURED PROCESS BUILT AROUND YOUR BUSINESS GOALS — NOT AROUND TEMPLATES OR GUESSWORK.
                    </p>
                </div>
   
                {/* --- Stages Section --- */}
               <div className='desktop-view'>
                      <div className="relative brif-rank-in-bottom">
                          
                          {/* पीली डैश्ड लाइन (Only for Desktop) - आइकॉन के सेंटर में सेट की गई है */}
                          {/* <div className="absolute top-10 left-0 w-full h-[1px] border-t border-dashed border-[#f5a623]/40 hidden lg:block z-0"></div> */}

                          <div className="flex justify-between gap-10">
                          {stages.map((stage) => (
                              <div key={stage.id} className="flex flex-col items-start text-left   brif-div">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.06)] flex items-center justify-center mb-8 border border-gray-50 group hover:scale-105 transition-transform duration-300">
                                    <img 
                                    src={stage.icon} 
                                    alt={stage.title} 
                                    className="w-10 h-10 object-contain" 
                                    />
                                </div>
                                <h3 className="uppercase">
                                    {stage.title}
                                </h3> 
                                <p className="   ">
                                    {stage.description}
                                </p>

                              </div>
                          ))}
                          </div>
                      </div>
                </div>
                <div className='mobile-view'>
                               <BrifMobile />
                </div>
        </div>
    </section>
  );
}
