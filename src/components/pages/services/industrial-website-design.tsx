import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileSearch, Globe, Layers, Zap, Phone, Layout, Search, Smartphone, MessageSquare } from "lucide-react";

export function IndustrialWebsiteDesignPage() {
  const STATS = [
    { value: "150+", label: "Industrial Websites Built" },
    { value: "3×", label: "Average RFQ Increase" },
    { value: "48hr", label: "Audit Delivery Time" }
  ];

  const PAIN_POINTS = [
    { num: "01", title: "Overseas Buyers Can't Trust What They See" },
    { num: "02", title: "No Clear Path to an RFQ Submission" },
    { num: "03", title: "Products Listed Without Technical Detail" },
    { num: "04", title: "Slow, Mobile-Unfriendly & Not Indexed" }
  ];

  const FEATURES = [
    "Custom Industrial Design",
    "Structured RFQ System",
    "Product / Capability Pages",
    "Certifications & Quality Display",
    "Core Web Vitals Optimised",
    "On-Page SEO From Day One",
    "Mobile-First Responsive Design",
    "WhatsApp & Enquiry Integration"
  ];

  const STAGES = [
    {
      num: "01",
      title: "Discovery",
      desc: "We audit your current site, study your competitors, and map your ideal buyer's search behaviour."
    },
    {
      num: "02",
      title: "Strategy",
      desc: "We design the sitemap, keyword map, and page structure — every page has a purpose."
    },
    {
      num: "03",
      title: "Design",
      desc: "Custom visual design aligned with your brand, industrial aesthetic, and buyer expectations."
    },
    {
      num: "04",
      title: "Build",
      desc: "Coded for speed, SEO, and conversion — not assembled from a page builder template."
    },
    {
      num: "05",
      title: "Launch & Train",
      desc: "We launch, test, and train your team on managing the website independently."
    }
  ];

  const SECTORS = [
    "Auto Parts Manufacturers",
    "Fasteners & Hardware Exporters",
    "Steel Fabrication Companies",
    "Machine Tools Suppliers",
    "Chemical Manufacturers",
    "Hosiery & Textile Manufacturers",
    "Packaging Manufacturers",
    "Pharma Companies",
    "MSME Manufacturers India",
    "Engineering Firms",
    "Export Companies India",
    "Cycle Manufacturers Ludhiana"
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wider">
              Web Design
            </span>

            <h1 className="font-days-one text-4xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
              Industrial Website Design That <span className="text-[#f4a31d]">Wins Orders.</span>
            </h1>

            <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              We build high-performance websites exclusively for manufacturers, exporters, and B2B industrial companies. Every design decision is made with one goal: turning your website visitor into an RFQ submission.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105">
                  Get a Free Website Audit
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link href="/our-work">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase">
                  See Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Bar/Grid */}
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

      {/* Marquee/Ticker Section */}
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

      {/* Problem Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
            The Problem We Solve
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Your Factory Is World-Class. <span className="text-[#f4a31d]">Your Website Is Not.</span>
          </h2>
          <p className="font-rajdhani font-semibold text-lg text-gray-600">
            Most manufacturing websites in India are outdated, slow, and fail to communicate what the company is actually capable of. International buyers move on in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAIN_POINTS.map((item, idx) => (
            <Card key={idx} className="bg-[#f5f5f5] rounded-3xl p-6 sm:p-8 border-l-4 border-[#f4a31d] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <span className="font-rajdhani font-bold text-2xl text-[#f4a31d]">{item.num}</span>
                <CardTitle className="font-days-one text-xl sm:text-2xl text-[#242832] uppercase leading-snug">
                  {item.title}
                </CardTitle>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Included Features Grid */}
      <section className="bg-[#f5f5f5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-y border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
              What You Get
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              What's Included in Every <span className="text-[#f4a31d]">Industrial Website</span>
            </h2>
            <p className="font-rajdhani font-semibold text-lg text-gray-600">
              Not a template. Not a page builder. A custom-built, fully optimised website designed around your specific manufacturing capability and your ideal buyer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feat, idx) => (
              <Card key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
                <CheckCircle2 className="size-6 text-[#f4a31d] shrink-0" />
                <span className="font-days-one text-lg text-[#242832] uppercase">{feat}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Stages */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
            Our Process
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            From Brief to <span className="text-[#f4a31d]">Live in 5 Stages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STAGES.map((stg, idx) => (
            <Card key={idx} className="bg-white rounded-3xl p-6 shadow-md border-t-4 border-[#f4a31d] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-rajdhani font-bold text-lg text-[#f4a31d]">{stg.num}</span>
                <CardTitle className="font-days-one text-xl text-[#242832] uppercase">{stg.title}</CardTitle>
                <CardDescription className="font-rajdhani font-semibold text-base text-gray-600 leading-relaxed">
                  {stg.desc}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Sectors We Design For */}
      <section className="bg-[#f5f5f5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
              Sectors We Design For
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              We've Built Websites for <span className="text-[#f4a31d]">Every Manufacturing Sector</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {SECTORS.map((sector, idx) => (
              <span
                key={idx}
                className="bg-white px-5 py-3 rounded-full border border-gray-300 font-rajdhani font-bold text-base text-gray-700 uppercase shadow-sm"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#242832] uppercase leading-tight">
          Ready for a Website That Actually Generates RFQs?
        </h2>
        <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto">
          Get a free audit of your current website. We'll show you exactly what's failing and what a proper industrial website would look like for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
          >
            <FileSearch className="size-5" />
            Request Free Website Audit
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
          Free · 48-Hour Delivery · No Obligation
        </p>
      </section>

      <PixelSiteFooter />
    </div>
  );
}