 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Global from "@/app/cycle-sports-equipment/global-buy" 
import PlusMinus from "@/app/cycle-sports-equipment/plus-minus" 
import Cycle from "@/app/cycle-sports-equipment/cycle" 
 
 
   

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & SEO for Cycle Parts & Sports Equipment",
  description: "Give the Ludhiana cycle cluster a world-class digital presence. Websites and SEO for cycle parts and sports equipment manufacturers. Get a free audit.",
};



export default function loacl() {
  return (
 
    <div className="cycle-sport  all-indus-pagemian">       
        <Allinone
            tag="Cycle Parts & Sports Equipment Manufacturers"
            titlePrefix="The Ludhiana Cycle Cluster Deserves a World-Class Digital Presence"
             titleHighlight="  "
              titlePrefixtwo=" " 
            description="Ludhiana manufactures 70% of India's cycles and cycle parts — yet most manufacturers in the cluster are invisible online to the global buyers who want to source from them. We fix that."
            buttons={[
                { text: "Get Free Audit ", link: "/contact-us" },
                { text: "View Our Work", link: "/work" },
            ]} 
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "70%", label: "India's cycles made in Ludhiana" },
                { value: "0%", label: "Cluster online visibility (typical)" },
                { value: "5x", label: "Export inquiry growth we target" }, 
            ]}
        />  
           <Allinonemarque />  
           <Global /> 
           <PlusMinus />
           <Cycle />
        
      
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
                title="Let's Put Ludhiana's Cycle Cluster on the Global Map"
                description="Free website audit for cycle and sports equipment manufacturers. No commitment, just clarity."
                buttonText="Get Free Audit"
                buttonLink="/contact-us"
                buttonTextSecond="Call Us Now"
                buttonLinkSecond="tel:+919814820845"
                footerText=" "
                />
         </div>    
    </div>
  );
}
