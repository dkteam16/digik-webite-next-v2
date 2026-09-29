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
          description: `Invisible to international buyers searching "cycle parts manufacturer India"`,
        },
        {
          icon: "/two.png",
          title: " ",
          description: `No product catalogue showing your full range of cycle components`,
        },
        {
          icon: "/three.png",
          title: " ",
          description: "Website not designed to earn trust from US, EU, or African importers",
        },
        {
          icon: "/four.png",
          title: " ",
          description: "Dependent on trade fairs like Eurobike for all international enquiries",
        },
       
      ]}
    />
    <div className="mv-section-iner sdfsdfds">
      <div className="blobal-last">
            <p className="text-[#F4A31D]">"Before Digital Kangaroos, we got zero direct enquiries from international buyers online. Within four months of the new website going live, we had three serious European importers contact us directly through our website."</p>
            <p className="text-white">— Cycle Parts Manufacturer, Ludhiana Industrial Area</p>
      </div>
    </div>
    </div>
  );
}