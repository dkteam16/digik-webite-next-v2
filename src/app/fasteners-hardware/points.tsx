import Indusgrow from "../common-components/all-indus-ul-li"
import Image from "next/image";

export default function Indus() {
  return (
  <div className="global-mian-ccycle">
     
    <Indusgrow
      tag="The Opportunity"
      title="Global Buyers Are Searching for You. They Just Can't Find You."
      description={`Cycle importers in Europe, the US, Africa, and the Middle East actively search Google for Indian cycle parts suppliers and sports equipment manufacturers. They want to reduce dependence on Chinese manufacturers and source from India — but they find your competitors, not you, because your competitors have better websites and SEO. 
      <br><br>
      The good news: the Ludhiana cycle cluster is relatively uncrowded online. If we build your website and SEO right now, you can rank on page 1 for high-value international buyer search terms before the window closes.`}
        
         
      
      items={[
        {
          icon: "/one.png",
          title: " ",
          description: `No indexed product pages for specific fastener types, grades, or standards — so Google can't rank you for specific search terms`,
        },
        {
          icon: "/two.png",
          title: " ",
          description: `International buyers can't find technical specs, certifications, or coating options without calling you`,
        },
        {
          icon: "/three.png",
          title: " ",
          description: `Not appearing on Google when buyers search "M8 hex bolt manufacturer India" or "stainless steel fastener exporter"`,
        },
        {
          icon: "/four.png",
          title: " ",
          description: "No RFQ system — buyers who can't reach you by phone move to the next supplier immediately",
        },
       
      ]}
    />
    
    </div>
  );
}