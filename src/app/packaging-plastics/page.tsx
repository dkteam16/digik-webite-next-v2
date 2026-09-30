 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
// import Sixthings from "@/app/packaging-plastics/six-things"
import PLusminus from "@/app/packaging-plastics/six-things"
 
 
 
 
   

import Image from "next/image";



export default function loacl() {
  return (
 
    <div className="packing-plast all-indus-pagemian">       
        <Allinone
            tag="Packaging & Plastics Manufacturers"
            titlePrefix="Packaging Buyers Make Supplier Decisions in "
             titleHighlight=" Minutes Online. "
              titlePrefixtwo="Make Those Minutes Count. " 
            description="Whether you manufacture FIBC jumbo bags, corrugated boxes, plastic containers, or flexible packaging — your buyers compare multiple suppliers online simultaneously. Your website is your sales pitch running 24/7."
            buttons={[
                { text: "Get Free Website Audit", link: "/contact-us" },
                { text: "View Examples", link: "/contact-us" },
            ]} 
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "$50B+ ", label: "Indian packaging market size" },
                { value: "12%", label: "Annual packaging industry growth" },
                { value: "24/7", label: "Your website works even when you sleep" }, 
            ]}
        />  

        <Allinonemarque />  
             <PLusminus />
           {/* 
           <Sixthings />
       */}
           

      
 

         
      
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
                title="Get a Packaging Website That <span>Generates Real RFQs</span>"
                description="Free website audit for chemical manufacturers and pharmaceutical exporters across India."
                buttonText="Get Free Audit"
                buttonLink="/contact" 
                buttonTextSecond="WhatsApp Us"
                buttonLinkSecond="/contact"
                footerText=" "
                />
         </div>        
    </div>
  );
}
