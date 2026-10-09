import Link from "next/link";
import WebMobile from "./web-seo-mobile";

type Service = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  img: string;
  href: string;
};

const servicesData: Service[] = [
  {
    id: 1,
    title: "INDUSTRIAL WEBSITE DESIGN",
    description:
      "High-performance websites built specifically for manufacturers, exporters, and B2B engineering companies. Credible, fast, mobile-first, and designed to convert international buyers into enquiries.",
    tags: ["Manufacturing Co Sites", "B2B Web Design", "Export-Ready", "Engineering Firms"],
    img: "/allservice/core1.png",
    href: "/industrial-website-desgin",
  },
  {
    id: 2,
    title: "PRODUCT CATALOGUE WEBSITES",
    description:
      "Structured, searchable product catalogue websites that let buyers find the exact component or product they need – with technical specs, material options, and a clear path to an RFQ submission.",
    tags: ["Product Pages", "Spec Sheets", "RFQ Forms", "Category Architecture"],
    img: "/allservice/core4.png",
    href: "/product-catalogue-websites",
  },
  {
    id: 3,
    title: "WEBSITE REDESIGN FOR INDUSTRY",
    description:
      "Your existing website is costing you leads every day it remains live. We rebuild it from the ground up – faster, more credible, fully optimised – without disrupting your existing business operations.",
    tags: ["Full Redesign", "Content Migration", "SEO Preservation", "Speed Optimisation"],
    img: "/allservice/core3.png",
    href: "/website-redesign-for-industry",
  },
  {
    id: 4,
    title: "Mobile Apps Development",
    description:
      "Custom mobile apps built for industrial businesses — connecting dealers, customers, sales teams, and internal operations through smarter digital workflows.",
    tags: ["Dealer Portals ", "Order Management", "Product Catalogues", "ERP Integration"],
    img: "/allservice/core7.png",
    href: "/mobile-app-development",
  },
  {
    id: 5,
    title: "B2B CONTENT & SEO GROWTH",
    description:
      "Long-form technical content that ranks on Google, educates your buyers, and positions your company as the expert in your niche – consistently generating inbound enquiries month after month.",
    tags: ["Technical Blogging", "Keyword Strategy", "Link Building", "Content Calendar"],
    img: "/allservice/core10.png",
    href: "/export-international-seo",
  },
  {
    id: 6,
    title: "B2B BRANDING",
    description:
      "Your brand is more than a logo. We create a visual identity that screams industrial expertise and reliability, ensuring you stand out in a crowded global marketplace.",
    tags: ["Technical Blogging", "Keyword Strategy", "Link Building", "Content Calendar"],
    img: "/allservice/core6.png",
    href: "/b2b-branding",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white">
      <section className="web-seo">
        {/* --- Heading Section --- */}
        <div className="text-center web-seo-center">
          <p className="uppercase font-[600]">WHAT WE DO</p>
          <h2 className="text-center">
            Web &amp; SEO Services <span className="text-[#f5a623]">Built For</span> <br /> B2B Companies
          </h2>
          <p className="uppercase font-[600]">
            Every service we offer is designed around one goal: making your business{" "}
            <br className="hidden md:block" />
            easier to find, easier to trust, and easier to buy from.
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="desktop-view">
          <div className="grid web-seo-bottom grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <Link
                href={service.href}
                key={service.id}
                className="group flex flex-col bg-[#F5F5F5] p-10 rounded-2xl transition-all duration-300 border-t-[6px] border-t-transparent hover:border-t-[#f5a623] cursor-pointer no-underline text-inherit"
              >
                {/* Image Icon */}
                <div className="w-12 h-12 web-seo-bottom-img flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="uppercase">{service.title}</h3>

                {/* Description */}
                <p>{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-x-3 gap-y-2 web-seo-bottom-last">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[#F4A31D] rounded capitalize font-[600] tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mobile-view">
          <WebMobile />
        </div>

        {/* --- View All Button --- */}
        <div className="text-center button-ourlatest">
          <Link href="/all-services" className="btn-group-link">
            <div className="btn-main-container">
              <div className="btn-inner-border">
                <span className="btn-arrow-left font-bold">&gt;&gt;</span>
                <span className="btn-text font-bold uppercase tracking-tight">view all</span>
                <span className="btn-arrow-right font-bold">&gt;&gt;</span>
              </div>
              <div className="btn-bg-fill"></div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;