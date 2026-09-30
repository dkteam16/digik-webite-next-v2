import First from "../our-work/our-work" 
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Mywork  from "@/app/our-work/my-work"
import Image from "next/image";
import CommonCTA from "../common-components/last-industries"
export default function loacl() {
  return (
    <div className="our-work all-indus-pagemian">    
       <First />   
        <Allinonemarque />  
       <Mywork />
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
                        title="Ready To Be Next?"
                        description="If you're a manufacturer, exporter, or B2B industrial company — we should talk."
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
