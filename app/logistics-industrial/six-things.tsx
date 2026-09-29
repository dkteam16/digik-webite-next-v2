import Indusgrow from "../common-components/all-indus-ul-li"
 
export default function Indus() {
  return (  
            <Indusgrow
            tag="Why Digital Kangaroos"
            title="We Understand B2B. We Understand Industrial. We Understand India."
            description="We're not a generalist agency that accidentally does B2B work. We are exclusively focused on Indian manufacturers, exporters, and industrial service companies — which means we understand your buyers, your sales cycle, and what it actually takes to generate a qualified B2B lead from a website."
            items={[
                {
                icon: "/Auto.png",
                title: "Industrial SEO Expertise",
                description: "We know what procurement managers search for — not just what has high search volume.",
                },
                {
                icon: "/Cycle.png",
                title: "Long Sales Cycle Design",
                description: "B2B buyers research for weeks. We design websites that nurture and convert across that journey.",
                },{
                icon: "/Hosiery.png",
                title: "Sector Knowledge",
                description: "We speak the language of manufacturing — tolerances, MOQs, certifications, lead times — fluently.",
                },{
                icon: "/Fasteners.png",
                title: "Measurable Results",
                description: "Every project tracked: RFQs generated, keyword rankings, organic traffic, and conversion rate.",
                } 
            ]}
            />
  );
}
 