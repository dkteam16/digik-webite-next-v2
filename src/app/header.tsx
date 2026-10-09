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

/* =========================
   ABOUT MENU
========================= */

const about: MenuItem[] = [
  {
    name: "Blog",
    slug: "blogs",
    desc: "Insights on conversion-driven websites, CRO, SEO, AI-ready digital experiences, and growth for modern B2B businesses.  ",
  },
  {
    name: "Company",
    slug: "about-us",
    desc: "A specialist web & SEO agency building conversion-driven digital experiences for manufacturers, exporters, and B2B companies.",
  },
  {
    name: "Media",
    slug: "media",  
    desc: "Our latest media features, insights, achievements, and perspectives on building high-performing, conversion-driven digital experiences.",
  },
];

/* =========================
   SERVICES MENU
========================= */

const services: MenuItem[] = [
  {
    name: "All Services",
    slug: "all-services",
    desc: "Explore our conversion-driven website, SEO, branding, content, and digital solutions built to help B2B businesses grow.",
  },
  {
    name: "B2B Branding",
    slug: "b2b-branding",
    desc: "Build a credible, consistent brand identity that positions your business strongly with buyers, partners, and decision-makers.",
  },
  {
    name: "Corporate Photography & Videography",
    slug: "corporate-photography-videography-services",
    desc: "Authentic photography and video that showcase your people, products, facilities, and capabilities with impact.",
  },
  {
    name: "Export & International SEO",
    slug: "export-international-seo",
    desc: "Get your manufacturing business discovered by international buyers searching for your products and capabilities.",
  },
  {
    name: "Industrial Website Design",
    slug: "industrial-website-desgin",
    desc: "Conversion-driven websites built to showcase your capabilities, build trust, and generate qualified industrial enquiries.",
  },
  {
    name: "Local & Google Business SEO",
    slug: "local-google-business-seo",
    desc: "Improve your local visibility, strengthen your Google Business presence, and turn nearby searches into genuine enquiries",
  },
  {
    name: "Product Catalogue Websites",
    slug: "product-catalogue-websites",
    desc: "Structured, conversion-focused product websites that make complex industrial catalogues easier to explore and enquire about",
  },
  {
    name: "Website Redesign For Industry",
    slug: "website-redesign-for-industry",
    desc: "Transform an outdated industrial website into a modern, conversion-driven digital experience built for growth.",
  },
];

/* =========================
   INDUSTRIES MENU
========================= */

const industries: MenuItem[] = [
  {
    name: "All Industries",
    slug: "all-industries-page",
    desc: "Explore our specialised digital solutions for manufacturers, exporters, and B2B businesses across diverse industrial sectors.",
  },
  {
    name: "Auto Parts & Engineering",
    slug: "auto-parts-engineering",
    desc: "Conversion-driven websites and SEO built to showcase engineering capabilities and generate qualified B2B enquiries.",
  },
  {
    name: "Cycle & Sports Equipment",
    slug: "cycle-sports-equipment",
    desc: "Digital experiences that showcase your products, strengthen your brand, and connect you with buyers worldwide.",
  },
  {
    name: "Hosiery & Textile Exporters",
    slug: "hosiery-textile-exporters",
    desc: "Export-focused websites and SEO that help textile businesses get discovered by international buyers and generate enquiries.",
  },
  {
    name: "Fasteners & Hardware",
    slug: "fasteners-hardware",
    desc: "High-performing websites designed to present your product range clearly and turn industrial searches into enquiries.",
  },
  {
    name: "Steel & Metal Fabrication",
    slug: "steel-metal-fabrication",
    desc: "Conversion-focused digital solutions that showcase your capabilities, projects, and expertise to serious buyers.",
  },
  {
    name: "Chemical & Pharmaceutical Manufacturers",
    slug: "chemical-pharmaceutical-manufacturers",
    desc: "Credible, SEO-ready websites that communicate complex product offerings clearly and build trust with B2B buyers.",
  },
  {
    name: "Packaging & Plastics",
    slug: "packaging-plastics",
    desc: "Conversion-driven websites that present your capabilities and product range while helping you attract qualified enquiries.",
  },
  {
    name: "Machine Tools & Precision",
    slug: "machine-tools-precision",
    desc: "Precision-focused digital experiences that showcase your technology, capabilities, and manufacturing expertise.",
  },
  {
    name: "Logistics & Industrial",
    slug: "logistics-industrial",
    desc: "Strategic websites and SEO designed to build credibility, improve visibility, and generate B2B business enquiries.",
  },
];

