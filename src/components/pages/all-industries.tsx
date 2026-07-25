import Link from "next/link";
import Image from "next/image";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, Phone, FileSearch, Plus, Star } from "lucide-react";

const imgSadsaas1 = "/images/all-industries/imgSadsaas1.png";
const imgEllipse20 = "/images/all-industries/imgEllipse20.svg";
const imgGroup5 = "/images/all-industries/imgGroup5.svg";
const imgGroup389 = "/images/all-industries/imgGroup389.svg";

const INDUSTRY_CARDS = [
  {
    title: "Auto Parts & Engineering",
    href: "/industries/auto-parts-engineering",
    description: "Websites for auto component manufacturers, precision parts suppliers & OEM vendors across India.",
  },
  {
    title: "Cycle & Sports Equipment",
    href: "/industries/cycle-sports-equipment",
    description: "Export-ready websites for cycle parts manufacturers, sports goods exporters & Ludhiana clusters.",
  },
  {
    title: "Fasteners & Hardware",
    href: "/industries/fasteners-hardware",
    description: "B2B websites for fastener manufacturers, nut-bolt exporters & industrial hardware suppliers.",
  },
  {
    title: "Steel & Metal Fabrication",
    href: "/industries/steel-metal-fabrication",
    description: "Industrial websites for structural steel, rolling mills, forgings and metal fabrication firms.",
  },
  {
    title: "Chemicals & Pharma",
    href: "/industries/chemical-pharmaceutical-manufacturers",
    description: "Compliant, trust-building websites for chemical manufacturers and pharmaceutical exporters.",
  },
  {
    title: "Machine Tools & Precision",
    href: "/industries/machine-tools-precision",
    description: "Technical websites for CNC machine manufacturers, precision engineering firms & tooling exporters.",
  },
  {
    title: "Logistics / Industrial Suppliers",
    href: "/industries/logistics-industrial",
    description: "Digital platforms for industrial logistics providers, warehouse operators & B2B supply chain firms.",
  },
  {
    title: "Hosiery & Textile Exporters",
    href: "/industries/hosiery-textile-exporters",
    description: "Digital presence for knitwear, garment & textile exporters targeting US, EU and Gulf buyers.",
  },
  {
    title: "Packaging & Plastics",
    href: "/industries/packaging-plastics",
    description: "Product catalogue websites for packaging manufacturers, plastic moulders & FIBC suppliers.",
  },
];

const WHY_CHOOSE_US = [
  "Industry-Specific SEO",
  "RFQ-First Design",
  "International Buyer-Ready",
  "Product Catalogue Websites",
  "Reduce IndiaMart Dependency",
  "Fast, Technical SEO",
];

const PROCESS_STEPS = [
  { step: "STEP 01", title: "Free Website & SEO Audit" },
  { step: "STEP 02", title: "Industry Strategy Session" },
  { step: "STEP 03", title: "Design & Development" },
  { step: "STEP 04", title: "SEO Implementation" },
  { step: "STEP 05", title: "Launch & Lead Tracking" },
];

const SEO_STRATEGIES = [
  {
    title: "Buyer Keyword Research",
    description: "We identify exactly how European, American, and African cycle importers search for Indian suppliers.",
  },
  {
    title: "Product Page SEO",
    description: "Every product category gets its own optimised page — not just a generic \"products\" page.",
  },
  {
    title: "International SEO",
    description: "Hreflang tags, country-targeting, and region-specific content to rank in your target export markets.",
  },
  {
    title: "Export-Focused Content",
    description: "Blog content targeting \"cycle parts supplier India for export\", \"OEM cycle manufacturer Ludhiana\" etc.",
  },
];

