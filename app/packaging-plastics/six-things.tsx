import Indusgrow from "../common-components/all-indus-ul-li"
 
export default function Indus() {
  return (  
            <Indusgrow
            tag="What We Build"
            title="Product Catalogue Websites That Win Packaging Buyers"
            description=""
            items={[
                {
                icon: "/Auto.png",
                title: "Category-Wise Product Catalogue",
                description: "Individual pages per packaging type with specs, material, print options, and ordering details",
                },
                {
                icon: "/Cycle.png",
                title: "Custom Order Request Forms",
                description: "Structured RFQ forms capturing dimensions, material, print, quantity, and delivery timeline",
                },{
                icon: "/Hosiery.png",
                title: "Packaging SEO Strategy",
                description: "Rank for FIBC bag manufacturer India, corrugated box supplier, flexible packaging exporter and more",
                },{
                icon: "/Fasteners.png",
                title: "Certifications & Compliance",
                description: "FDA food-grade, UN-certified, ISO, BRC — certifications prominently displayed and downloadable",
                },{
                icon: "/Steel.png",
                title: "Sustainability Page",
                description: "Recycled content, biodegradable options, and eco-credentials — key differentiators for EU buyers",
                },{
                icon: "/Chemicals.png",
                title: "MSME & Export-Ready Design",
                description: "Professional websites for small and mid-size packaging manufacturers competing against large players",
                }, 
            ]}
            />
  );
}
 