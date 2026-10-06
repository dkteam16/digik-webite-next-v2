 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Autocomp from "@/app/auto-parts-engineering/auto-component" 
import Keywords from "@/app/auto-parts-engineering/keywords" 
import Cycle from "@/app/auto-parts-engineering/cycle-buy" 
 
   

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & SEO for Auto Parts Manufacturers",
  description: "Websites built to win OEM contracts and export orders for auto component and engineering manufacturers. Get a free website and SEO audit.",
};



export default function loacl() {
  return (
    <div className="auto-part-indus   all-indus-pagemian">     
        <Allinone
            tag="Auto Parts & Engineering Manufacturers"
            titlePrefix="Websites Built to Win OEM Contracts & Export Orders for Auto Component Manufacturers"
             titleHighlight="  "
              titlePrefixtwo=" " 
            description="You manufacture precision auto parts. Your buyers — OEMs, tier-1 suppliers, international importers — evaluate you online before they call. Does your website make you look like the supplier they want to work with for the next 10 years?"
            buttons={[
                { text: "Get Free Website Audit", link: "/contact-us" },
                { text: "See What We Build ", link: "/work" },
            ]}
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "150+", label: "Manufacturing clients served" },
                { value: "12+", label: "Industrial sectors covered" },
                { value: "3X", label: "Average RFQ increase post-launch" },
                { value: "₹0", label: "IndiaMart dependency (our goal)" },
            ]}
        />  
           <Allinonemarque />  
           <Autocomp /> 
            <div className="keyword-nma">
                <Image
                 src="/cartshop.png"
                 alt="logo"
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="w-full h-auto iso"
                 priority
               />
                <Keywords /></div>

       <div className="b2b-branding-inere  allindus-btn">
            
                    <CommonCTA
                title="Is Your Website Winning Auto Buyers or Losing Them?"
                description="Get a free audit of your current website and SEO. We'll show you exactly what's costing you RFQs."
                buttonText="Get Free Audit Now"
                buttonLink="/contact-us"
                buttonTextSecond="WhatsApp Us"
                buttonLinkSecond="https://wa.me/919814820845"  
                />
         </div>   

      


      <div  className="cycle-buy">  <Cycle /></div>




        
      
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
                buttonTextSecond="all Us Now"
                buttonLinkSecond="/contact-us"
                footerText=" "
                />
         </div>    
    </div>
  );
}
