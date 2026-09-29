import Indusgrow from "../common-components/all-indus-ul-li"
 
export default function Indus() {
  return (  
            <Indusgrow
            tag="Industries We Serve"
            title="Your Industry. Our Expertise. Your Growth."
            description="We don't build generic websites. Every industry page, product catalogue, and SEO strategy is tailored to how your buyers actually search and evaluate suppliers online."
            items={[
                {
                icon: "/Auto.png",
                title: "Auto Parts & Engineering",
                description: "Websites for auto component manufacturers, precision parts suppliers & OEM vendors across India",
                },
                {
                icon: "/Cycle.png",
                title: "Cycle & Sports Equipment",
                description: "Export-ready websites for cycle parts manufacturers, sports goods exporters & Ludhiana clusters",
                },{
                icon: "/Hosiery.png",
                title: "Hosiery & Textile Exporters",
                description: "Digital presence for knitwear, garment & textile exporters targeting US, EU and Gulf buyers",
                },{
                icon: "/Fasteners.png",
                title: "Fasteners & Hardware",
                description: "B2B websites for fastener manufacturers, nut-bolt exporters & industrial hardware suppliers",
                },{
                icon: "/Steel.png",
                title: "Steel & Metal Fabrication",
                description: "B2B websites for fastener manufacturers, nut-bolt exporters & industrial hardware suppliers",
                },{
                icon: "/Chemicals.png",
                title: "Chemicals & Pharma",
                description: "Compliant, trust-building websites for chemical manufacturers and pharmaceutical exporters",
                },{
                icon: "/Packaging.png",
                title: "Packaging & Plastics",
                description: "Product catalogue websites for packaging manufacturers, plastic moulders & FIBC suppliers",
                },{
                icon: "/Machine.png",
                title: "Machine Tools & Precision",
                description: "Technical websites for CNC machine manufacturers, precision engineering firms & tooling exporters",
                },{
                icon: "/Machine.png",
                title: "Logistics/ Industrial Suppliers",
                description: "Digital platforms for industrial logistics providers, warehouse operators & B2B supply chain firms",
                },
            ]}
            />
  );
}
 