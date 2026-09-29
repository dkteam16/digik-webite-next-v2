const stages = [
  { id: 1, description: "Auto parts manufacturer India" },
  { id: 2, description: "auto component supplier Punjab" },
  { id: 3, description: "precision auto parts exporter India" },
  { id: 4, description: "OEM auto component manufacturer" },
  { id: 5, description: "forged auto parts supplier" },
  { id: 6, description: "casting manufacturer India export" },
  { id: 7, description: "website for auto parts manufacturer" },
  { id: 8, description: "B2B web design for auto manufacturers" },
  { id: 9, description: "industrial website design company" },
  { id: 10, description: "engineering company website India" }, 
];

export default function SectorDesign() {
  return (
    <>
    <div className="sector-design">
      <div className="mv-section-iner">
        <div className="sector-design-top">
          <p className="text-[#F4A31D]">SEO Strategy</p>
          <h2>
           Keywords We Rank Your Auto Parts Business For
          </h2>
          <p>Our B2B SEO strategy targets the exact terms automotive procurement managers type when searching for new suppliers.</p>
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