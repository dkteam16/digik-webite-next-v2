 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Garment from "@/app/hosiery-textile-exporters/garment"
import Export from "@/app/hosiery-textile-exporters/export-web"
 
 
 
   

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & SEO for Hosiery & Textile Exporters",
  description: "Show overseas buyers your knitwear quality online. Web design and SEO for hosiery, knitwear and textile exporters. Get a free website audit.",
};



export default function loacl() {
  return (
 
    <div className="hosierty all-indus-pagemian">       
        <Allinone
            tag="Hosiery, Knitwear & Textile Exporters"
            titlePrefix="Your Knitwear Quality is World-Class. Your Website Should Prove It to Overseas Buyers."
             titleHighlight="  "
              titlePrefixtwo=" " 
            description="Hosiery and textile exporters in Ludhiana, Tirupur, and across India are losing export orders to competitors who look more professional online — not because they produce better quality, but because their website says so."
            buttons={[
                { text: "Get Free Audit ", link: "/contact-us" },
                { text: "See What We Build", link: "/work" },
            ]} 
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "₹28,000 Cr", label: "Ludhiana hosiery annual output" },
                { value: "60+", label: "Export markets for Indian knitwear" },
                { value: "92%", label: "Exporters with no serious website" }, 
            ]}
        />  
           <Allinonemarque />  
           <Garment />
           <Export />


           

      
 

        
      
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
                title="Let Your Website Do the Export Sales Work"
                description="Free audit for hosiery and textile exporters. We'll show you what your competitors' websites are doing that yours isn't."
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
