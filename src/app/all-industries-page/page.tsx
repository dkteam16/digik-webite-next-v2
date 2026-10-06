 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-industries"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Indus from "@/app/all-industries-page/indus-grow" 
import Understand from "@/app/all-industries-page/understand" 
import Newslide from "@/app/all-industries-page/newslide" 
import Howbuild from "@/app/all-industries-page/how-build" 
import Buildwebsite from "@/app/all-industries-page/build-website" 
   

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | B2B Web Design & SEO",
  description: "We build websites and SEO strategies for auto parts, chemicals, textiles, steel, packaging, logistics and more. See the industries we serve and get a free website audit.",
};



export default function loacl() {
  return (
    <div className="all-indus-page  all-indus-pagemian">     
        <Allinone
            tag="B2B Web Design & SEO Agency India"
            titlePrefix="We Build Websites <br> That Win"
             titleHighlight=" International <br> Buyers"
              titlePrefixtwo="for Indian Manufacturers" 
            description="Professional factory photography, product shoots, and brand videos for manufacturing and industrial companies — the visual content that makes international buyers trust what they see on your website before they ever visit in person. Discuss a Shoot"
            buttons={[
                { text: "Get Free Website Audit", link: "/contact-us" },
                { text: "See Industries We Serve ", link: "/contact-us" },
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
        <Indus />
        <Understand />
        <Newslide />
        <Howbuild />
        <Buildwebsite /> 







        
        {/* <Againt />    
        <Best />  */} 
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
                title="Let's Put Ludhiana's Cycle Cluster on the Global Map"
                description="Free website audit for cycle and sports equipment manufacturers. No commitment, just clarity."
                buttonText="Get Free Website Audit"
                buttonLink="/contact-us"
                buttonTextSecond="all Us Now"
                buttonLinkSecond="/contact-us"
                footerText="Free Consultation · Pan-India Available"
                />
         </div>  
    </div>
  );
}
