"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SearchModal from "@/app/common-components/SearchModal";
interface MobileSubItem {
  name: string;
  slug: string;
}

interface MobileMenuGroup {
  label: string;
  href: string;
  items: MobileSubItem[];
}

const aboutItems: MobileSubItem[] = [
  { name: "All Industries", slug: "all-industries-page" },
  { name: "All services", slug: "all-services" },
  { name: "Auto Parts Engineering", slug: "auto-parts-engineering" },
  { name: "B2B Branding", slug: "b2b-branding" },
  { name: "Career", slug: "careers" },
  { name: "Steel Metal Fabrication", slug: "steel-metal-fabrication" },
  { name: "Website Redesign For Industry", slug: "website-redesign-for-industry" },
];

const servicesItems: MobileSubItem[] = [
  { name: "Chemical Pharmaceutical Manufacturers", slug: "chemical-pharmaceutical-manufacturers" },
  { name: "Common Components", slug: "common-components" },
  { name: "Corporate Photography Videography", slug: "corporate-photography-videography-services" },
  { name: "Cycle Sports Equipment", slug: "cycle-sports-equipment" },
  { name: "Export International Seo", slug: "export-international-seo" },
  { name: "Fasteners Hardware", slug: "fasteners-hardware" },
  { name: "Hosiery Textile Exporters", slug: "hosiery-textile-exporters" },
  { name: "Industrial Website Desgin", slug: "industrial-website-desgin" },
];

const industriesItems: MobileSubItem[] = [
  { name: "Local Google Business Seo", slug: "local-google-business-seo" },
  { name: "Logistics Industrial", slug: "logistics-industrial" },
  { name: "Machine Tools Precision", slug: "machine-tools-precision" },
  { name: "Mobile Apps Development", slug: "mobile-app-development" },
  { name: "Our Work", slug: "work" },
  { name: "Packaging Plastics", slug: "packaging-plastics" },
  { name: "Product Catalogue Websites", slug: "product-catalogue-websites" },
];

const menuGroups: MobileMenuGroup[] = [
  { label: "ABOUT", href: "/about-us", items: aboutItems },
  { label: "SERVICES", href: "/services", items: servicesItems },
  { label: "INDUSTRIES", href: "/industries", items: industriesItems },
  { label: "CONTACT", href: "/contact-us", items: [] },
  { label: "WORK", href: "/work", items: [] },
  { label: "CAREERS", href: "/careers", items: [] },
  { label: "BLOG", href: "/blogs", items: [] },
  { label: "SEARCH", href: "/search", items: [] },
];

export default function MobileHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Sirf drawer khula ho tab scroll lock. (Drawer band hote hi search modal
  // khulta hai, to yahan overflow "" set nahi karna warna modal ka lock hat jata hai)
  useEffect(() => {
    if (!drawerOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const toggleGroup = (label: string) => {
    setOpenGroup((prev) => (prev === label ? null : label));
  };

  return (
    <>
    <div className={`mobileHeader ${isHome ? "mobileHeaderHome" : "mobileHeaderSolid"}`}>
      <div className="mobileBar">
        {/* Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          className="mobileHamburger"
          onClick={() => setDrawerOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Right icons */}
        <div className="mobileIcons">
          <a href="tel:+10000000000" className="mobileIconBtn" aria-label="Call">
            <Image
                            src="/calling.png"
                            alt="Digital Kangaroos"
                            width={208}
                            height={36}
                            priority
                          />
          </a>

          <a
            href="https://wa.me/10000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mobileIconBtn mobileIconWhatsapp"
            aria-label="WhatsApp"
          >
           <Image
                           src="/whatsapp.png"
                           alt="Digital Kangaroos"
                           width={208}
                           height={36}
                           priority
                         />
          </a>

          <Link href="/contact-us" className="mobileIconBtn" aria-label="Enquiry">
            <Image
                            src="/note.png"
                            alt="Digital Kangaroos"
                            width={208}
                            height={36}
                            priority
                          />
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`mobileOverlay ${drawerOpen ? "mobileOverlayOpen" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className={`mobileDrawer ${drawerOpen ? "mobileDrawerOpen" : ""}`}>
        <div className="mobileDrawerHeader">
          <button
            type="button"
            aria-label="Close menu"
            className="mobileClose"
            onClick={() => setDrawerOpen(false)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="mobileNavList">
          {menuGroups.map((group) => (
            <div key={group.label} className="mobileNavItem">
              {group.items.length > 0 ? (
                <>
                  <button
                    type="button"
                    className="mobileNavLink mobileAccordionToggle"
                    onClick={() => toggleGroup(group.label)}
                  >
                    {group.label}
                    <span
                      className={`mobileAccordionIcon ${
                        openGroup === group.label ? "mobileAccordionIconOpen" : ""
                      }`}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`mobileSubList ${
                      openGroup === group.label ? "mobileSubListOpen" : ""
                    }`}
                  >
                    {group.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${item.slug}`}
                        className="mobileSubLink"
                        onClick={() => setDrawerOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : group.label === "SEARCH" ? (
                <button
                  type="button"
                  className="mobileNavLink"
                  onClick={() => {
                    setDrawerOpen(false);
                    setSearchOpen(true);
                  }}
                >
                  {group.label}
                </button>
              ) : (
                <Link
                  href={group.href}
                  className="mobileNavLink"
                  onClick={() => setDrawerOpen(false)}
                >
                  {group.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>

    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}     
