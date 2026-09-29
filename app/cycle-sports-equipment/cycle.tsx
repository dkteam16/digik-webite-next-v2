import Indusgrow from "../common-components/all-indus-ul-li"
 
export default function Indus() {
  return (  
        <div className="cycleContent   ">
            <Indusgrow
            tag="Content & SEO Strategy"
            title="How We Get You Found by Global Cycle Buyers"
            description=" "
            items={[
                {
                icon: "/one.png",
                title: "Fasteners & Hardware",
                description: `Invisible to international buyers searching "cycle parts manufacturer India"`,
                },
                {
                icon: "/two.png",
                title: "Product Page SEO",
                description: "No product catalogue showing your full range of cycle components",
                },{
                icon: "/three.png",
                title: "International SEO",
                description: "Website not designed to earn trust from US, EU, or African importers",
                },{
                icon: "/four.png",
                title: "Export-Focused Content",
                description: "Dependent on trade fairs like Eurobike for all international enquiries",
                } 
            ]}
            />
            </div>
  );
}
 