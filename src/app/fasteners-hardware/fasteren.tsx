const stages = [
  { id: 1, description: "fastener manufacturer India" },
  { id: 2, description: "nut bolt exporter India" },
  { id: 3, description: "hex bolt manufacturer Punjab" },
  { id: 4, description: "stainless steel fastener supplier" },
  { id: 5, description: "DIN 931 bolt manufacturer India" },
  { id: 6, description: "industrial fastener exporter" },
  { id: 7, description: "anchor bolt supplier India" },
  { id: 8, description: "wholesale nut bolt manufacturer" },
  { id: 9, description: "hardware supplier website India" },
  { id: 10, description: "B2B fastener website design" }, 
];
import Image from "next/image";

export default function SectorDesign() {
  return (
    <>
    <div className="sector-design">
      <div className="mv-section-iner">
        <div className="sector-design-top">
            <div className="sector-design-top-in">
                <p className="text-[#F4A31D]">SEO Keywords We Target</p>
                <h2>
                How Fastener Buyers Search — and How We Get You Found
                </h2>
            </div>
           <a href="http://cartpotato.com/" target="_blank" rel="noopener noreferrer" className="contents"><Image
                            src="/cartshop.png"
                            alt="logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto iso"
                            priority
                          /></a>
        </div>
        <ul>
          {stages.map((stage) => (
            <li key={stage.id}>
              <p>{stage.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
 
    </>
  );
}