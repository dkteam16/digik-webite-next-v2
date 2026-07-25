import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileSearch, Phone } from "lucide-react";

export function LocalSeoPage() {
  const STATS = [
    { value: "6mo", label: "Avg. Time to First Rankings" },
    { value: "3×", label: "Avg. Lead Volume Increase" },
    { value: "0₹", label: "Per Lead Once Ranked" }
  ];

  const SERVICES = [
    "Industrial Keyword Research",
    "Technical SEO Audit & Fixes",
    "On-Page Optimisation",
    "Technical Content Writing",
    "Link Building for Industry",
    "Industry Page Architecture",
    "Conversion Rate Optimisation",
    "Generative Search Optimisation",
    "Monthly Reporting & Calls"
  ];

  const KEYWORDS = [
    "SEO for Manufacturing Companies India",
    "B2B Lead Generation SEO",
    "Export Business SEO India",
    "Google Ranking for Industrial Products",
    "Technical SEO for Manufacturer Website",
    "Organic Leads for B2B Company",
    "Local SEO for Manufacturing Unit",
    "Industrial SEO Agency India",
    "B2B SEO Services India",
    "International SEO for Indian Exporters"
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wider">
              Industrial SEO
            </span>

            <h1 className="font-days-one text-4xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
              SEO That Gets Your Factory <span className="text-[#f4a31d]">Found on Google.</span>
            </h1>

            <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              We build SEO strategies for manufacturers and B2B industrial companies that rank on Google for the terms your buyers actually search — generating consistent, qualified inbound enquiries every month.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105">
                  Get a Free SEO Audit
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link href="/our-work">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase">
                  See Case Studies
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

      {/* Services Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
            Our SEO Services
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Everything Included in Our <span className="text-[#f4a31d]">Manufacturing SEO Programme</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => (
            <Card key={idx} className="bg-[#f5f5f5] rounded-3xl p-6 border-t-4 border-[#f4a31d] shadow-sm flex items-center gap-4">
              <CheckCircle2 className="size-6 text-[#f4a31d] shrink-0" />
              <CardTitle className="font-days-one text-xl text-[#242832] uppercase leading-snug">
                {srv}
              </CardTitle>
            </Card>
          ))}
        </div>
      </section>

      {/* Keywords Section */}
      <section className="bg-[#f5f5f5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-y border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
              Keywords We Target
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              The <span className="text-[#f4a31d]">Industrial Keywords</span> We Rank Your Business For
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {KEYWORDS.map((kw, idx) => (
              <span
                key={idx}
                className="bg-white px-5 py-3 rounded-full border border-gray-300 font-rajdhani font-bold text-base text-gray-700 uppercase shadow-sm"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#242832] uppercase leading-tight">
          Stop Paying for Leads. Start Owning Them.
        </h2>
        <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto">
          IndiaMart leads stop the moment you stop paying. SEO-driven leads keep coming — and compound every month. Get your free SEO audit and see what's possible for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
          >
            <FileSearch className="size-5" />
            Request Free SEO Audit
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
          Free · Detailed · 48hr Delivery
        </p>
      </section>

      <PixelSiteFooter />
    </div>
  );
}
