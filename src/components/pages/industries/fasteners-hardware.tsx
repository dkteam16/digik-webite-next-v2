import Image from "next/image";
import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, Plus } from "lucide-react";

const imgGroup266 = "/images/ind-auto-parts-engineering/imgGroup266.svg";
const imgGroup267 = "/images/ind-auto-parts-engineering/imgGroup267.svg";
const imgOutline = "/images/ind-auto-parts-engineering/imgOutline.svg";
const imgGroup268 = "/images/ind-auto-parts-engineering/imgGroup268.svg";
const imgGroup = "/images/ind-auto-parts-engineering/imgGroup.svg";
const imgSadsaas1 = "/images/ind-auto-parts-engineering/imgSadsaas1.png";

const ACCORDION_ROWS = [
  "SKU-Level Product Pages",
  "Standard & Grade Pages",
  "Coating & Material Pages",
  "Instant RFQ Form",
];

const PROBLEM_ITEMS = [
  { n: "1", body: "No indexed product pages for specific fastener types, grades, or standards — so Google can't rank you for specific search terms" },
  { n: "2", body: "International buyers can't find technical specs, certifications, or coating options without calling" },
  { n: "3", body: `Not appearing on Google when buyers search "M8 hex bolt manufacturer India" or "stainless steel fastener exporter"` },
  { n: "4", body: "No RFQ system — buyers who can't reach you by phone move to the next supplier immediately" },
];

const KEYWORDS_ALL = [
  "Fastener Manufacturer India",
  "Nut Bolt Exporter India",
  "Hex Bolt Manufacturer Punjab",
  "Stainless Steel Fastener Supplier",
  "DIN 931 Bolt Manufacturer India",
  "Industrial Fastener Exporter",
  "Anchor Bolt Supplier India",
  "Wholesale Nut Bolt Manufacturer",
  "Hardware Supplier Website India",
  "B2B Fastener Website Design",
];

export function FastenersHardwarePage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden font-rajdhani">
      <PixelHeader activeHref="/industries" />

      {/* Hero Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block font-rajdhani font-semibold text-lg text-[#f4a31d] uppercase tracking-wide">
              Fasteners, Nut-Bolt &amp; Industrial Hardware Manufacturers
            </span>

            <h1 className="font-days-one text-3xl sm:text-4xl lg:text-5xl uppercase text-[#333] leading-tight tracking-tight">
              A World-Class Fastener Website <span className="text-[#f4a31d]">Wins Orders Faster</span>
            </h1>

            <div className="border-l-4 border-[#f4a31d] pl-4 sm:pl-6 py-1">
              <p className="font-rajdhani font-semibold text-lg sm:text-xl text-[#333] uppercase leading-relaxed">
                India&apos;s fastener industry exports to 80+ countries. But most manufacturers win these orders through personal relationships — a model that breaks down when international buyers search online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-all shadow-lg hover:scale-105"
              >
                <FileSearch className="size-5" />
                Get Free Website Audit
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-all"
              >
                See Industry Examples
              </Link>
            </div>
          </div>

          {/* Right Column: Key Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#333] text-white p-6 rounded-2xl border-l-8 border-[#f4a31d] space-y-4 shadow-xl">
              <div>
                <p className="font-days-one text-4xl text-[#f4a31d]">$3.2B</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">India Fastener Exports Annually</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">80+</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">Countries India Exports Fasteners To</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">5%</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">Manufacturers With Good Websites</p>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-2xl p-4 flex items-center gap-4 border border-gray-200">
              <div className="relative size-16 shrink-0 rounded-full overflow-hidden border-2 border-[#f4a31d] bg-[#333]">
                <Image src={imgSadsaas1} alt="ISO Certified" fill className="object-cover" />
              </div>
              <div>
                <p className="font-rajdhani font-bold text-lg text-[#333] uppercase">ISO 9001:2015 Certified</p>
                <p className="font-rajdhani font-semibold text-sm text-[#535353] uppercase">Quality Standards Verified</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Strip */}
      <section className="bg-[#333] text-white border-y-4 border-[#f4a31d] py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup266} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Fastener Web Design</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup267} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Nut-Bolt Exporters</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgOutline} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Industrial Hardware SEO</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup268} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">SKU Catalogue</p>
          </div>
          <div className="flex flex-col items-center space-y-2 col-span-2 md:col-span-1">
            <div className="relative size-10">
              <Image src={imgGroup} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">RFQ System</p>
          </div>
        </div>
      </section>

      {/* Core Problem & Deliverables */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
            The Core Problem
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Your Product Range Is Huge. Your Website Shows Almost None of It.
          </h2>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ACCORDION_ROWS.map((label, i) => (
            <div key={label} className="bg-[#f5f5f5] rounded-2xl p-6 border border-gray-200 flex justify-between items-center">
              <div>
                <span className="font-rajdhani font-bold text-sm text-[#f4a31d] uppercase">Deliverable 0{i + 1}</span>
                <h3 className="font-days-one text-xl text-[#242832] uppercase mt-1">{label}</h3>
              </div>
              <Plus className="size-6 text-[#f4a31d] shrink-0" />
            </div>
          ))}
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_ITEMS.map((item) => (
            <Card key={item.n} className="bg-[#f5f5f5] border-none rounded-3xl p-6 border-t-4 border-[#f4a31d] hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="size-14 rounded-2xl bg-[#f4a31d] text-white flex items-center justify-center font-days-one text-2xl">
                  {item.n}
                </div>
                <p className="font-rajdhani font-bold text-lg text-[#333] uppercase leading-snug">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SEO Strategy Section */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wide">
              SEO Keywords We Target
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              How Fastener Buyers Search – and How We Get You Found
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {KEYWORDS_ALL.map((kw) => (
              <span key={kw} className="bg-white text-[#333] font-rajdhani font-bold text-base px-5 py-3 rounded-full shadow-sm border border-gray-200 uppercase">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#242832] uppercase leading-tight">
          Ready to Replace IndiaMart With <span className="text-[#f4a31d]">Your Own Lead Machine?</span>
        </h2>
        <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto uppercase">
          Free website and SEO audit for fastener and hardware manufacturers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
          >
            <FileSearch className="size-5" />
            Get Free Website Audit
          </Link>
          <Link
            href="https://wa.me/919814820845"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-colors"
          >
            WhatsApp Us
          </Link>
        </div>
      </section>

      <PixelSiteFooter />
    </div>
  );
}
