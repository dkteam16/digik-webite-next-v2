 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Fasteren from "@/app/fasteners-hardware/fasteren"
import PLusminus from "@/app/fasteners-hardware/plus-minus"
import Point from "@/app/fasteners-hardware/points"
import Export from "@/app/hosiery-textile-exporters/export-web"
 
 
 
   

import Image from "next/image";



export default function loacl() {
  return (
 
    <div className="fasteren all-indus-pagemian">       
        <Allinone
            tag="Fasteners, Nut-Bolt & Industrial Hardware Manufacturers"
            titlePrefix="A World-Class Fastener Website Wins Orders Faster"
             titleHighlight="  "
              titlePrefixtwo=" " 
            description="India's fastener industry exports to 80+ countries. But most manufacturers win these orders through personal relationships and trade fairs — a model that breaks down the moment a new international buyer searches for you on Google and finds nothing."
            buttons={[
                { text: "Get Free Website Audit", link: "/contact-us" },
                { text: "See Industry Examples", link: "/contact-us" },
            ]} 
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "$3.2B", label: "India fastener exports annually" },
                { value: "80+", label: "Countries India exports fasteners to" },
                { value: "5%", label: "Manufacturers with good websites" }, 
            ]}
        />  
           <Allinonemarque /> 
           <PLusminus />
           <Point />    
           <Fasteren /> 
           
          
           {/* <Garment />
           <Export /> */}


           

      
 

        
      
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
                title="Ready to Replace IndiaMart with <span >Your Own Lead Machine?</span>"
                description="Free website and SEO audit for fastener and hardware manufacturers."
                buttonText="Get Free Website Audit"
                buttonLink="/contact" 
                buttonTextSecond="WhatsApp Us"
                buttonLinkSecond="/contact"
                footerText=" "
                />
         </div>    
    </div>
  );
}
