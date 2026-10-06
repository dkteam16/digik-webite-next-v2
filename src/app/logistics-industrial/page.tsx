 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Plusminus from "@/app/logistics-industrial/plus-minus"
import Sixthings from "@/app/logistics-industrial/six-things"
 
 
 
 
   

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & SEO for Logistics & Industrial Suppliers",
  description: "Industrial logistics companies that rank on Google win contracts before competitors quote. Web design and SEO for logistics and suppliers. Get a free audit.",
};



export default function loacl() {
  return (
 
    <div className="logistic all-indus-pagemian">       
        <Allinone
            tag="Logistics & Industrial Suppliers"
            titlePrefix="Industrial Logistics Companies That Rank on Google Win Contracts Before Competitors Quote"
             titleHighlight=""
              titlePrefixtwo="" 
            description="Whether you provide 3PL warehousing, industrial freight, CFS services, or supply chain solutions — your corporate clients search for logistics partners online. If you're not on page 1, you're not in the conversation."
            buttons={[
                { text: "Get Free Website Audit", link: "/contact-us" },
                { text: "See Examples", link: "/work" },
            ]} 
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "$215B ", label: "India logistics market size" },
                { value: "10.5%", label: "Annual sector growth" },
                { value: "Page 1", label: "Where your clients search for you" }, 
            ]}
        />  

        <Allinonemarque />  
        <Plusminus />
             <Sixthings />
         

      
 

         
       
         <div className="b2b-branding-inere allindus-btn">
             <Image
                 src="/google.png"
                 alt="logo"
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="w-full h-auto iso"
                 priority
               />
                    <CommonCTA
                title="Ready to Win More Logistics Contracts Through Your Website?"
                description="Free audit for industrial logistics and supply chain companies across India."
                buttonText="Get Free Audit"
                buttonLink="/contact-us" 
                buttonTextSecond="WhatsApp Us"
                buttonLinkSecond="https://wa.me/919814820845"
                footerText=" "
                />
         </div>          
    </div>
  );
}
