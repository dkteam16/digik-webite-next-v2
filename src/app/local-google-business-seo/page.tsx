 
import Allinone from "../common-components/allinone"
import CommonCTA from "../common-components/last-second"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import DifferExper from "@/app/local-google-business-seo/differ-exper"
import SEOProgram from "@/app/local-google-business-seo/seo-program"
import Induskey from "@/app/local-google-business-seo/indus-key"



export default function loacl() {
  return (
    <div className="local-google-business">
        <Allinone
            tag="Industrial SEO"
            titlePrefix="SEO That Gets Your Factory"
            titleHighlight=" Found on Google."
            description="We build SEO strategies for manufacturers and B2B industrial companies that rank on Google for the terms your buyers actually search — generating consistent, qualified inbound enquiries every month."
            buttons={[
                { text: "get a free SEO audit", link: "/contact-us" },
                { text: "see case Studies", link: "/contact-us" },
            ]}
            backgroundImage="/about/startback.webp"
            rightImage="/about/iso.png"
            stats={[
                { value: "6MO", label: "Avg. Time to First Rankings" },
                { value: "3×", label: "Avg. Lead Volume Increase" },
                { value: "0₹", label: "Per Lead Once Ranked" },
            ]}
        />        
        <Allinonemarque />
        <DifferExper />
        <SEOProgram />
        <Induskey />

         <CommonCTA
      title="Stop Paying for Leads. Start Owning Them."
      description="IndiaMart leads stop the moment you stop paying. SEO-driven leads keep coming — and compound every month. Get your free SEO audit and see what's possible for your business."
      buttonText="Request Free SEO Audit"
      buttonLink="/contact"
      footerText="Free · Detailed · 48hr Delivery"
    />
    </div>
  );
}
