import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, ArrowRight, ExternalLink, MessageCircle } from "lucide-react";

export function OurWorkPage() {
  const caseStudies = [
    {
      title: "Website revamp + brand identity",
      client: "Avon Steel",
      industry: "Steel Manufacturing · Punjab",
      href: "/work/avon-steel",
      description: "Transformed a legacy steel manufacturer's outdated digital presence into a bold, future-ready website with a full brand identity system.",
      highlights: ["3x Avg. RFQ Uplift", "100% Brand Rebuilt", "8 wks Delivery"]
    },
    {
      title: "B2B repositioning + website + SEO",
      client: "Octave Mettle",
      industry: "CNC Machining · Foundry · Coimbatore",
      href: "/work/octave-mettle",
      description: "Repositioned a CNC machine shop that acquired a foundry — new strategy, homepage, 10-page sitemap, SEO keywords, and service pages targeting global OEM buyers.",
      highlights: ["10+ Pages Built", "30 SEO Keywords", "2 Verticals Merged"]
    },
    {
      title: "240+ Google Business listings optimised",
      client: "QQ Solutions",
      industry: "Franchise · 240+ Locations",
      href: "/work/qq-solutions",
      description: "Audited, cleaned, and optimised 240+ Google Business Profile listings for a pan-India franchise chain — driving local discoverability at scale.",
      highlights: ["240+ Listings Fixed", "100% Profile Accuracy", "Pan-India Coverage"]
    },
    {
      title: "Export Catalogue & B2B Web Portal",
      client: "Precision Tools India",
      industry: "Tooling & Hardware · Exports",
      href: "/contact",
      description: "Built a searchable product catalogue website showcasing 500+ industrial tooling components to buyers across Europe and the Middle East.",
      highlights: ["500+ SKU Catalogue", "RFQ Generator", "Multilingual Support"]
    },
    {
      title: "International B2B SEO Campaign",
      client: "Apex Hydraulics",
      industry: "Hydraulic Machinery · Ludhiana",
      href: "/contact",
      description: "Achieved top 3 Google rankings for high-intent B2B search terms across UK and US markets within 5 months of campaign launch.",
      highlights: ["Top 3 Ranking", "US & UK Markets", "+210% Organic Inquiries"]
    },
    {
      title: "Corporate Identity & Digital Suite",
      client: "Ludhiana Forge Works",
      industry: "Forging & Engineering",
      href: "/contact",
      description: "Complete corporate website and digital brochure design for an engineering exporter targeting German and North American automotive OEMs.",
      highlights: ["OEM Buyer Ready", "ISO Spec Sheets", "HD Factory Visuals"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/our-work" />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
          Our Work
        </span>
        <h1 className="font-days-one text-3xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
          Industrial Companies. <span className="text-[#f4a31d]">Ranked</span>. Found. Trusted.
        </h1>
        <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We don't take on every client. We take on manufacturers, exporters, and B2B industrial companies — and we build digital engines that get them found by the buyers who matter.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-md transition-transform hover:scale-105"
          >
            <FileSearch className="size-5" />
            Get Free Website Audit
          </Link>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-[#333] py-4 text-white font-rajdhani font-bold text-base sm:text-lg uppercase overflow-hidden border-t-4 border-t-[#f4a31d]">
        <div className="flex items-center justify-around gap-8 whitespace-nowrap">
          <span>Engineering Firm Web Design</span>
          <span>•</span>
          <span>RFQ Form Design</span>
          <span>•</span>
          <span>Web Design For Manufacturers</span>
          <span>•</span>
          <span>Industrial SEO Agency India</span>
          <span>•</span>
          <span>B2B Website Design & Development</span>
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((work, idx) => (
            <Card
              key={idx}
              className="bg-[#f5f5f5] hover:bg-white border-2 border-transparent hover:border-[#f4a31d] rounded-[32px] p-8 space-y-6 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="font-rajdhani font-bold text-xs text-[#f4a31d] uppercase tracking-wider block">
                    {work.industry}
                  </span>
                  <h3 className="font-days-one text-2xl text-[#333] uppercase group-hover:text-[#f4a31d] transition-colors leading-snug">
                    {work.title}
                  </h3>
                  <p className="font-rajdhani font-semibold text-sm text-gray-500 uppercase">
                    Client: {work.client}
                  </p>
                </div>

                <p className="font-rajdhani font-medium text-gray-700 text-base leading-relaxed">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {work.highlights.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-3 py-1 bg-[#f4a31d]/20 text-[#333] text-xs font-rajdhani font-bold rounded-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200/60">
                <Link
                  href={work.href}
                  className="inline-flex items-center gap-2 font-rajdhani font-bold text-base text-[#333] group-hover:text-[#f4a31d] uppercase transition-colors"
                >
                  View Case Study <ArrowRight className="size-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Ready To Be Next CTA */}
      <section className="py-20 bg-[#f5f5f5] px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-days-one text-4xl sm:text-6xl text-[#333] uppercase leading-tight">
            Ready To Be Next?
          </h2>
          <p className="font-rajdhani font-semibold text-xl text-gray-600 max-w-2xl mx-auto uppercase">
            If you're a manufacturer, exporter, or B2B industrial company — we should talk.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-md transition-transform hover:scale-105"
            >
              <FileSearch className="size-5" />
              Get Free Audit
            </Link>
            <a
              href="https://wa.me/919814820845"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-colors"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <PixelSiteFooter />
    </div>
  );
}
