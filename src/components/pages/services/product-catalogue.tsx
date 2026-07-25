import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileSearch, Phone } from "lucide-react";

export function ProductCataloguePage() {
  const STATS = [
    { value: "∞", label: "Products Supported" },
    { value: "3min", label: "Avg. Buyer to RFQ Time" },
    { value: "SEO+", label: "Every Page Optimised" }
  ];

  const FEATURES = [
    "Product Category Architecture",
    "Technical Specification Pages",
    "Drawing & Datasheet Downloads",
    "Product-Level RFQ Forms",
    "SEO-Optimised Product Pages",
    "Filter & Search Functionality"
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wider">
              Product Catalogue
            </span>

            <h1 className="font-days-one text-4xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
              Searchable Product Catalogues That <span className="text-[#f4a31d]">Generate RFQs.</span>
            </h1>

            <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              We build structured, searchable product catalogue websites for manufacturers and exporters — so buyers can find the exact product they need, read the technical specs, and submit an RFQ in under 3 minutes.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105">
                  Discuss Your Catalogue
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link href="/our-work">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase">
                  See Examples
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 space-y-4">
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-[#333] text-white p-6 rounded-2xl border-l-8 border-[#f4a31d] flex items-center justify-between shadow-xl">
                <div>
                  <div className="font-days-one text-4xl sm:text-5xl text-[#f4a31d]">{stat.value}</div>
                  <div className="font-rajdhani font-medium text-lg uppercase tracking-wide text-gray-200 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Marquee Banner */}
      <section className="bg-[#333] text-white py-4 border-y-4 border-[#f4a31d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 font-rajdhani font-semibold text-sm sm:text-base uppercase tracking-wider text-gray-200">
          <span>Engineering Firm Web Design</span>
          <span className="hidden md:inline text-[#f4a31d]">•</span>
          <span>RFQ Form Design</span>
          <span className="hidden md:inline text-[#f4a31d]">•</span>
          <span>Web Design for Manufacturers</span>
          <span className="hidden md:inline text-[#f4a31d]">•</span>
          <span>Industrial SEO Agency India</span>
        </div>
      </section>

      {/* Why Your Catalogue Matters */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
            Why Your Catalogue Matters
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Your Products Are Your <span className="text-[#f4a31d]">Best Sales Team.</span> Are They Working?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => (
            <Card key={idx} className="bg-[#f5f5f5] rounded-3xl p-6 border-t-4 border-[#f4a31d] shadow-sm flex items-center gap-4">
              <CheckCircle2 className="size-6 text-[#f4a31d] shrink-0" />
              <CardTitle className="font-days-one text-xl text-[#242832] uppercase leading-snug">
                {feat}
              </CardTitle>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f5f5f5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#242832] uppercase leading-tight">
            Turn Your Product List Into a Lead Generation Machine.
          </h2>
          <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto">
            A properly built product catalogue website does what your sales team does — but 24 hours a day, in every time zone, for every buyer who finds you on Google.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
            >
              <FileSearch className="size-5" />
              Discuss Your Catalogue Project
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
            Free Consultation · No Obligation
          </p>
        </div>
      </section>

      <PixelSiteFooter />
    </div>
  );
}
