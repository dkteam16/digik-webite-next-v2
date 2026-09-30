const stages = [
  { id: 1, description: "Steel Fabrication Companies" },
  { id: 2, description: "Auto Parts Manufacturers" },
  { id: 3, description: "Casting & Machining Companies" },
  { id: 4, description: "Fasteners & Hardware Exporters" },
  { id: 5, description: "Hosiery & Textile Manufacturers" },
  { id: 6, description: "Packaging Manufacturers" },
  { id: 7, description: "Machine Tools Suppliers" },
  { id: 8, description: "Chemical Manufacturers" },
  { id: 9, description: "Pharma Companies" },
  { id: 10, description: "Cycle Manufacturers Ludhiana" },
  { id: 11, description: "Engineering Firms" },
  { id: 12, description: "Industrial Equipment Suppliers" },
  { id: 13, description: "MSME Manufacturers India" },
  { id: 14, description: "Export Companies India" },
];

export default function SectorDesign() {
  return (
    <>
    <div className="sector-design">
      <div className="mv-section-iner">
        <div className="sector-design-top">
          <p className="text-[#F4A31D]">Sectors We Design For</p>
          <h2>
            We've Built Websites for 
            to <span className="text-[#F4A31D]">Every<br /> Manufacturing Sector</span>
          </h2>
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