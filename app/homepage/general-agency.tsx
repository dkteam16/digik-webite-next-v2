
import Image from "next/image";

import Link from 'next/link'; 
const points = [
  {
    title: "WE UNDERSTAND INDUSTRIAL BUYERS",
    desc: "WE KNOW HOW A PROCUREMENT ENGINEER SEARCHES, WHAT THEY NEED TO SEE TO TRUST A SUPPLIER, AND WHAT MAKES THEM SUBMIT AN RFQ VERSUS CLICKING AWAY."
  },
  {
    title: "WE WRITE TECHNICAL CONTENT OURSELVES",
    desc: "WE DON'T OUTSOURCE YOUR INDUSTRY CONTENT TO GENERALIST WRITERS. OUR TEAM UNDERSTANDS CASTINGS, MACHINING TOLERANCES, CERTIFICATIONS, AND B2B TERMINOLOGY."
  },
  {
    title: "SEO BUILT FOR LONG B2B SALES CYCLES",
    desc: "INDUSTRIAL SEO IS DIFFERENT FROM CONSUMER SEO. WE BUILD STRATEGIES AROUND THE SPECIFIC SEARCH PATTERNS AND DECISION TIMELINES OF B2B INDUSTRIAL BUYERS."
  },
  {
    title: "LUDHIANA-BASED, INDIA-FOCUSED, EXPORT-READY",
    desc: "WE'RE BASED IN ONE OF INDIA'S BIGGEST INDUSTRIAL HUBS. WE UNDERSTAND INDIAN MANUFACTURING FROM THE INSIDE — AND WE BUILD WEBSITES THAT SPEAK TO THE WORLD."
  },
  {
    title: "YOU OWN EVERYTHING WE BUILD",
    desc: "NO PLATFORM LOCK-IN. NO PROPRIETARY CMS YOU CAN'T CONTROL. EVERY WEBSITE WE BUILD IS FULLY OWNED BY YOU, ON TECHNOLOGY YOU CONTROL."
  }
];

const auditList = [
  "PAGE SPEED SCORE",
  "KEYWORD RANKINGS",
  "RFQ CONVERSION PATH",
  "TRUST SIGNAL AUDIT",
  "COMPETITOR GAP ANALYSIS"
];

export default function AuditSection() {
  return (
  <>
  <div className="bg-white">
  <section className="general-agency">
     <div className='general-agency-top text-center'>
        <p className='uppercase'>Why Digital Kangaroos</p>
        <h2>A General Agency   <span className="text-[#f5a623]"> Doesn't Know</span> What You Make.</h2>
        <p  className='uppercase'>We do. Because we only work with manufacturers, exporters, and B2B industrial companies — and that specialisation makes every part of the work better.</p>
     </div>
          <section className=" general-agency-bottom">
            <div className="flex general-agency-bottom-iner">
                
                {/* --- Left Side: Points List --- */}
                <div className="space-y-10 general-agency-bottom-left">
                {points.map((item, index) => (
                    <div key={index} className="flex gap-6 items-start">
                    {/* Checkbox Icon */}
                    <div className="mt-1 flex-shrink-0 p-1 w-6 h-6 border-2 border-[#f5a623] rounded flex items-center justify-center bg-[#fff9f0]">
                         <Image
                                             className=""
                                             src="/check.png"
                                             alt="logo logo"
                                             width={19}
                                             height={19}
                                             priority
                                           />
                    </div>
                    
                    <div className="space-y-1">
                        <p className="genral-title text-[#333333]  uppercase ">
                        {item.title}
                        </p>
                        <p className="genral-desc uppercase">
                        {item.desc}
                        </p>
                    </div>
                    </div>
                ))}
                </div>

                {/* --- Right Side: Dark Audit Card --- */}
                <div className="bg-[#333333] text-white  right-generala rounded-[24px] shadow-2xl general-agency-bottom-right">
                <p className="text-[#f5a623] general-agency-bottom-righ-top  uppercase  ">
                    FREE AUDIT INCLUDED
                </p>
                <h4 className="    uppercase  ">
                    HOW DOES YOUR WEBSITE   PERFORM RIGHT NOW?
                </h4>
                <p className="  uppercase  ">
                    WE'LL AUDIT YOUR EXISTING WEBSITE ACROSS 5 DIMENSIONS — SPEED, SEO, TRUST SIGNALS, RFQ CONVERSION, AND MOBILE PERFORMANCE — AND SEND YOU A DETAILED REPORT. NO COST. NO OBLIGATION.
                </p>

                {/* Audit Checklist Mapping */}
                <div className="space-y-4  genral-innerne border-gray-700  ">
                    {auditList.map((item, index) => (
                    <div key={index} className="  genral-innerne-inre flex items-center  justify-between border-b border-gray-800  last:border-0">
                        <p className="  uppercase">{item}</p>
                        <div className="flex items-center gap-2 genral-innerne-inre-color ">
                       <Image
                                             className=""
                                             src="/check.png"
                                             alt="logo logo"
                                             width={19}
                                             height={19}
                                             priority
                                           />
                        <p className=" uppercase">WE CHECK</p>
                        </div>
                    </div>
                    ))}
                </div>
    <div className='text-left  general-button-ourlatest'>
     <Link href="/contact-us" className="group relative inline-block">
      {/* मुख्य बटन का कंटेनर */}
      <div className="relative flex items-center justify-center bg-[#f5a623] text-white p-2 rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
        
        {/* अंदर का बॉर्डर वाला डिब्बा */}
        <div className="flex items-center gap-3 border-2 border-white/80 rounded-lg px-6 py-1  z-10 transition-all duration-300">
          
          {/* बायाँ एरो (शुरुआत में छुपा हुआ, होवर पर अंदर आएगा) */}
          {/* <span className="opacity-0 -translate-x-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 font-bold">
            &gt;&gt;
          </span> */}

          {/* मुख्य टेक्स्ट (होवर पर थोड़ा खिसकेगा) */}
          <span className="font-bold uppercase tracking-tight   ">
           get a free audit now
          </span>

          {/* दायाँ एरो (शुरुआत में दिखेगा, होवर पर बाहर जाएगा) */}
          {/* <span className="opacity-100 translate-x-0 transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-10 font-bold">
            &gt;&gt;
          </span> */}
        </div>

        {/* होवर करने पर पीछे से आने वाला काला गोला (Background Fill Effect) */}
        <div className="absolute inset-0 bg-black scale-0 rounded-full transition-transform duration-700 ease-in-out group-hover:scale-[2.5] z-0"></div>
      </div>
    </Link>

</div>




                </div>

            </div>
          </section>

          </section>
          </div>
  </>
  );
}
