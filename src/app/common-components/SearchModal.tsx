"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./search-modal.css";

type SearchItem = {
  title: string;
  text: string;
  href: string;
  group: "Pages" | "Services" | "Industries" | "Case studies";
};

/* ---------- Site ka static search index (apne hisaab se edit karo) ---------- */
const STATIC_ITEMS: SearchItem[] = [
  { group: "Pages", title: "About Us", text: "Who we are and how we work with industrial companies.", href: "/about" },
  { group: "Pages", title: "Our Work", text: "Case studies of manufacturers and exporters we helped rank.", href: "/our-work" },
  { group: "Pages", title: "Blog", text: "Insights on B2B SEO, websites and industrial marketing.", href: "/blog" },
  { group: "Pages", title: "Career", text: "Join our team.", href: "/career" },
  { group: "Pages", title: "Contact Us", text: "Get a free audit or talk to our team.", href: "/contact-us" },
  { group: "Pages", title: "All Services", text: "Everything we offer for B2B industrial brands.", href: "/all-services" },
  { group: "Pages", title: "All Industries", text: "Industries we specialise in.", href: "/all-industries-page" },

  { group: "Services", title: "Industrial Website Design", text: "Fast, RFQ-focused websites for manufacturers.", href: "/industrial-website-desgin" },
  { group: "Services", title: "Website Redesign", text: "Revamp an outdated industrial website.", href: "/website-redesign-for-industry" },
  { group: "Services", title: "Local & Google Business SEO", text: "Google Business Profile and local search optimisation.", href: "/local-google-business-seo" },
  { group: "Services", title: "Export & International SEO", text: "Get found by global buyers and OEMs.", href: "/export-international-seo" },
  { group: "Services", title: "B2B Branding", text: "Brand identity and positioning for B2B companies.", href: "/b2b-branding" },
  { group: "Services", title: "Product Catalogue Websites", text: "Catalogue websites that generate enquiries.", href: "/product-catalogue-websites" },
  { group: "Services", title: "Mobile App Development", text: "Mobile apps for industrial businesses.", href: "/mobile-apps-development" },
  { group: "Services", title: "Corporate Photography & Videography", text: "Factory shoots, product photos and corporate films.", href: "/corporate-photography-videography" },

  { group: "Industries", title: "Steel & Metal Fabrication", text: "Websites and SEO for steel and metal companies.", href: "/steel-metal-fabrication" },
  { group: "Industries", title: "Auto Parts & Engineering", text: "Digital growth for auto component makers.", href: "/auto-parts-engineering" },
  { group: "Industries", title: "Chemical & Pharmaceutical", text: "Marketing for chemical and pharma manufacturers.", href: "/chemical-pharmaceutical-manufacturers" },
  { group: "Industries", title: "Cycle & Sports Equipment", text: "Global buyer reach for cycle and sports brands.", href: "/cycle-sports-equipment" },
  { group: "Industries", title: "Fasteners & Hardware", text: "SEO and websites for fastener exporters.", href: "/fasteners-hardware" },
  { group: "Industries", title: "Hosiery & Textile Exporters", text: "Export-ready presence for textile companies.", href: "/hosiery-textile-exporters" },
  { group: "Industries", title: "Logistics & Industrial", text: "Win more contracts through your website.", href: "/logistics-industrial" },
  { group: "Industries", title: "Machine Tools & Precision", text: "Digital marketing for precision engineering.", href: "/machine-tools-precision" },
  { group: "Industries", title: "Packaging & Plastics", text: "Lead generation for packaging manufacturers.", href: "/packaging-plastics" },
];

const API_URL = "https://www.dkteam.in/dk-admin/api/case-studies";

/* Matching text ko bold karta hai */
function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <strong>{text.slice(i, i + q.length)}</strong>
      {text.slice(i + q.length)}
    </>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [caseStudies, setCaseStudies] = useState<SearchItem[]>([]);

  // Modal khulne par: input focus + page scroll lock + Esc se close
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current?.focus(), 250);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Case studies API se (sirf ek baar, pehli baar khulne par)
  useEffect(() => {
    if (!open || caseStudies.length > 0) return;

    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        const list: {
          title: string;
          slug: string;
          category?: string;
          short_description?: string;
        }[] = json?.data ?? [];

        setCaseStudies(
          list.map((c) => ({
            group: "Case studies" as const,
            title: c.title,
            text: c.short_description || c.category || "",
            href: `/our-work/${c.slug}`,
          }))
        );
      })
      .catch(() => {
        /* API fail ho to bas static results dikhenge */
      });
  }, [open, caseStudies.length]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return [...STATIC_ITEMS, ...caseStudies].filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q)
    );
  }, [query, caseStudies]);

  const pages = results.filter((r) => r.group === "Pages");
  const others = results.filter((r) => r.group !== "Pages");

  const go = (href: string) => {
    onClose();
    setQuery("");
    router.push(href);
  };

  const onEnter = () => {
    if (results[0]) go(results[0].href);
  };

  return (
    <div
      className={`sm-overlay ${open ? "sm-open" : ""}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        className="sm-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ---------- Search bar ---------- */}
        <div className="sm-bar">
          <div className="sm-bar-field">
            <label htmlFor="sm-input">Search</label>
            <input
              id="sm-input"
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onEnter()}
              autoComplete="off"
              placeholder="Search services, industries, case studies..."
            />
          </div>

          {query && (
            <button
              type="button"
              className="sm-icon-btn"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
          <button
            type="button"
            className="sm-icon-btn sm-close"
            onClick={onClose}
            aria-label="Close search"
          >
            Close
          </button>
        </div>

        {/* ---------- Results ---------- */}
        {query.trim() && (
          <div className="sm-results">
            {results.length === 0 ? (
              <p className="sm-empty">
                No results for “{query}”. Try a different word.
              </p>
            ) : (
              <div className="sm-columns">
                {/* Left: Pages */}
                <div className="sm-col-left">
                  {pages.length > 0 && (
                    <>
                      <h4 className="sm-heading">Pages</h4>
                      <ul>
                        {pages.map((p) => (
                          <li key={p.href}>
                            <Link href={p.href} onClick={onClose}>
                              <Highlight text={p.title} query={query} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Right: Services / Industries / Case studies with small text */}
                <div className="sm-col-right">
                  {others.length > 0 && (
                    <>
                      <h4 className="sm-heading">Results</h4>
                      <ul>
                        {others.slice(0, 6).map((r) => (
                          <li key={r.href}>
                            <Link href={r.href} onClick={onClose} className="sm-item">
                              <span className="sm-item-group">{r.group}</span>
                              <span className="sm-item-title">
                                <Highlight text={r.title} query={query} />
                              </span>
                              <span className="sm-item-text">{r.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            )}

            {results.length > 0 && (
              <button
                type="button"
                className="sm-footer"
                onClick={() => go(results[0].href)}
              >
                <span>Search for “{query}”</span>
                <span aria-hidden>→</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
