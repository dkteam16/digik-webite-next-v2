import Indusgrow from "../common-components/all-indus-ul-li"

export default function Indus() {
  return (
    <Indusgrow
      tag="The Problem"
      title="Auto Component Buyers Judge You by Your Website First"
      description={`In 2024, procurement managers at OEMs and tier-1 automotive companies conduct supplier discovery online before a single call is made. They search for "auto parts manufacturer India", "precision component supplier Punjab", or specific part categories — and they shortlist based entirely on digital credibility. 
 <br>
If your website looks like it was built in 2012, has no product catalogue, no certifications page, and no clear RFQ form — they move to the next supplier. Even if your quality is better.`}
      items={[
        {
          icon: "/one.png",
          title: " ",
          description: "No structured product catalogue with part numbers and specifications",
        },
        {
          icon: "/two.png",
          title: " ",
          description: `Not ranking on Google for "auto parts manufacturer India" or your target keywords`,
        },
        {
          icon: "/three.png",
          title: " ",
          description: "Website gives no confidence to international OEM buyers",
        },
        {
          icon: "/four.png",
          title: " ",
          description: "Over-dependent on IndiaMart, trade fairs, and word-of-mouth",
        },
       
      ]}
    />
  );
}