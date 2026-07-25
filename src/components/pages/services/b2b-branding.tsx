import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageSquare, Phone } from "lucide-react";

export function B2BBrandingPage() {
  const STATS = [
    { value: "B2B", label: "Industrial Branding Only" },
    { value: "100%", label: "Owned by You" },
    { value: "∞", label: "Formats Delivered" }
  ];

  const ACCORDION_ROWS = [
    "Logo Design & Visual Identity",
    "Brand Guidelines Document",
    "Company Profile / Capabilities Brochure",
    "Business Stationery & Collateral",
    "Social Media Brand Kit",
    "Exhibition & Trade Fair Materials",
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wider">
              B2B Branding
            </span>

            <h1 className="font-days-one text-4xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
              Brand Identity Built for <span className="text-[#f4a31d]">Industrial Companies.</span>
            </h1>

            <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl border-l-4 border-[#f4a31d] pl-4">
              We create brand identities for manufacturers, exporters, and B2B industrial companies that communicate capability, credibility, and seriousness — to buyers, partners, and procurement teams who make decisions based on trust.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105">
                  Discuss Your Branding
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link href="/our-work">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase">
                  See Brand Work
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

      {/* Deliverables Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="font-rajdhani font-semibold text-xl text-[#f4a31d] uppercase tracking-wide">
            Why Branding Matters
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Your Identity Is the First Impression You Make. <span className="text-[#f4a31d]">Is It Working?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACCORDION_ROWS.map((item, idx) => (
            <Card key={idx} className="bg-[#f5f5f5] rounded-3xl p-6 border-t-4 border-[#f4a31d] shadow-sm flex items-center gap-4">
              <CheckCircle2 className="size-6 text-[#f4a31d] shrink-0" />
              <CardTitle className="font-days-one text-xl text-[#242832] uppercase leading-snug">
                {item}
              </CardTitle>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f5f5f5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#242832] uppercase leading-tight">
            Your Brand Is the First Thing a Buyer Judges You By.
          </h2>
          <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto">
            A credible, professional brand identity isn't a luxury for industrial companies — it's a prerequisite for being taken seriously by international buyers. Let's build yours properly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare className="size-5" />
              Discuss Your Branding Project
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
