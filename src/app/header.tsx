"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./globals.css";
import SearchModal from "@/app/common-components/SearchModal";

interface MenuItem {
  name: string;
  slug: string;
  desc: string;
}

interface MenuData {
  label: string;
  href: string;
  items: MenuItem[];
}

interface NavLink {
  label: string;
  href: string;
  menuKey?: keyof typeof menus;
}

// About: abhi khali. Jab submenu dalna ho tab yahan items add kar dena,
// hover menu apne aap kaam karne lagega.
const about: MenuItem[] = [];

const services: MenuItem[] = [
  {
    name: "Industrial Website Design",
    slug: "industrial-website-desgin",
    desc: "Fast, secure and conversion-focused websites built specifically for industrial and manufacturing businesses.",
  },
  {
    name: "Local & Google Business SEO",
    slug: "local-google-business-seo",
    desc: "Rank higher in local searches and Google Maps so nearby buyers find your business first.",
  },
  {
    name: "Export & International SEO",
    slug: "export-international-seo",
    desc: "Reach global buyers with international SEO, multilingual content and export-focused search strategy.",
  },
  {
    name: "Product Catalogue Websites",
    slug: "product-catalogue-websites",
    desc: "Showcase your full product range with searchable, easy-to-manage digital catalogues and enquiry forms.",
  },
  {
    name: "Website Redesign For Industry",
    slug: "website-redesign-for-industry",
    desc: "Modernise your outdated website with a fresh design, better speed and a stronger user experience.",
  },
  {
    name: "B2B Branding",
    slug: "b2b-branding",
    desc: "Build a credible, consistent brand identity that earns trust with business buyers and partners.",
  },
  {
    name: "Mobile Apps Development",
    slug: "mobile-app-development",
    desc: "From idea to launch, we design and build smooth Android and iOS apps your users will love.",
  },
  {
    name: "Corporate Photography & Videography",
    slug: "corporate-photography-videography-services",
    desc: "Professional photo and video production that tells your brand story with a polished, corporate look.",
  },
];

const industries: MenuItem[] = [
  {
    name: "Auto Parts & Engineering",
    slug: "auto-parts-engineering",
    desc: "Digital solutions for auto parts makers and engineering firms to showcase precision and win OEM buyers.",
  },
  {
    name: "Cycle & Sports Equipment",
    slug: "cycle-sports-equipment",
    desc: "Websites and marketing that help cycle and sports equipment brands reach dealers and customers worldwide.",
  },
  {
    name: "Hosiery & Textile Exporters",
    slug: "hosiery-textile-exporters",
    desc: "Export-ready websites and SEO for hosiery and textile manufacturers looking for international buyers.",
  },
  {
    name: "Fasteners & Hardware",
    slug: "fasteners-hardware",
    desc: "Catalogue-driven websites that make it easy for buyers to browse, compare and enquire about hardware.",
  },
  {
    name: "Steel & Metal Fabrication",
    slug: "steel-metal-fabrication",
    desc: "Strong online presence for fabricators, highlighting capabilities, certifications and past projects.",
  },
  {
    name: "Chemical & Pharmaceutical Manufacturers",
    slug: "chemical-pharmaceutical-manufacturers",
    desc: "Compliant, trustworthy digital presence for chemical and pharma manufacturers and exporters.",
  },
  {
    name: "Packaging & Plastics",
    slug: "packaging-plastics",
    desc: "Showcase packaging and plastic products with clear specs, galleries and quick quote requests.",
  },
  {
    name: "Machine Tools & Precision",
    slug: "machine-tools-precision",
    desc: "Technical, detail-rich websites that present machine tools and precision components professionally.",
  },
  {
    name: "Logistics & Industrial",
    slug: "logistics-industrial",
    desc: "Platforms and websites that streamline operations and build trust for logistics and industrial companies.",
  },
];

const menus = {
  about: { label: "ABOUT", href: "/about-us", items: about },
  services: { label: "SERVICES", href: "/all-services", items: services },
  industries: {
    label: "INDUSTRIES",
    href: "/all-industries-page",
    items: industries,
  },
} satisfies Record<string, MenuData>;

const leftLinks: NavLink[] = [
  { label: "ABOUT", href: "/about-us", menuKey: "about" },
  { label: "SERVICES", href: "/all-services", menuKey: "services" },
  { label: "INDUSTRIES", href: "/all-industries-page", menuKey: "industries" },
  { label: "CONTACT", href: "/contact-us" },
];

const rightLinks: NavLink[] = [
  { label: "WORK", href: "/work" },
  { label: "CAREERS", href: "/careers" },
  { label: "BLOG", href: "/blogs" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [openMenu, setOpenMenu] = useState<keyof typeof menus | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  const handleMenuEnter = (key: keyof typeof menus) => {
    // Items khali hain (jaise About) to mega menu nahi khulega
    if (menus[key].items.length === 0) {
      setOpenMenu(null);
      return;
    }
    setOpenMenu(key);
    setActiveIndex(0);
  };

  const activeMenu: MenuData | null = openMenu ? menus[openMenu] : null;
  const current: MenuItem | null = activeMenu
    ? activeMenu.items[activeIndex]
    : null;

  return (
    <>
      <header
        onMouseLeave={() => setOpenMenu(null)}
        className={`header ${isHome ? "headerHome" : "headerSolid"}`}
      >
        <div className="inner">
          {/* Left nav */}
          <nav className="nav navLeft">
            {leftLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="navLink"
                onMouseEnter={() =>
                  l.menuKey ? handleMenuEnter(l.menuKey) : setOpenMenu(null)
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Center logo: home par nahi dikhega */}
          <div className="logoWrap">
            {!isHome && (
              <Link href="/">
                <Image
                  src="/homelogo.png"
                  alt="Digital Kangaroos"
                  width={208}
                  height={36}
                  priority
                />
              </Link>
            )}
          </div>

          {/* Right nav */}
          <nav className="nav navRight">
            {rightLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="navLink"
                onMouseEnter={() => setOpenMenu(null)}
              >
                {l.label}
              </Link>
            ))}

            {/* SEARCH: link nahi, button — click par modal khulta hai */}
            <button
              type="button"
              className="navLink navSearchBtn"
              onMouseEnter={() => setOpenMenu(null)}
              onClick={() => {
                setOpenMenu(null);
                setSearchOpen(true);
              }}
            >
              SEARCH
            </button>
          </nav>
        </div>

        {/* Mega menu */}
        <div className={`megaMenu ${activeMenu ? "megaMenuOpen" : ""}`}>
          {activeMenu && current && (
            <div className="megaMenuInner">
              {/* Left: items list */}
              <ul className="itemList">
                {activeMenu.items.map((item, i) => (
                  <li key={item.slug} onMouseEnter={() => setActiveIndex(i)}>
                    <Link
                      href={`/${item.slug}`}
                      onClick={() => setOpenMenu(null)}
                      className={`itemLink ${
                        activeIndex === i ? "itemLinkActive" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right: description */}
              <div className="detail">
                <p className="detailDesc">{current.desc}</p>

                <Link
                  href="/contact-us"
                  onClick={() => setOpenMenu(null)}
                  className="ctaLink"
                >
                  Have a project? Let’s talk
                  <span className="ctaIcon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Header ke bahar: backdrop-filter ke andar fixed position toot jati hai */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
