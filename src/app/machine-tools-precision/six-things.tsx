import Indusgrow from "../common-components/all-indus-ul-li"
 
export default function Indus() {
  return (  
            <Indusgrow
            tag="What We Build"
            title="Technical Websites That Make Precision Engineering Buyers Trust You"
            description=""
            items={[
                {
                icon: "/Auto.png",
                title: "Technical Product Pages",
                description: "Specifications, tolerances, travel, spindle speed, power — full technical data per machine model.",
                },
                {
                icon: "/Cycle.png",
                title: "CAD/Drawing Downloads",
                description: "Downloadable machine drawings, installation guides, and technical specifications per product.",
                },{
                icon: "/Hosiery.png",
                title: "Video Demo Integration",
                description: "Machine demo videos, precision testing footage, and factory tour videos embedded professionally.",
                },{
                icon: "/Fasteners.png",
                title: "After-Sales & Service Pages",
                description: "Spare parts availability, service network, and warranty terms — critical for large machine buyers.",
                },{
                icon: "/Steel.png",
                title: "Comparison Pages",
                description: "How your machines compare on specs vs alternatives — the content serious buyers research before buying.",
                },{
                icon: "/Chemicals.png",
                title: "Export Market SEO",
                description: "Rank in Germany, USA, Thailand, Mexico for CNC machine manufacturer India and precision tooling terms.",
                }, 
            ]}
            />
  );
}
 