 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-second"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Bestsale from "@/app/b2b-branding/best-sale" 
 
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Branding for Industrial Companies",
  description: "Brand identity built for industrial companies: logos, messaging and visual systems that build trust with serious B2B buyers. Discuss your branding with us.",
};



export default function loacl() {
  return (
    <div className="b2b-branding">
        <Allinone
            tag="B2B Branding"
            titlePrefix="Brand Identity Built for Industrial Companies."
             titleHighlight=" "
            description="We create brand identities for manufacturers, exporters, and B2B industrial companies that communicate capability, credibility, and seriousness — to buyers, partners, and procurement teams who make decisions based on trust."
            buttons={[
                { text: "Discuss Your Branding", link: "/contact-us" },
                { text: "See Brand Work", link: "/work" },
            ]}
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "B2B", label: "Industrial Branding Only" },
                { value: "100%", label: "Owned by You" },
                { value: "∞", label: "Formats Delivered" },
            ]}
        />        
        <Allinonemarque />
        {/* <DifferExper /> */}
        <Bestsale />  
         <div className="b2b-branding-inere">
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
                title="Your Brand Is the First Thing a Buyer Judges You By."
                description="A credible, professional brand identity isn't a luxury for industrial companies — it's a prerequisite for being taken seriously by international buyers. Let's build yours properly."
                buttonText="Discuss Your Branding Project"
                buttonLink="/contact-us"
                footerText="Free Consultation · No Obligation"
                />
         </div>
    </div>
  );
}
