import Indusgrow from "../common-components/all-indus-ul-li"
 
export default function Indus() {
  return ( 
      <div className="buildwebsite"> 
            <Indusgrow
            tag="Content & SEO Strategy"
            title="How We Build Websites That Actually Work for Manufacturers"
            description=""
            items={[
                {
                icon: "/Auto.png",
                title: "Buyer Keyword Research",
                description: "We identify exactly how European, American, and African cycle importers search for Indian suppliers.",
                },
                {
                icon: "/Auto.png",
                title: "Product Page SEO",
                description: "Every product category gets its own optimised page — not just a generic products page.",
                },{
                icon: "/Auto.png",
                title: "International SEO",
                description: "Hreflang tags, country-targeting, and region-specific content to rank in your target export markets.",
                },{
                icon: "/Auto.png",
                title: "Export-Focused Content",
                description: "Blog content targeting cycle parts supplier India for export, OEM cycle manufacturer Ludhiana etc.",
                } 
            ]}
            />
      </div>
  );
}
 