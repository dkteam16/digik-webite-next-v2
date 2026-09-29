 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Global from "@/app/cycle-sports-equipment/global-buy" 
import PlusMinus from "@/app/cycle-sports-equipment/plus-minus" 
import Cycle from "@/app/cycle-sports-equipment/cycle" 
 
 
   

import Image from "next/image";



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
                { text: "View Our Work", link: "/contact-us" },
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



            {/* <div className="keyword-nma">
                <Image
                 src="/cartshop.png"
                 alt="logo"
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="w-full h-auto iso"
                 priority
               />
                <Keywords /></div> */}

       {/* <div className="b2b-branding-inere  allindus-btn">
            
                    <CommonCTA
                title="Is Your Website Winning Auto Buyers or Losing Them?"
                description="Get a free audit of your current website and SEO. We'll show you exactly what's costing you RFQs."
                buttonText="Get Free Audit Now"
                buttonLink="/contact"
                buttonTextSecond="WhatsApp Us"
                buttonLinkSecond="/contact"  
                />
         </div>    */}

      

{/* 
      <div  className="cycle-buy">  <Cycle /></div>
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
                title="Let's Put Ludhiana's Cycle Cluster on the Global Map"
                description="Free website audit for cycle and sports equipment manufacturers. No commitment, just clarity."
                buttonText="Get Free Audit"
                buttonLink="/contact"
                buttonTextSecond="all Us Now"
                buttonLinkSecond="/contact"
                footerText=" "
                />
         </div>    
    </div>
  );
}
