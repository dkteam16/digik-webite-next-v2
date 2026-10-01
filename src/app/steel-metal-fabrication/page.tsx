 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Fasteren from "@/app/fasteners-hardware/fasteren"
import PLusminus from "@/app/steel-metal-fabrication/plus-minus"
import Point from "@/app/fasteners-hardware/points"
import Export from "@/app/hosiery-textile-exporters/export-web"
 
 
 
   

import Image from "next/image";



export default function loacl() {
  return (
 
    <div className="steel-metal all-indus-pagemian">       
        <Allinone
            tag="Steel & Metal Fabrication Companies"
            titlePrefix="Industrial Strength Websites for Steel & Metal Fabricators That Win Serious Buyers"
             titleHighlight="  "
              titlePrefixtwo=" " 
            description="Structural steel, rolling mills, fabrication shops, forging units — your buyers are engineers and procurement heads who do deep online research before shortlisting suppliers. Your website needs to speak their language."
            buttons={[
                { text: "Get Free Website Audit", link: "/contact-us" },
                { text: "See Examples", link: "/our-work" },
            ]} 
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "2nd", label: "India is world's top steel producer" },
                { value: "8%", label: "Annual growth in Indian steel sector" },
                { value: "3x", label: "More B2B inquiries with good SEO" }, 
            ]}
        />  
           <Allinonemarque /> 
           <PLusminus />
           

      
 

        
      
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
                title="Ready to Replace IndiaMart with <span>Your Own Lead Machine?</span>"
                description="Free website and SEO audit for fastener and hardware manufacturers."
                buttonText="Get Free Website Audit"
                buttonLink="/contact-us" 
                buttonTextSecond="WhatsApp Us"
                buttonLinkSecond="https://wa.me/919814820845"
                footerText=" "
                />
         </div>    
    </div>
  );
}
