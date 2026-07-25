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

const CHECKLIST = [
  {
    title: "GMP / CGMP Certification",
    body: "WHO-GMP, US FDA, EU GMP — certifications need to be current, visible, and linked to downloadable documents.",
  },
  {
    title: "Product Specifications",
    body: "CAS numbers, molecular formula, purity grade, pharmacopoeial standards — all easily accessible per product.",
  },
  {
    title: "COA & TDS Availability",
    body: "Certificates of Analysis and Technical Data Sheets available as downloadable PDFs per product.",
  },
  {
    title: "Manufacturing Infrastructure",
    body: "Facility photos, reactor capacity, clean room details — buyers want to see your scale before they commit.",
  },
  {
    title: "Packaging & Logistics",
    body: "UN-certified packaging, MSDS documentation, and export shipping capability clearly stated.",
  },
  {
    title: "Regulatory Affairs Contact",
    body: "A dedicated regulatory contact page — international buyers need to know who to call about compliance.",
  },
];

const APPROACH_ROWS = [
  "Product Monograph Pages",
  "API & Chemical SEO",
  "Regulatory Compliance Section",
  "Sample & RFQ Request Forms",
];

export function ChemicalPharmaceuticalManufacturersPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden font-rajdhani">
      <PixelHeader activeHref="/industries" />

      {/* Hero Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block font-rajdhani font-semibold text-lg text-[#f4a31d] uppercase tracking-wide">
              Chemical &amp; Pharma Companies
            </span>

            <h1 className="font-days-one text-3xl sm:text-4xl lg:text-5xl uppercase text-[#333] leading-tight tracking-tight">
              In Regulated Industries, Your Website Is Your First <span className="text-[#f4a31d]">Compliance Check</span>
            </h1>

            <div className="border-l-4 border-[#f4a31d] pl-4 sm:pl-6 py-1">
              <p className="font-rajdhani font-semibold text-lg sm:text-xl text-[#333] uppercase leading-relaxed">
                Chemical and pharma buyers don&apos;t just evaluate price — they evaluate your documentation, certifications, regulatory compliance, and quality systems before they even send an inquiry.
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
                <p className="font-days-one text-4xl text-[#f4a31d]">$28B+</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">India Pharma Export Market</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">GMP</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">Certification Buyers Expect Online</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-days-one text-4xl text-[#f4a31d]">4X</p>
                <p className="font-rajdhani font-semibold text-base uppercase text-white/90">More Inquiries With Compliant Website</p>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-2xl p-4 flex items-center gap-4 border border-gray-200">
              <div className="relative size-16 shrink-0 rounded-full overflow-hidden border-2 border-[#f4a31d] bg-[#333]">
                <Image src={imgSadsaas1} alt="ISO Certified" fill className="object-cover" />
              </div>
              <div>
                <p className="font-rajdhani font-bold text-lg text-[#333] uppercase">ISO 9001:2015 Certified</p>
                <p className="font-rajdhani font-semibold text-sm text-[#535353] uppercase">Quality Compliance Verified</p>
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
            <p className="font-rajdhani font-bold text-sm uppercase">Pharma Web Design</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup267} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Chemical Exporters</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgOutline} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">API &amp; Chemical SEO</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative size-10">
              <Image src={imgGroup268} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">Compliance Sites</p>
          </div>
          <div className="flex flex-col items-center space-y-2 col-span-2 md:col-span-1">
            <div className="relative size-10">
              <Image src={imgGroup} alt="Icon" fill className="object-contain" />
            </div>
            <p className="font-rajdhani font-bold text-sm uppercase">RFQ &amp; Sample Forms</p>
          </div>
        </div>
      </section>

      {/* Six Checklist Items */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
            What Chemical &amp; Pharma Buyers Verify Online
          </span>
          <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
            Six Things International Buyers Check on Your Website Before Emailing You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHECKLIST.map((item, idx) => (
            <Card key={item.title} className="bg-[#f5f5f5] border-none rounded-3xl p-6 border-t-4 border-[#f4a31d] hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <span className="font-days-one text-3xl text-[#f4a31d]">0{idx + 1}.</span>
                <h3 className="font-days-one text-xl text-[#333] uppercase">{item.title}</h3>
                <p className="font-rajdhani font-medium text-base text-[#535353] leading-relaxed">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wide">
              Our Approach
            </span>
            <h2 className="font-days-one text-3xl sm:text-4xl text-[#333] uppercase leading-tight">
              Compliant by Design. SEO-Ready. Buyer-Trusted.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {APPROACH_ROWS.map((label, i) => (
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#242832] uppercase leading-tight">
          Is Your Chemical or Pharma Website Winning <span className="text-[#f4a31d]">International Buyers?</span>
        </h2>
        <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto uppercase">
          Free website audit for chemical manufacturers and pharmaceutical exporters across India.
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
