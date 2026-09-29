 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-second"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import Bestsale from "@/app/product-catalogue-websites/best-sale"
 
import Image from "next/image";



export default function loacl() {
  return (
    <div className="product-cata-web">
        <Allinone
            tag="Product Catalogue"
            titlePrefix="Searchable Product Catalogues That "
            titleHighlight="Generate RFQs."
            description="We build structured, searchable product catalogue websites for manufacturers and exporters — so buyers can find the exact product they need, read the technical specs, and submit an RFQ in under 3 minutes."
            buttons={[
                { text: "Discuss Your Catalogue", link: "/contact-us" },
                { text: "See Examples", link: "/contact-us" },
            ]}
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "∞", label: "Products Supported" },
                { value: "3min", label: "Avg. Buyer to RFQ Time" },
                { value: "SEO+", label: "Every Page Optimised" },
            ]}
        />        
        <Allinonemarque />
        {/* <DifferExper /> */}
        <Bestsale />  
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
                title="Turn Your Product List Into a Lead Generation Machine."
                description="A properly built product catalogue website does what your sales team does — but 24 hours a day, in every time zone, for every buyer who finds you on Google."
                buttonText="Discuss Your Catalogue Project"
                buttonLink="/contact"
                footerText="Free Consultation · No Obligation"
                />
         </div>
    </div>
  );
}
