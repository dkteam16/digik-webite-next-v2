"use client";

 

/**
 * CapabilityCards
 * ----------------
 * Cards ek array (`cards`) se aate hain, `.map()` se loop hoke render hote hain.
 *
 * Naya card add karna ho:
 *   -> `cards` array me niche ek naya object add kar do (title + items).
 *      Wo automatically last card ke NICHE (ya grid me next slot) render ho jayega.
 *
 * Ek card ke andar items bhi ek array hai — jitne chaho add karo, sab loop se
 * bullet list me render ho jayenge.
 */

type Card = {
  title: string;
  items: string[];
};

// 👇 Yahi array edit karte raho — naya card ya naya item add karo, list khud badh jayegi
const cards: Card[] = [
  {
    title: "Services Delivered",
    items: [
      "Brand positioning strategy",
      "Competitive analysis",
      "Website architecture and sitemap",
      "Homepage design and build",
      "CNC and foundry service pages",
      "30-keyword SEO strategy",
      "4 long-form SEO blogs",
      "International buyer-ready copywriting",
    ],
  },
  {
    title: "Capability Covered",
    items: [
      "CNC precision machining",
      "Build-to-print components",
      "Iron casting 50-2000kg",
      "OEM assemblies",
    ],
  },

  // 👇 Example: naya card aise add karo
  // {
  //   title: "The Result",
  //   items: ["Point one", "Point two"],
  // },
];

export default function CapabilityCards() {
  return (
    <div className="capability-cards-maoin">
            <div className="capability-cards">
            {cards.map((card, index) => (
                <div key={index} className="capability-card">
                <div className="capability-card-header">
                    <h3 className="capability-card-title">{card.title}</h3>
                </div>

                <ul className="capability-card-list">
                    {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="capability-card-item"> 
                        {item} 
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
    </div>
  );
}
