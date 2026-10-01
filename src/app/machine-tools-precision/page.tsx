 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
// import Sixthings from "@/app/packaging-plastics/six-things"
import Sixthings from "@/app/machine-tools-precision/six-things"
 
 
 
 
   

import Image from "next/image";



export default function loacl() {
  return (
 
    <div className="machinetool all-indus-pagemian">       
        <Allinone
            tag="Machine Tools & Precision Engineering"
            titlePrefix="Your Engineering Precision Deserves a Website as "
             titleHighlight="Technically Sharp"
              titlePrefixtwo="as Your Products" 
            description="CNC machine manufacturers, precision component makers, and tooling exporters sell to buyers who make high-stakes, long-term purchasing decisions. Your website needs to communicate technical excellence, not just look presentable."
            buttons={[
                { text: "Get Free Website Audit", link: "/contact-us" },
                { text: "View Examples", link: "/our-work" },
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
                title="Let Your Website Work as Hard as Your <span>Machines Do</span>"
                description="Free audit for machine tool manufacturers and precision engineering companies across India."
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
