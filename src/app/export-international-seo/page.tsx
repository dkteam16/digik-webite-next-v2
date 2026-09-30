 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-second"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Indian from "@/app/export-international-seo/indian-supply"
 
import Image from "next/image";



export default function loacl() {
  return (
    <div className="export-international">
        <Allinone
            tag="International SEO"
            titlePrefix="Get Found by Buyers in the "
            titleHighlight="UK, USA & Europe."
            description="We rank Indian manufacturers and exporters on Google in international markets — putting your company in front of procurement managers and sourcing engineers who are actively searching for what you make."
            buttons={[
                { text: "Get Export SEO Audit", link: "/contact-us" },
                { text: "see Results", link: "/contact-us" },
            ]}
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "4+", label: "Export Markets Targeted" },
                { value: "12+", label: "Industrial Sectors Covered" },
                { value: "₹0", label: "Cost Per Inbound RFQ" },
            ]}
        />        
        <Allinonemarque />
        {/* <DifferExper /> */}
        <Indian />  
         <div className="expert-international-inere">
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
                title="Start Getting International RFQs Through Your Own Website."
                description="Stop depending on trade fairs and buying agents. Get a free export SEO audit and see how many international buyers are searching for what you make right now."
                buttonText="Get Free Export SEO Audit"
                buttonLink="/contact"
                footerText="Free · 48hr Delivery · No Obligation"
                />
         </div>
    </div>
  );
}