export function AllIndustriesPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden font-rajdhani">
      <PixelHeader activeHref="/industries" />

      {/* Hero Section */}
      <section className="relative bg-white pt-8 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block font-rajdhani font-semibold text-[18px] sm:text-[20px] text-[#f4a31d] uppercase tracking-[-0.4px]">
              B2B Web Design &amp; SEO Agency India
            </span>

            <h1 className="font-days-one text-3xl sm:text-4xl lg:text-5xl uppercase text-[#333] leading-tight tracking-[-1px]">
              We Build Websites That Win{" "}
              <span className="text-[#f4a31d]">International Buyers</span>{" "}
              for Indian Manufacturers
            </h1>

            <p className="font-rajdhani font-semibold text-lg sm:text-xl text-[#333] leading-relaxed max-w-3xl">
              Professional factory photography, product shoots, and brand videos for manufacturing and industrial companies — the visual content that makes international buyers trust what they see on your website before they ever visit in person.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                aria-label="Get Free Website Audit"
                className="inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-all shadow-lg hover:scale-105"
              >
                <FileSearch className="size-5" />
                Get Free Website Audit
              </Link>

              <Link
                href="#industries-grid"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-all"
              >
                See Industries We Serve <ArrowDown className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Stats Cards & Avatar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative bg-[#333] text-white p-6 rounded-2xl border-l-8 border-[#f4a31d] space-y-4 shadow-xl">
              <div>
                <p className="font-days-one text-4xl text-[#f4a31d]">150+</p>
                <p className="font-rajdhani font-medium text-lg uppercase text-white/90">Manufacturing clients served</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">12+</p>
                <p className="font-rajdhani font-medium text-lg uppercase text-white/90">Industrial sectors covered</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">3X</p>
                <p className="font-rajdhani font-medium text-lg uppercase text-white/90">Average RFQ increase post-launch</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">₹0</p>
                <p className="font-rajdhani font-medium text-lg uppercase text-white/90">IndiaMart dependency (our goal)</p>
              </div>
            </div>

            {/* Team Graphic / Avatar Accent */}
            <div className="flex items-center gap-4 bg-[#f5f5f5] p-4 rounded-2xl border border-gray-200">
              <div className="relative size-16 shrink-0 rounded-full overflow-hidden border-2 border-[#f4a31d] bg-[#333]">
                <Image src={imgSadsaas1} alt="Digital Kangaroos Team" fill className="object-cover" />
              </div>
              <div>
                <p className="font-rajdhani font-bold text-base uppercase text-[#333]">Google Rating 4.7 ★</p>
                <p className="font-rajdhani font-semibold text-sm text-gray-600">Pan-India B2B Web Agency</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Marquee Strip */}
      <section className="bg-[#333] border-y-4 border-[#f4a31d] py-4 text-white uppercase font-rajdhani font-semibold text-lg sm:text-xl tracking-wider">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-4 text-center">
          <span>Engineering Firm Web Design</span>
          <span className="hidden sm:inline text-[#f4a31d]">●</span>
          <span>RFQ Form Design</span>
          <span className="hidden sm:inline text-[#f4a31d]">●</span>
          <span>Web Design for Manufacturers</span>
          <span className="hidden sm:inline text-[#f4a31d]">●</span>
          <span>Industrial SEO Agency India</span>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section id="industries-grid" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
            Industries We Serve
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Your Industry. Our Expertise. Your Growth.
          </h2>
          <p className="font-rajdhani font-semibold text-lg text-gray-700">
            We don't build generic websites. Every industry page, product catalogue, and SEO strategy is tailored to how your buyers actually search and evaluate suppliers online.
          </p>
        </div>

        {/* 9 Industry Cards in Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRY_CARDS.map((card, idx) => (
            <Card
              key={idx}
              className="bg-[#f5f5f5] hover:bg-white rounded-[32px] p-6 border-2 border-transparent hover:border-[#f4a31d] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <CardHeader className="p-0 space-y-4">
                <div className="size-14 rounded-2xl bg-white border-2 border-[#f4a31d] flex items-center justify-center shadow-md group-hover:bg-[#f4a31d] transition-colors">
                  <Image src={imgGroup5} alt="" width={28} height={28} className="object-contain" />
                </div>
                <CardTitle className="text-2xl text-[#333] group-hover:text-[#f4a31d] transition-colors">
                  <Link href={card.href}>{card.title}</Link>
                </CardTitle>
                <CardDescription className="text-lg text-gray-700 font-medium">
                  {card.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Manufacturers Choose Us Section */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full border-y border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
              Why Manufacturers Choose Us
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              We Understand How Industrial Buyers Think
            </h2>
            <p className="font-rajdhani font-semibold text-lg text-gray-700">
              Most web agencies build websites that look good in a portfolio. We build websites that generate RFQs, rank on Google for buyer search terms, and make overseas buyers trust you before they even send an email.
            </p>
          </div>

          {/* Grid of 6 value propositions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border-l-4 border-[#f4a31d] shadow-sm flex items-center justify-between"
              >
                <span className="font-days-one text-xl uppercase text-[#242832]">{item}</span>
                <Plus className="size-6 text-[#f4a31d] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="bg-[#333] border-b-4 border-[#f4a31d] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
            <span className="font-days-one text-4xl text-[#f4a31d] block">3X</span>
            <span className="font-rajdhani font-semibold text-lg uppercase text-white/90">More RFQs after website relaunch</span>
          </div>
          <div>
            <span className="font-days-one text-4xl text-[#f4a31d] block">87%</span>
            <span className="font-rajdhani font-semibold text-lg uppercase text-white/90">Clients rank page 1 within 6 months</span>
          </div>
          <div>
            <span className="font-days-one text-4xl text-[#f4a31d] block">60+</span>
            <span className="font-rajdhani font-semibold text-lg uppercase text-white/90">Manufacturer websites live in India</span>
          </div>
          <div>
            <span className="font-days-one text-4xl text-[#f4a31d] block">₹0</span>
            <span className="font-rajdhani font-semibold text-lg uppercase text-white/90">Extra IndiaMart spend needed post-SEO</span>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
            Our Process
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            How We Build Websites That Actually Work for Manufacturers
          </h2>
        </div>

        {/* Horizontal / Grid Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="bg-[#f5f5f5] p-6 rounded-2xl border-t-4 border-[#f4a31d] space-y-2 relative"
            >
              <span className="font-rajdhani font-bold text-sm text-[#f4a31d] uppercase">{stepItem.step}</span>
              <h3 className="font-days-one text-lg uppercase text-[#242832]">{stepItem.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Content & SEO Strategy Cards */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
              Content &amp; SEO Strategy
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              Export-Focused Digital Blueprint
            </h2>
          </div>

          {/* 4 Strategy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEO_STRATEGIES.map((item, idx) => (
              <Card key={idx} className="bg-white rounded-[32px] p-6 shadow-md border-t-4 border-[#f4a31d]">
                <CardHeader className="p-0 space-y-3">
                  <CardTitle className="text-xl text-[#333]">{item.title}</CardTitle>
                  <CardDescription className="text-base text-gray-700 font-medium">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#242832] uppercase leading-tight">
          Let's Put Ludhiana's Cycle Cluster on the Global Map
        </h2>
        <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto">
          Free website audit for cycle and sports equipment manufacturers. No commitment, just clarity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
          >
            <FileSearch className="size-5" />
            Get Free Audit
          </Link>

          <Link
            href="tel:+919814820845"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-colors"
          >
            <Phone className="size-5" />
            Call Us Now
          </Link>
        </div>

        <p className="font-rajdhani font-semibold text-sm text-[#535353] uppercase tracking-wider">
          Free Consultation · Pan-India Available
        </p>
      </section>

      <PixelSiteFooter />
    </div>
  );
}