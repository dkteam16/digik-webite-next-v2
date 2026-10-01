
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./globals.css";
import SearchModal from "@/app/common-components/SearchModal";

// CSS ab global file (e.g. globals.css) me hai, isliye yahan koi import nahi chahiye

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

const about: MenuItem[] = [
  {
    name: "All Industries",
    slug: "all-industries-page",
    desc: "Learn how Digital Kangaroos started and the journey that shaped who we are today.",
  },
  {
    name: "All services",
    slug: "all-services",
    desc: "Meet the designers, developers and strategists behind every project we deliver.",
  },
  {
    name: "Auto Parts Engineering",
    slug: "auto-parts-engineering",
    desc: "Discover what drives us and where we're headed as a digital partner for brands.",
  },
  {
    name: "B2B Branding",
    slug: "b2b-branding",
    desc: "See what sets our process, people and results apart from other agencies.",
  },
  {
    name: "Career",
    slug: "career",
    desc: "Hear directly from clients about their experience working with our team.",
  },
  {
    name: "Steel Metal Fabrication",
    slug: "steel-metal-fabrication",
    desc: "Hear directly from clients about their experience working with our team.",
  },
  {
    name: "Website Redesign For Industry",
    slug: "website-redesign-for-industry",
    desc: "Hear directly from clients about their experience working with our team.",
  },
];

const services: MenuItem[] = [
  {
    name: "Chemical Pharmaceutical Manufacturers",
    slug: "chemical-pharmaceutical-manufacturers",
    desc: "Are you looking to establish a robust online presence that resonates with your target audience? We build fast, secure and scalable websites tailored to your unique needs.",
  },
  {
    name: "Common Components",
    slug: "common-components",
    desc: "From idea to launch, we design and build smooth Android and iOS apps that your users will love to use.",
  },
  {
    name: "Corporate Photography Videography",
    slug: "corporate-photography-videography",
    desc: "Complete online store solutions with secure payments, inventory management and a checkout that converts.",
  },
  {
    name: "Cycle Sports Equipment",
    slug: "cycle-sports-equipment",
    desc: "Custom Shopify themes, app integrations and store optimization to help your brand sell more.",
  },
  {
    name: "Export International Seo",
    slug: "export-international-seo",
    desc: "Custom software built around your business processes, from internal tools to full enterprise platforms.",
  },
  {
    name: "Fasteners Hardware",
    slug: "fasteners-hardware",
    desc: "Data-driven campaigns across social media, ads and email that bring the right audience to your brand.",
  },
  {
    name: "Hosiery Textile Exporters",
    slug: "hosiery-textile-exporters",
    desc: "Professional photo and video production that tells your brand story with a polished, corporate look.",
  },
  {
    name: "Industrial Website Desgin",
    slug: "industrial-website-desgin",
    desc: "Improve your search rankings cand organic traffic with technical SEO, content strategy and link building.",
  },
];

const industries: MenuItem[] = [
  {
    name: "Local Google Business Seo",
    slug: "local-google-business-seo",
    desc: "We build secure, compliant digital solutions for hospitals, clinics and healthcare providers that improve patient experience.",
  },
  {
    name: "Logistics Industrial",
    slug: "logistics-industrial",
    desc: "Property listing platforms, virtual tours and lead-generation websites built for real estate agencies and builders.",
  },
  {
    name: "Machine Tools Precision",
    slug: "machine-tools-precision",
    desc: "Online stores and retail platforms designed to convert visitors into loyal, repeat customers.",
  },
  {
    name: "Mobile Apps Development",
    slug: "mobile-apps-development",
    desc: "Learning management systems and school/college websites that make education more accessible.",
  },
  {
    name: "Our Work",
    slug: "our-work",
    desc: "Secure, scalable fintech solutions that meet compliance needs while keeping the user experience simple.",
  },
  {
    name: "Packaging Plastics",
    slug: "packaging-plastics",
    desc: "Booking platforms and hospitality websites that make planning and reserving effortless for your guests.",
  },
  {
    name: "Product Catalogue Websites",
    slug: "product-catalogue-websites",
    desc: "Tracking, fleet management and logistics platforms built to streamline your operations end to end.",
  },
];

const menus = {
  about: { label: "ABOUT", href: "/about", items: about },
  services: { label: "SERVICES", href: "/services", items: services },
  industries: { label: "INDUSTRIES", href: "/industries", items: industries },
} satisfies Record<string, MenuData>;

const leftLinks: NavLink[] = [
  { label: "ABOUT", href: "/about", menuKey: "about" },
  { label: "SERVICES", href: "/all-services", menuKey: "services" },
  { label: "INDUSTRIES", href: "/industrial-website-desgin", menuKey: "industries" },
  { label: "CONTACT", href: "/contact-us" },
];

const rightLinks: NavLink[] = [
  { label: "WORK", href: "/our-work" },
  { label: "CAREERS", href: "/career" },
  { label: "BLOG", href: "/blog" },
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

            {/* Right: description (heading removed) */}
            <div className="detail">
              <p className="detailDesc">{current.desc}</p>

              <Link
                href="/contact"
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
