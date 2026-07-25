import Image from "next/image";
import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, Phone, Plus } from "lucide-react";

const imgGroup266 = "/images/ind-auto-parts-engineering/imgGroup266.svg";
const imgGroup267 = "/images/ind-auto-parts-engineering/imgGroup267.svg";
const imgOutline = "/images/ind-auto-parts-engineering/imgOutline.svg";
const imgGroup268 = "/images/ind-auto-parts-engineering/imgGroup268.svg";
const imgGroup = "/images/ind-auto-parts-engineering/imgGroup.svg";
const imgSadsaas1 = "/images/ind-auto-parts-engineering/imgSadsaas1.png";

const OPPORTUNITY_ITEMS = [
  { n: "1", body: `Invisible to international buyers searching "cycle parts manufacturer India"` },
  { n: "2", body: "No product catalogue showing your full range of cycle components" },
  { n: "3", body: "Website not designed to earn trust from US, EU, or African importers" },
  { n: "4", body: "Dependent on trade fairs like Eurobike for all international enquiries" },
];

const FOUND_ITEMS = [
  {
    title: "Buyer Keyword Research",
    body: "We identify exactly how European, American, and African cycle importers search for Indian suppliers.",
  },
  {
    title: "Product Page SEO",
    body: `Every product category gets its own optimised page — not just a generic "products" page.`,
  },
  {
    title: "International SEO",
    body: "Hreflang tags, country-targeting, and region-specific content to rank in your target export markets.",
  },
  {
    title: "Export-Focused Content",
    body: `Blog content targeting "cycle parts supplier India for export", "OEM cycle manufacturer Ludhiana" etc.`,
  },
];

const ACCORDION_ROWS = [
  "Component Catalogue Website",
  "Export Buyer Pages",
  "Sports Equipment SEO",
  "RFQ & Sample Request Forms",
];

export function CycleSportsEquipmentPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden font-rajdhani">
      <PixelHeader activeHref="/industries" />

      {/* Hero Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block font-rajdhani font-semibold text-lg text-[#f4a31d] uppercase tracking-wide">
              Cycle Parts &amp; Sports Equipment Manufacturers
            </span>

            <h1 className="font-days-one text-3xl sm:text-4xl lg:text-5xl uppercase text-[#333] leading-tight tracking-tight">
              The Ludhiana Cycle Cluster Deserves a <span className="text-[#f4a31d]">World-Class Digital Presence</span>
            </h1>

            <div className="border-l-4 border-[#f4a31d] pl-4 sm:pl-6 py-1">
              <p className="font-rajdhani font-semibold text-lg sm:text-xl text-[#333] uppercase leading-relaxed">
                Ludhiana manufactures 70% of India&apos;s cycles and cycle parts — yet most manufacturers in the cluster are invisible online to the global buyers who want to source from them.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-all shadow-lg hover:scale-105"
              >
                <FileSearch className="size-5" />
                Get Free Audit
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Column: Key Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#333] text-white p-6 rounded-2xl border-l-8 border-[#f4a31d] space-y-4 shadow-xl">
              <div>
                <p className="font-days-one text-4xl text-[#f4a31d]">70%</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">India&apos;s Cycles Made in Ludhiana</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">0%</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">Cluster Online Visibility (Typical)</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">5X</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">Export Inquiry Growth We Target</p>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-2xl p-4 flex items-center gap-4 border border-gray-200">
              <div className="relative size-16 shrink-0 rounded-full overflow-hidden border-2 border-[#f4a31d] bg-[#333]">
                <Image src={imgSadsaas1} alt="ISO Certified" fill className="object-cover" />
              </div>
              <div>
                <p className="font-rajdhani font-bold text-lg text-[#333] uppercase">ISO Certified Quality</p>
                <p className="font-rajdhani font-semibold text-sm text-[#535353] uppercase">Global Buyer Trust Guaranteed</p>
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
            <p className="font-rajdhani font-bold text-sm uppercase">Cycle Web Design</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup267} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Sports Exporters</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgOutline} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Export SEO</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup268} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Product Catalogue</p>
          </div>
          <div className="flex flex-col items-center space-y-2 col-span-2 md:col-span-1">
            <div className="relative size-10">
              <Image src={imgGroup} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">RFQ Forms</p>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
            The Opportunity
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Global Buyers Are Searching for You. They Just Can&apos;t Find You.
          </h2>
          <p className="font-rajdhani font-semibold text-lg text-[#535353] uppercase leading-relaxed">
            Cycle importers in Europe, the US, Africa, and the Middle East actively search Google for Indian cycle parts suppliers. They want to source from India — but they find your competitors, not you, because your competitors have better websites and SEO.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPPORTUNITY_ITEMS.map((item) => (
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

        {/* Client Quote Box */}
        <div className="bg-[#333] text-white p-8 rounded-3xl border-l-8 border-[#f4a31d] space-y-4 shadow-xl max-w-5xl mx-auto">
          <p className="font-rajdhani font-semibold text-xl sm:text-2xl text-[#f4a31d] leading-relaxed italic">
            &quot;Before Digital Kangaroos, we got zero direct enquiries from international buyers online. Within four months of the new website going live, we had three serious European importers contact us directly through our website.&quot;
          </p>
          <p className="font-rajdhani font-bold text-base uppercase text-white/90">
            — Cycle Parts Manufacturer, Ludhiana Industrial Area
          </p>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wide">
              Deliverables
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              Export-Ready Digital Assets
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ACCORDION_ROWS.map((label, i) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex justify-between items-center">
                <div>
                  <span className="font-rajdhani font-bold text-sm text-[#f4a31d] uppercase">Deliverable 0{i + 1}</span>
                  <h3 className="font-days-one text-xl text-[#242832] uppercase mt-1">{label}</h3>
                </div>
                <Plus className="size-6 text-[#f4a31d] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
            Content &amp; SEO Strategy
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            How We Get You Found by Global Cycle Buyers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUND_ITEMS.map((item, idx) => (
            <Card key={item.title} className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm border-t-4 border-t-[#f4a31d]">
              <CardContent className="p-0 space-y-3">
                <span className="font-days-one text-2xl text-[#f4a31d]">0{idx + 1}.</span>
                <h3 className="font-days-one text-xl text-[#333] uppercase">{item.title}</h3>
                <p className="font-rajdhani font-medium text-base text-[#535353] leading-relaxed">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#242832] uppercase leading-tight">
          Let&apos;s Put Ludhiana&apos;s Cycle Cluster on the <span className="text-[#f4a31d]">Global Map</span>
        </h2>
        <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto uppercase">
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
      </section>

      <PixelSiteFooter />
    </div>
  );
}
