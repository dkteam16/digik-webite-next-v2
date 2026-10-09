
import Link from 'next/link'; 
import WebMobile from "../homepage/web-seo-mobile";
import Image from "next/image";
const servicesData = [
  {
    id: 1,
    title: "Industrial Website Design",
    description: "High-performance websites built specifically for manufacturers, exporters, and B2B engineering companies. Credible, fast, mobile-first, and designed to convert international buyers into enquiries.",
    tags: ["Manufacturing Co. Sites", "B2B Web Design", "Export-Ready", "Engineering Firms"],
    img: "/allservice/core1.png" // अपनी इमेज यहाँ रखें
  },
  {
    id: 2,
    title: "International Buyer-Ready Websites",
    description: "Websites built to impress procurement managers and sourcing engineers in the UK, USA, Germany, and Australia — with the right trust signals, certifications display, and inquiry flow they expect.",
    tags: ["Export-Focused", "Trust Architecture", "Cart Display", "Multilingual Ready"],
    img: "/allservice/core2.png"
  },
  {
    id: 3,
    title: "Website Redesign for Industry",
    description: "Your existing website is costing you leads every day it remains live. We rebuild it from the ground up — faster, more credible, fully optimised — without disrupting your existing business operations.",
    tags: ["Full Redesign", "Content Migration", "SEO Preservation", "Speed Optimisation"],
    img: "/allservice/core3.png"
  },
  {
    id: 4,
    title: "Product Catalogue Websites",
    description: "Structured, searchable product catalogue websites that let buyers find the exact component or product they need — with technical specs, material options, and a clear path to an RFQ submission.",
    tags: ["Product Pages", "Spec Sheets", "RFQ Forms", "Category Architecture"],
    img: "/allservice/core4.png"
  },
  {
    id: 5,
    title: "Export & International SEO",
    description: "Multilingual, multi-market SEO that gets your business found in every country you sell into — driving qualified international traffic and inbound enquiries, consistently.",
    tags: ["Hreflang & Localisation", "Market Keyword Research", "Country-Specific Content", "Country-Specific Content"],
    img: "/allservice/core5.png"
  },
  {
    id: 6,
    title: "B2B BRANDING",
    description: "Brand identity built for industrial companies — logos, visual systems, company profiles, and brand guidelines that communicate credibility and capability to serious buyers.",
    tags: ["Logo Design", "Brand Guidelines", "Company Profile", "Visual Identity"],
    img: "/allservice/core6.png"
  },
  {
    id: 7,
    title: "Mobile App Development",
    description: "Custom mobile applications for manufacturing and industrial businesses — from dealer portals and order management apps to customer-facing catalogues and enquiry apps.",
    tags: ["IOS & Android", "Dealer Portals", "Oder Managment", "React Native"],
    img: "/allservice/core7.png"
  },
  {
    id: 8,
    title: "Corporate Photography & videography",
    description: "Professional factory tours, product photography, team portraits, and brand videos — the visual content your website and export marketing materials actually need to build trust.",
    tags: ["Factory Photography", "Product Shoots", "Brand Videos", "Export Catalogues"],
    img: "/allservice/core8.png"
  },
  {
    id:9,
    title: "Local & Google Business SEO",
    description: "Google Business Profile optimisation, local citation building, and map pack ranking; combined with generative search optimisation to ensure manufacturers appear wherever buyers are searching, whether in Google Maps, local results, or AI-generated answers.",
    tags: ["Google Business", "Local SEO", "Map Pack", "Generative Search", "City Targeting"],
    img: "/allservice/core9.png"
  }
];

const ServicesSection = () => {
  return (
    <div className='bg-white'>
    <section className="   web-seo  ">
      
      {/* --- Heading Section --- */}
      <div className="text-center web-seo-center  ">
        
        <h2  >
          Core Services
        </h2>
        <p className="uppercase font-[600] ">
         These are the foundation services every industrial manufacturer and exporter needs to establish a credible, high-performing digital presence.
        </p>
      </div>

      {/* --- Services Grid Mapping --- */}
      <div className='desktop-view'>
          <div className="grid web-seo-bottom grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
             <a href="http://cartpotato.com/" target="_blank" rel="noopener noreferrer" className="contents"><Image
                src="/cartshop.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className="core-servicegrid absolute"  
                priority
                /></a>
            {servicesData.map((service) => (
              <div 
                key={service.id}  
                className="group flex flex-col bg-[#F5F5F5] p-10 rounded-2xl transition-all duration-300 border-t-[6px] border-t-transparent hover:border-t-[#f5a623]"
              >
                {/* Image Icon Wrapper */}
                <div className="w-12 h-12 web-seo-bottom-img  flex items-center justify-center">
                  <img 
                    src={service.img} 
                    alt={"logo"} 
                    className="   group-hover:scale-110 "
                  />
                </div>

                {/* Title */}
                <h3 className="uppercase ">
                  {service.title}
                </h3>

                {/* Description */}
                <p className=" ">
                  {service.description}
                </p>

                {/* Tags (Inner Mapping) */}
                <div className="flex flex-wrap gap-x-3 gap-y-2 web-seo-bottom-last">
                  {service.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="   text-[#F4A31D] bg-[#F4A31D17] px-2 py-1 rounded capitalize font-[600] tracking-tighter shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
       </div>
       <div className='mobile-view'>
          <WebMobile />
       </div>  


 
    </section>
    </div>
  );
};

export default ServicesSection;
