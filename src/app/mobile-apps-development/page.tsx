 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-second"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Mobilespp from "@/app/mobile-apps-development/mobile-app" 
 
import Image from "next/image";



export default function loacl() {
  return (
    <div className="Mobile-Apps">
        <Allinone
            tag="Mobile Apps"
            titlePrefix="Mobile Apps Built for"
             titleHighlight="Industrial Businesses. "
            description="Custom iOS and Android applications for manufacturing and B2B industrial companies — from dealer portals and order management systems to customer-facing product catalogues and field sales apps."
            buttons={[
                { text: "Discuss Your App", link: "/contact-us" },
                { text: "See Our Work", link: "/our-work" },
            ]}
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "iOS+", label: "iOS & Android Both" },
                { value: "API+", label: "ERP & System Integration" },
                { value: "∞", label: "Custom Functionality" },
            ]}
        />        
        <Allinonemarque />
        {/* <DifferExper /> */}
        <Mobilespp />   
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
                title="Build the App Your Dealers and Buyers Have Been Asking For."
                description="Most industrial companies are still running their dealer and customer interactions over WhatsApp and phone calls. A properly built app changes that — and gives you a competitive advantage your competitors don't have."
                buttonText="Discuss Your App Project"
                buttonLink="/contact-us"
                footerText="Free Consultation · No Obligation"
                />
         </div>
    </div>
  );
}
