import Image from "next/image";
import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSearch, ArrowRight, Star, ShieldCheck } from "lucide-react";

const imgGroup266 = "/images/ind-auto-parts-engineering/imgGroup266.svg";
const imgGroup267 = "/images/ind-auto-parts-engineering/imgGroup267.svg";
const imgOutline = "/images/ind-auto-parts-engineering/imgOutline.svg";
const imgGroup268 = "/images/ind-auto-parts-engineering/imgGroup268.svg";
const imgGroup = "/images/ind-auto-parts-engineering/imgGroup.svg";
const imgSadsaas1 = "/images/ind-auto-parts-engineering/imgSadsaas1.png";

const PROBLEM_CARDS = [
  { n: "1", text: "No structured product catalogue with part numbers and specifications" },
  { n: "2", text: `Not ranking on Google for "auto parts manufacturer India" or your target keywords` },
  { n: "3", text: "Website gives no confidence to international OEM buyers" },
  { n: "4", text: "Over-dependent on IndiaMart, trade fairs, and word-of-mouth" },
];

const SEO_KEYWORDS = [
  "Auto parts manufacturer India",
  "Auto component supplier Punjab",
  "Precision auto parts exporter India",
  "OEM auto component manufacturer",
  "Forged auto parts supplier",
  "Casting manufacturer India export",
  "Website for auto parts manufacturer",
  "B2B web design for auto manufacturers",
  "Industrial website design company",
];

export function AutoPartsEngineeringPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden font-rajdhani">
      <PixelHeader activeHref="/industries" />

      {/* Hero Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block font-rajdhani font-semibold text-lg text-[#f4a31d] uppercase tracking-wide">
              Auto Parts &amp; Precision Engineering
            </span>

            <h1 className="font-days-one text-3xl sm:text-4xl lg:text-5xl uppercase text-[#333] leading-tight tracking-tight">
              Auto Component Manufacturers That Rank High Win <span className="text-[#f4a31d]">Global OEM Contracts</span>
            </h1>

            <div className="border-l-4 border-[#f4a31d] pl-4 sm:pl-6 py-1">
              <p className="font-rajdhani font-semibold text-lg sm:text-xl text-[#333] uppercase leading-relaxed">
                Procurement managers at automotive OEMs and Tier-1 suppliers search online long before contacting vendors. If your website is missing, outdated, or lacks detailed specifications, you lose business to competitors who look ready.
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
                <p className="font-days-one text-4xl text-[#f4a31d]">$20B+</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">India Auto Component Exports</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">Page 1</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">Where Global Tier-1 Buyers Search</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">40+</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">Export Markets Targeted</p>
              </div>
            </div>

            {/* ISO Badge Box */}
            <div className="bg-[#f5f5f5] rounded-2xl p-4 flex items-center gap-4 border border-gray-200">
              <div className="relative size-16 shrink-0 rounded-full overflow-hidden border-2 border-[#f4a31d] bg-[#333]">
                <Image src={imgSadsaas1} alt="ISO Certified" fill className="object-cover" />
              </div>
              <div>
                <p className="font-rajdhani font-bold text-lg text-[#333] uppercase">ISO Certified Standards</p>
                <p className="font-rajdhani font-semibold text-sm text-[#535353] uppercase">Global Credibility for Indian Exporters</p>
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
            <p className="font-rajdhani font-bold text-sm uppercase">Engineering Web Design</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup267} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Manufacturer Websites</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgOutline} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Industrial SEO Agency</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup268} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">B2B Website Design</p>
          </div>
          <div className="flex flex-col items-center space-y-2 col-span-2 md:col-span-1">
            <div className="relative size-10">
              <Image src={imgGroup} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">RFQ Form Design</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Auto Component Buyers Judge You by Your Website First
          </h2>
          <p className="font-rajdhani font-semibold text-lg text-[#535353] uppercase leading-relaxed">
            Procurement managers at OEMs and Tier-1 automotive companies conduct supplier discovery online before a single call is made. They search for &quot;auto parts manufacturer India&quot; or specific component categories — and they shortlist based entirely on digital credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card) => (
            <Card key={card.n} className="bg-[#f5f5f5] border-none rounded-3xl p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="size-14 rounded-2xl bg-[#f4a31d] text-white flex items-center justify-center font-days-one text-2xl">
                  {card.n}
                </div>
                <p className="font-rajdhani font-bold text-lg text-[#333] uppercase leading-snug">
                  {card.text}
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
              SEO Strategy
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              Keywords We Rank Your Auto Parts Business For
            </h2>
            <p className="font-rajdhani font-semibold text-lg text-[#535353] uppercase">
              Our B2B SEO strategy targets the exact terms automotive procurement managers type when searching for new suppliers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {SEO_KEYWORDS.map((kw) => (
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
          Is Your Website Winning Auto Buyers <span className="text-[#f4a31d]">or Losing Them?</span>
        </h2>
        <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto uppercase">
          Get a free audit of your current website and SEO. We&apos;ll show you exactly what&apos;s costing you RFQs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
          >
            <FileSearch className="size-5" />
            Get Free Audit Now
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
