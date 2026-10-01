 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-second"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Doit from "@/app/corporate-photography-videography/do-it" 
 
import Image from "next/image";



export default function loacl() {
  return (
    <div className="corporate-photo"> 
        <Allinone
            tag="Visual Content"
            titlePrefix="Your Factory Deserves to Be"
             titleHighlight="Seen Properly."
            description="Professional factory photography, product shoots, and brand videos for manufacturing and industrial companies — the visual content that makes international buyers trust what they see on your website before they ever visit in person. Discuss a Shoot"
            buttons={[
                { text: "Discuss a Shoot", link: "/contact-us" },
                { text: "See Our Work", link: "/our-work" },
            ]}
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "HD+", label: "Professional Equipment" },
                { value: "1day", label: "Typical Factory Shoot" },
                { value: "∞", label: "Usage Rights: Yours" },
            ]}
        />        
        <Allinonemarque />
        {/* <DifferExper /> */}
        <Doit />   
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
                title="Show Your Buyers What You're Really Capable Of."
                description="One day of professional photography produces visual content that works for your business for years. It's the highest ROI content investment most manufacturing companies never make — until they see what it does for their enquiry rate."
                buttonText="Book a Factory Shoot"
                buttonLink="/contact-us"
                footerText="Free Consultation · Pan-India Available"
                />
         </div>
    </div>
  );
}
