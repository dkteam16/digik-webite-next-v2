 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-second"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Againt from "@/app/website-redesign-for-industry/againt-you" 
import Best from "@/app/website-redesign-for-industry/bestsale" 
 
import Image from "next/image";



export default function loacl() {
  return (
    <div className="website-redesign">  
        <Allinone 
            tag="Website Redesign"
            titlePrefix="Your Outdated Website Is"
             titleHighlight="Costing You Leads Daily." 
             titlePrefixtwo=""
            description="We rebuild manufacturing and industrial websites from the ground up — faster, more credible, fully SEO-optimised, and designed to convert buyers — without disrupting your existing business or losing your current search rankings."
            buttons={[
                { text: "Audit My Current Site", link: "/contact-us" },
                { text: "See Redesigns", link: "/contact-us" },
            ]}
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "90+", label: "GOOGLE BEST PRACTICES SCORE" },
                { value: "0%", label: "SEO Rankings Lost" },
                { value: "6-8wk", label: "Avg. Redesign Timeline" },
            ]}
        />        
        <Allinonemarque /> 
        <Againt />    
        <Best /> 
       <div className="b2b-branding-inere">
             {/* <Image
                 src="/google.png"
                 alt="logo"
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="w-full h-auto iso"
                 priority
               /> */}
                    <CommonCTA
                title="Find Out Exactly What Your Website Is Costing You."
                description="We'll audit your current website and tell you precisely what's holding it back, what it's costing you in lost leads, and what a redesign would achieve. Free, detailed, in 48 hours."
                buttonText="Get Free Website Audit"
                buttonLink="/contact"
                footerText="Free · 48hr Delivery · No Obligation"
                />
         </div>  
    </div>
  );
}