/* =========================
   MENUS
========================= */

const menus = {
  about: {
    label: "ABOUT",
    href: "#",
    items: about,
  },

  services: {
    label: "SERVICES",
    href: "#",
    items: services,
  },

  industries: {
    label: "INDUSTRIES",
    href: "#",
    items: industries,
  },
} satisfies Record<string, MenuData>;

/* =========================
   LEFT NAVIGATION
========================= */

const leftLinks: NavLink[] = [
  {
    label: "ABOUT",
    href: "#",
    menuKey: "about",
  },
  {
    label: "SERVICES",
    href: "#",
    menuKey: "services",
  },
  {
    label: "INDUSTRIES",
    href: "#",
    menuKey: "industries",
  },
  {
    label: "Work",
    href: "/work",
  },
];

/* =========================
   RIGHT NAVIGATION
========================= */

const rightLinks: NavLink[] = [
  {
    label: "Careers ",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];

/* =========================
   HEADER COMPONENT
========================= */

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [openMenu, setOpenMenu] = useState<keyof typeof menus | null>(
    null
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const [searchOpen, setSearchOpen] = useState(false);

  /* Close mega menu when page changes */
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  /* Open selected mega menu */
  const handleMenuEnter = (key: keyof typeof menus) => {
    const menu = menus[key];

    /*
      If menu has no submenu items,
      don't open mega menu.
    */
    if (menu.items.length === 0) {
      setOpenMenu(null);
      return;
    }

    setOpenMenu(key);
    setActiveIndex(0);
  };

  /* Current active menu */
  const activeMenu: MenuData | null = openMenu
    ? menus[openMenu]
    : null;

  /* Current selected item */
  const current: MenuItem | null = activeMenu
    ? activeMenu.items[activeIndex]
    : null;

  return (
    <>
      <header
        onMouseLeave={() => setOpenMenu(null)}
        className={`header ${
          isHome ? "headerHome" : "headerSolid"
        }`}
      >
        <div className="inner">

          {/* =========================
              LEFT NAV
          ========================= */}

          <nav className="nav navLeft">
            {leftLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="navLink"
                onMouseEnter={() => {
                  if (l.menuKey) {
                    handleMenuEnter(l.menuKey);
                  } else {
                    setOpenMenu(null);
                  }
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* =========================
              CENTER LOGO
          ========================= */}

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

          {/* =========================
              RIGHT NAV
          ========================= */}

          <nav className="nav navRight">

            {rightLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="navLink"
                onMouseEnter={() => setOpenMenu(null)}
              >
                {l.label}
              </Link>
            ))}

            {/* SEARCH BUTTON */}

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

        {/* =========================
            MEGA MENU
        ========================= */}

        <div
          className={`megaMenu ${
            activeMenu ? "megaMenuOpen" : ""
          }`}
        >
          {activeMenu && current && (
            <div className="megaMenuInner">

              {/* =========================
                  LEFT: SUBMENU ITEMS
              ========================= */}

              <ul className="itemList">

                {activeMenu.items.map((item, i) => (
                  <li
                    key={item.slug}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <Link
                      href={`/${item.slug}`}
                      onClick={() => setOpenMenu(null)}
                      className={`itemLink ${
                        activeIndex === i
                          ? "itemLinkActive"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

              </ul>

              {/* =========================
                  RIGHT: DESCRIPTION
              ========================= */}

              <div className="detail">

                <p className="detailDesc">
                  {current.desc}
                </p>

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

      {/* =========================
          SEARCH MODAL
      ========================= */}

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}