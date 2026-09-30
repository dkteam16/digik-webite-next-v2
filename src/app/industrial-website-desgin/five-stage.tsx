import Image from "next/image";

const stages = [
  {
    id: 1,
    title: "Discovery",
    description: "We audit your current site, study your competitors, and map your ideal buyer's search behaviour.",
    icon: "/about/pri1.png",
  },
  {
    id: 2,
    title: "Strategy",
    description: "We design the sitemap, keyword map, and page structure — every page has a purpose.",
    icon: "/about/pri2.png",
  },
  {
    id: 3,
    title: "Design",
    description: "Custom visual design aligned with your brand, industrial aesthetic, and buyer expectations.",
    icon: "/about/pri3.png",
  },
  {
    id: 4,
    title: "Build",
    description: "Coded for speed, SEO, and conversion — not assembled from a page builder template.",
    icon: "/about/pri4.png",
  },
  {
    id: 5,
    title: "Launch & Train",
    description: "We launch, test, and train your team on managing the website independently.",
    icon: "/about/pri4.png",
  },
];

export default function Fivestage() {
  return (
    <div className="five-stagee bg-white">
      <div className="mv-section-iner">
        <div className="five-stagee-top">
          <div className="five-stagee-top-iner">
            <p className="text-[#F4A31D]">Our Process</p>
            <h2>
              From Brief <br />
              to <span className="text-[#F4A31D]">Live in 5 Stages</span>
            </h2>
          </div>
          <Image
            src="/google.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className="iso"
            priority
          />
        </div>

        <ul>
          {stages.map((stage) => (
            <li key={stage.id}>
              <Image
                src={stage.icon}
                alt={stage.title}
                 width={0}
                 height={0}
                 sizes="100vw" 
                className="w-10 h-10 object-contain"
              />
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}