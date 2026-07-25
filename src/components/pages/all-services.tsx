import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Factory,
  Globe,
  TrendingUp,
  Smartphone,
  Camera,
  Megaphone,
  MapPin,
  ArrowRight,
  FileSearch,
  CheckCircle2,
  PhoneCall
} from "lucide-react";

export function AllServicesPage() {
  const services = [
    {
      title: "Industrial Website Design",
      href: "/services/industrial-website-design",
      icon: Factory,
      description: "High-performance websites built specifically for manufacturers, exporters, and B2B engineering companies. Credible, fast, mobile-first, and designed to convert international buyers into enquiries.",
      tags: ["Manufacturing Co. Sites", "Export-Ready", "Engineering Firms", "B2B Web Design", "Full Redesign", "SEO Preservation", "Speed Optimisation"]
    },
    {
      title: "Product Catalogue Websites",
      href: "/services/product-catalogue-websites",
      icon: Globe,
      description: "Structured, searchable product catalogue websites that let buyers find the exact component or product they need — with technical specs, material options, and a clear path to an RFQ submission.",
      tags: ["Product Pages", "Category Architecture", "Spec Sheets", "RFQ Forms"]
    },
    {
      title: "International Buyer-Ready Websites",
      href: "/services/website-redesign-for-industry",
      icon: ShieldCheck,
      description: "Websites built to impress procurement managers and sourcing engineers in the UK, USA, Germany, and Australia — with the right trust signals, certifications display, and inquiry flow they expect.",
      tags: ["Export-Focused", "Cart Display", "Multilingual Ready", "Trust Architecture"]
    },
    {
      title: "Export & International SEO",
      href: "/services/export-international-seo",
      icon: TrendingUp,
      description: "Multilingual, multi-market SEO that gets your business found in every country you sell into — driving qualified international traffic and inbound enquiries, consistently.",
      tags: ["Hreflang & Localisation", "Market Keyword Research", "International Link Building", "Country-Specific Content"]
    },
    {
      title: "B2B Branding",
      href: "/services/b2b-branding",
      icon: Megaphone,
      description: "Brand identity built for industrial companies — logos, visual systems, company profiles, and brand guidelines that communicate credibility and capability to serious buyers.",
      tags: ["Logo Design", "Company Profile", "Visual Identity", "Brand Guidelines"]
    },
    {
      title: "Website Redesign for Industry",
      href: "/services/website-redesign-for-industry",
      icon: CheckCircle2,
      description: "Your existing website is costing you leads every day it remains live. We rebuild it from the ground up — faster, more credible, fully optimised — without disrupting your existing business operations.",
      tags: ["Full Redesign", "SEO Preservation", "Speed Optimisation", "Content Migration"]
    },
    {
      title: "Mobile App Development",
      href: "/services/mobile-apps-development",
      icon: Smartphone,
      description: "Custom mobile applications for manufacturing and industrial businesses — from dealer portals and order management apps to customer-facing catalogues and enquiry apps.",
      tags: ["IOS & Android", "Dealer Portals", "Order Management", "React Native"]
    },
    {
      title: "Corporate Photography & Videography",
      href: "/services/corporate-photography-videography",
      icon: Camera,
      description: "Professional factory tours, product photography, team portraits, and brand videos — the visual content your website and export marketing materials actually need to build trust.",
      tags: ["Factory Photography", "Product Shoots", "Brand Videos", "Export Catalogues"]
    },
    {
      title: "Local & Google Business SEO",
      href: "/services/local-google-business-seo",
      icon: MapPin,
      description: "Google Business Profile optimisation, local citation building, and map pack ranking; combined with generative search optimisation to ensure manufacturers appear wherever buyers are searching.",
      tags: ["Google Business", "Local SEO", "City Targeting", "Map Pack", "Generative Search"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <PixelHeader activeHref="/services" />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="font-days-one text-3xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
              Every Service Built For <span className="text-[#f4a31d]">Industry</span>.
            </h1>
            <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              We don't offer a menu of generic digital services. Every service we provide is designed from the ground up for manufacturers, exporters, and B2B industrial companies — because that specificity is what makes the difference between a website that looks good and one that generates RFQs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-md transition-transform hover:scale-105"
              >
                <FileSearch className="size-5" />
                Get Free Audit
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#333] border-l-8 border-l-[#f4a31d] p-6 rounded-2xl text-white space-y-1">
              <div className="font-days-one text-4xl text-[#f4a31d]">8+</div>
              <div className="font-rajdhani font-semibold text-lg uppercase">Services for B2B Industry</div>
            </div>
            <div className="bg-[#333] border-l-8 border-l-[#f4a31d] p-6 rounded-2xl text-white space-y-1">
              <div className="font-days-one text-4xl text-[#f4a31d]">150+</div>
              <div className="font-rajdhani font-semibold text-lg uppercase">Industrial Clients Served</div>
            </div>
            <div className="bg-[#333] border-l-8 border-l-[#f4a31d] p-6 rounded-2xl text-white space-y-1">
              <div className="font-days-one text-4xl text-[#f4a31d]">100%</div>
              <div className="font-rajdhani font-semibold text-lg uppercase">Industrial & B2B Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-[#333] py-4 text-white font-rajdhani font-bold text-base sm:text-lg uppercase overflow-hidden">
        <div className="flex items-center justify-around gap-8 whitespace-nowrap">
          <span>Engineering Firm Web Design</span>
          <span>•</span>
          <span>Web Design For Manufacturers</span>
          <span>•</span>
          <span>Industrial SEO Agency India</span>
          <span>•</span>
          <span>B2B Website Design & Development</span>
          <span>•</span>
          <span>Export Company Website Design</span>
        </div>
      </div>

      {/* Core Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
            Core Services
          </h2>
          <p className="font-rajdhani font-semibold text-lg text-gray-600 uppercase">
            These are the foundation services every industrial manufacturer and exporter needs to establish a credible, high-performing digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="bg-[#f5f5f5] hover:bg-white border-2 border-transparent hover:border-[#f4a31d] rounded-[32px] p-8 space-y-6 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="size-16 rounded-2xl bg-[#f4a31d] flex items-center justify-center text-white shadow-md">
                    <Icon className="size-8" />
                  </div>

                  <h3 className="font-days-one text-2xl text-[#333] uppercase group-hover:text-[#f4a31d] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="font-rajdhani font-medium text-gray-700 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-[#f4a31d]/10 text-[#f4a31d] text-xs font-rajdhani font-semibold rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200/60">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-rajdhani font-bold text-lg text-[#333] group-hover:text-[#f4a31d] uppercase transition-colors"
                  >
                    View Details <ArrowRight className="size-5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Why Specialisation Wins Section */}
      <section className="py-20 bg-[#f5f5f5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          <div className="space-y-4">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              Why Specialisation Wins
            </span>
            <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
              One Agency. <span className="text-[#f4a31d]">One Niche</span>. Maximum Results.
            </h2>
            <p className="font-rajdhani font-semibold text-lg text-gray-700 max-w-2xl mx-auto">
              A generalist agency splits its expertise across dozens of industries. We put 100% of our knowledge into one — yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="p-8 bg-white rounded-3xl space-y-4 shadow-sm border border-gray-100">
              <span className="font-rajdhani font-bold text-sm text-red-500 uppercase">The Problem</span>
              <h3 className="font-days-one text-xl text-[#333] uppercase">Generalist Agencies Don't Speak Industrial</h3>
              <p className="font-rajdhani text-gray-600 text-base leading-relaxed">
                They don't know what ISO certifications matter to German buyers, what an RFQ form requires, or how to write about CNC machining tolerances.
              </p>
            </Card>

            <Card className="p-8 bg-white rounded-3xl space-y-4 shadow-sm border-2 border-[#f4a31d]">
              <span className="font-rajdhani font-bold text-sm text-[#f4a31d] uppercase">The Difference</span>
              <h3 className="font-days-one text-xl text-[#333] uppercase">A Decade Learning Your Industry</h3>
              <p className="font-rajdhani text-gray-600 text-base leading-relaxed">
                We know industrial terminology, export buyer expectations, and SEO strategies specifically tuned for manufacturing procurement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Audit Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
          Not Sure Which Service You Need?
        </h2>
        <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Start with a free audit. We'll tell you exactly what's holding your current digital presence back, which services would make the most impact, and what a realistic timeline looks like.
        </p>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-10 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
          >
            <FileSearch className="size-5" />
            Get Your Free Website Audit
          </Link>
        </div>

        <p className="font-rajdhani font-semibold text-sm text-gray-500 uppercase tracking-wider">
          Free · No Obligation · Delivered in 48 Hours
        </p>
      </section>

      {/* Footer */}
      <PixelSiteFooter />
    </div>
  );
}

function ShieldCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}