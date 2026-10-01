 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Sixthings from "@/app/chemical-pharmaceutical-manufacturers/six-things"
import PLusminus from "@/app/chemical-pharmaceutical-manufacturers/plus-minus"
 
 
 
 
   

import Image from "next/image";



export default function loacl() {
  return (
 
    <div className="chemical all-indus-pagemian">       
        <Allinone
            tag="Chemical & Pharma companies"
            titlePrefix="In Regulated Industries, Your Website is Your First Compliance Check for International Buyers"
             titleHighlight="  "
              titlePrefixtwo=" " 
            description="Chemical and pharma buyers don't just evaluate price — they evaluate your documentation, certifications, regulatory compliance, and quality systems before they even send an inquiry. Your website needs to demonstrate all of this clearly and credibly."
            buttons={[
                { text: "Get Free Website Audit", link: "/contact-us" },
                { text: "See Industry Examples", link: "/our-work" },
            ]} 
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "$28B+ ", label: "India pharma export market" },
                { value: "GMP", label: "Certification buyers expect online" },
                { value: "4x", label: "More inquiries with compliant website" }, 
            ]}
        />  
           <Allinonemarque />  
           <Sixthings />
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
                title="Is Your Chemical or Pharma Website Winning International Buyers?"
                description="Free website audit for chemical manufacturers and pharmaceutical exporters across India."
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
