import Link from "next/link";
import Image from "next/image";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, FileSearch, Globe, Factory, ShieldCheck, ChevronRight, Star, Award, TrendingUp, Phone, MessageSquare, FileText, ArrowDown } from "lucide-react";

const img134641 = "/images/homepage/img134641.jpg";
const imgImage1 = "/images/homepage/imgImage1.png";
const imgTransparent1 = "/images/homepage/imgTransparent1.png";
const imgDk13 = "/images/homepage/imgDk13.jpg";
const imgImg2892 = "/images/homepage/imgImg2892.jpg";
const imgImg2902 = "/images/homepage/imgImg2902.jpg";
const imgUntitled2 = "/images/homepage/imgUntitled2.png";
const imgImg2912 = "/images/homepage/imgImg2912.jpg";
const img1197212 = "/images/homepage/img1197212.jpg";
const imgImage208 = "/images/homepage/imgImage208.png";
const imgImage209 = "/images/homepage/imgImage209.png";
const imgImage213 = "/images/homepage/imgImage213.png";
const imgImage115 = "/images/homepage/imgImage115.png";
const imgImage210 = "/images/homepage/imgImage210.png";
const imgSddasas1 = "/images/homepage/imgSddasas1.png";
const imgImage205 = "/images/homepage/imgImage205.png";
const imgImage206 = "/images/homepage/imgImage206.png";
const imgGroup196 = "/images/homepage/imgGroup196.svg";
const imgGroup199 = "/images/homepage/imgGroup199.svg";
const imgGroup3 = "/images/homepage/imgGroup3.svg";
const imgMainLogo1 = "/images/homepage/imgMainLogo1.svg";
const imgLayer1 = "/images/homepage/imgLayer1.svg";
const imgSadasda1 = "/images/homepage/imgSadasda1.png";
const imgIn1 = "/images/homepage/imgIn1.png";
const imgGroup219 = "/images/homepage/imgGroup219.svg";
const imgRrr1 = "/images/homepage/imgRrr1.png";
const imgGroup6 = "/images/homepage/imgGroup6.svg";
const imgSt1 = "/images/homepage/imgSt1.png";
const imgGroup7 = "/images/homepage/imgGroup7.svg";
const imgSdasas1 = "/images/homepage/imgSdasas1.png";

export function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      {/* Sticky Responsive Header for Homepage */}
      <PixelHeader isHome />

      {/* Floating Action Buttons on Right Edge */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        <a
          href="tel:+919814820845"
          className="size-11 sm:size-12 rounded-full bg-[#f4a31d] hover:bg-[#d98d12] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          title="Call Us"
        >
          <Phone className="size-5 sm:size-6" />
        </a>
        <a
          href="https://wa.me/919814820845"
          target="_blank"
          rel="noopener noreferrer"
          className="size-11 sm:size-12 rounded-full bg-[#f4a31d] hover:bg-[#d98d12] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          title="WhatsApp Us"
        >
          <MessageSquare className="size-5 sm:size-6" />
        </a>
        <Link
          href="/contact"
          className="size-11 sm:size-12 rounded-full bg-[#f4a31d] hover:bg-[#d98d12] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          title="Get Quote / Audit"
        >
          <FileText className="size-5 sm:size-6" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[88vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 bg-cover bg-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imgImage1}
            alt="B2B Web Design Agency"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fade-in flex flex-col items-center">
          {/* Main Logo in Hero Center */}
          <div className="relative w-72 sm:w-[450px] md:w-[500px] h-24 sm:h-36 md:h-40 mx-auto">
            <Image
              src={imgTransparent1}
              alt="Digital Kangaroos"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="font-days-one text-2xl sm:text-4xl md:text-5xl text-white uppercase leading-tight tracking-tight">
            B2B WEB DESIGN AGENCY
          </h1>

          <p className="font-rajdhani font-semibold text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We build high-performance websites & SEO strategies exclusively for manufacturers, exporters, and B2B industrial companies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
            >
              <FileSearch className="size-5" />
              Get Free Website Audit
            </Link>
            <Link
              href="/our-work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase transition-colors"
            >
              <span>See Our Work</span>
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>

        {/* Click For More Badge at Hero Bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#clients"
            className="inline-flex flex-col items-center justify-center px-6 py-2 rounded-full border border-white/40 bg-black/40 hover:bg-black/70 text-white font-rajdhani font-bold text-xs uppercase tracking-widest transition-all hover:scale-105"
          >
            <span>CLICK FOR MORE</span>
            <ArrowDown className="size-4 animate-bounce mt-0.5 text-[#f4a31d]" />
          </a>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-[#333] border-y-4 border-[#f4a31d] py-4 text-white font-rajdhani font-bold text-base sm:text-xl uppercase overflow-hidden">
        <div className="flex items-center justify-around gap-8 whitespace-nowrap animate-marquee">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#f4a31d]" />
            Engineering Firm Web Design
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#f4a31d]" />
            Web Design For Manufacturers
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#f4a31d]" />
            Industrial SEO Agency India
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#f4a31d]" />
            B2B Website Design & Development
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#f4a31d]" />
            RFQ Form Design
          </span>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <section className="bg-[#333] py-10 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-2 p-4">
            <div className="font-rajdhani font-bold text-4xl sm:text-5xl text-[#f4a31d]">150+</div>
            <div className="font-rajdhani font-semibold text-sm sm:text-lg text-white uppercase">Industrial Websites Delivered</div>
          </div>
          <div className="space-y-2 p-4">
            <div className="font-rajdhani font-bold text-4xl sm:text-5xl text-[#f4a31d]">3X</div>
            <div className="font-rajdhani font-semibold text-sm sm:text-lg text-white uppercase">Average RFQ Increase in 6 Months</div>
          </div>
          <div className="space-y-2 p-4">
            <div className="font-rajdhani font-bold text-4xl sm:text-5xl text-[#f4a31d]">12+</div>
            <div className="font-rajdhani font-semibold text-sm sm:text-lg text-white uppercase">Manufacturing Sectors Served</div>
          </div>
          <div className="space-y-2 p-4">
            <div className="font-rajdhani font-bold text-4xl sm:text-5xl text-[#f4a31d]">100%</div>
            <div className="font-rajdhani font-semibold text-sm sm:text-lg text-white uppercase">B2B & Industrial Focus</div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
            Our Latest Work
          </h2>
          <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-600 uppercase">
            Check out what we have been crafting. Branding to Videography, website to SEO. We've done it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="overflow-hidden border-2 border-gray-100 hover:border-[#f4a31d] rounded-[32px] transition-all hover:shadow-xl group">
            <div className="relative h-64 w-full bg-gray-100">
              <Image src={img1197212} alt="Avon Steel" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6 space-y-4 bg-white">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#f4a31d]/10 text-[#f4a31d] text-xs font-bold rounded-full uppercase">Website</span>
                <span className="px-3 py-1 bg-[#f4a31d]/10 text-[#f4a31d] text-xs font-bold rounded-full uppercase">Photography</span>
              </div>
              <h3 className="font-days-one text-2xl text-[#333] uppercase">Avon Steel</h3>
              <Link href="/work/avon-steel" className="inline-flex items-center gap-2 font-rajdhani font-bold text-[#f4a31d] uppercase hover:underline">
                View Case Study <ArrowRight className="size-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="overflow-hidden border-2 border-gray-100 hover:border-[#f4a31d] rounded-[32px] transition-all hover:shadow-xl group">
            <div className="relative h-64 w-full bg-gray-100">
              <Image src={imgImage208} alt="Q&Q Solutions" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6 space-y-4 bg-white">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#f4a31d]/10 text-[#f4a31d] text-xs font-bold rounded-full uppercase">SEO</span>
                <span className="px-3 py-1 bg-[#f4a31d]/10 text-[#f4a31d] text-xs font-bold rounded-full uppercase">Branding</span>
              </div>
              <h3 className="font-days-one text-2xl text-[#333] uppercase">Q&Q Solutions</h3>
              <Link href="/work/qq-solutions" className="inline-flex items-center gap-2 font-rajdhani font-bold text-[#f4a31d] uppercase hover:underline">
                View Case Study <ArrowRight className="size-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="overflow-hidden border-2 border-gray-100 hover:border-[#f4a31d] rounded-[32px] transition-all hover:shadow-xl group">
            <div className="relative h-64 w-full bg-gray-100">
              <Image src={imgImage209} alt="Right Horizons" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6 space-y-4 bg-white">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#f4a31d]/10 text-[#f4a31d] text-xs font-bold rounded-full uppercase">Videography</span>
                <span className="px-3 py-1 bg-[#f4a31d]/10 text-[#f4a31d] text-xs font-bold rounded-full uppercase">Website</span>
              </div>
              <h3 className="font-days-one text-2xl text-[#333] uppercase">Right Horizons</h3>
              <Link href="/our-work" className="inline-flex items-center gap-2 font-rajdhani font-bold text-[#f4a31d] uppercase hover:underline">
                View Case Study <ArrowRight className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-6">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-10 rounded-full uppercase shadow-md transition-transform hover:scale-105"
          >
            Explore All Projects
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* Built For Manufacturers Section */}
      <section className="py-20 bg-[#f5f5f5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              Web Design & SEO Agency — India
            </span>
            <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
              Built For <span className="text-[#f4a31d]">Manufacturers</span>. Engineered To Win.
            </h2>
            <p className="font-rajdhani font-medium text-lg sm:text-xl text-gray-700 leading-relaxed">
              We build high-performance websites and SEO strategies exclusively for manufacturers, exporters, and B2B industrial companies — so your next customer finds you, trusts you, and sends you the RFQ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f4a31d] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-md hover:bg-[#d98d12] transition-colors"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#333] text-[#333] font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase hover:bg-[#333] hover:text-white transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
              <Image src={imgDk13} alt="Manufacturing facility" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
              <Image src={imgImg2892} alt="Industrial work" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
              <Image src={imgImg2902} alt="Machining parts" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
              <Image src={imgImg2912} alt="Engineering factory" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem We Solve Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">The Problem We Solve</span>
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
            Your Factory Is World-Class. <span className="text-[#f4a31d]">Your Website</span> Is Not.
          </h2>
          <p className="font-rajdhani font-medium text-lg text-gray-600">
            Most manufacturing companies in India have outdated, slow, or generic websites that fail to communicate their true capability to international buyers. We fix that.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-[#f5f5f5] border-l-8 border-l-[#f4a31d] rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
            <div className="font-rajdhani font-bold text-xl text-[#f4a31d]">01</div>
            <h3 className="font-days-one text-2xl text-[#333] uppercase">Overseas Buyers Can't Find You</h3>
            <p className="font-rajdhani text-gray-700 text-lg leading-relaxed">
              If your manufacturing company doesn't rank on Google for the terms your ideal buyers are searching — "casting supplier India," "precision machined parts manufacturer" — those buyers go to your competitors.
            </p>
          </Card>

          <Card className="p-8 bg-[#f5f5f5] border-l-8 border-l-[#f4a31d] rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
            <div className="font-rajdhani font-bold text-xl text-[#f4a31d]">02</div>
            <h3 className="font-days-one text-2xl text-[#333] uppercase">Your Website Doesn't Build Trust</h3>
            <p className="font-rajdhani text-gray-700 text-lg leading-relaxed">
              A buyer from Germany or the UK visits your site and sees a 2012-era layout with stock photos and no certifications displayed. They move on immediately.
            </p>
          </Card>

          <Card className="p-8 bg-[#f5f5f5] border-l-8 border-l-[#f4a31d] rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
            <div className="font-rajdhani font-bold text-xl text-[#f4a31d]">03</div>
            <h3 className="font-days-one text-2xl text-[#333] uppercase">IndiaMart Owns Your Leads</h3>
            <p className="font-rajdhani text-gray-700 text-lg leading-relaxed">
              You're paying lakhs every year for leads that are low-quality, price-driven, and controlled by a third-party platform. You've built nothing that you truly own.
            </p>
          </Card>

          <Card className="p-8 bg-[#333] text-white border-l-8 border-l-[#f4a31d] rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
            <div className="font-rajdhani font-bold text-xl text-[#f4a31d]">04</div>
            <h3 className="font-days-one text-2xl uppercase">No RFQ System, No Enquiry Flow</h3>
            <p className="font-rajdhani text-gray-300 text-lg leading-relaxed">
              Your website has no structured RFQ form, no product catalogue with technical specifications, and no clear pathway for a serious buyer to submit an inquiry.
            </p>
          </Card>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#f9f9f9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">What We Do</span>
            <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
              Web & SEO Services <span className="text-[#f4a31d]">Built</span> For Industrial Companies
            </h2>
            <p className="font-rajdhani font-medium text-lg text-gray-600">
              Every service we offer is designed around one goal: making your manufacturing or B2B company easier to find, easier to trust, and easier to buy from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 border-gray-100 hover:border-[#f4a31d] rounded-[32px] space-y-6 transition-all hover:shadow-xl group">
              <div className="size-14 rounded-2xl bg-[#f4a31d]/10 flex items-center justify-center text-[#f4a31d]">
                <Factory className="size-8" />
              </div>
              <h3 className="font-days-one text-2xl text-[#333] uppercase group-hover:text-[#f4a31d] transition-colors">
                Industrial Website Design
              </h3>
              <p className="font-rajdhani text-gray-600 text-lg leading-relaxed">
                High-performance websites built specifically for manufacturers, exporters, and B2B engineering companies.
              </p>
              <Link href="/services/industrial-website-design" className="inline-flex items-center gap-2 font-rajdhani font-bold text-[#f4a31d] uppercase hover:underline">
                Learn More <ArrowRight className="size-4" />
              </Link>
            </Card>

            <Card className="p-8 bg-white border-2 border-gray-100 hover:border-[#f4a31d] rounded-[32px] space-y-6 transition-all hover:shadow-xl group">
              <div className="size-14 rounded-2xl bg-[#f4a31d]/10 flex items-center justify-center text-[#f4a31d]">
                <Globe className="size-8" />
              </div>
              <h3 className="font-days-one text-2xl text-[#333] uppercase group-hover:text-[#f4a31d] transition-colors">
                Product Catalogue Websites
              </h3>
              <p className="font-rajdhani text-gray-600 text-lg leading-relaxed">
                Structured, searchable product catalogue websites that let buyers find exact components with specs.
              </p>
              <Link href="/services/product-catalogue-websites" className="inline-flex items-center gap-2 font-rajdhani font-bold text-[#f4a31d] uppercase hover:underline">
                Learn More <ArrowRight className="size-4" />
              </Link>
            </Card>

            <Card className="p-8 bg-white border-2 border-gray-100 hover:border-[#f4a31d] rounded-[32px] space-y-6 transition-all hover:shadow-xl group">
              <div className="size-14 rounded-2xl bg-[#f4a31d]/10 flex items-center justify-center text-[#f4a31d]">
                <TrendingUp className="size-8" />
              </div>
              <h3 className="font-days-one text-2xl text-[#333] uppercase group-hover:text-[#f4a31d] transition-colors">
                Website Redesign for Industry
              </h3>
              <p className="font-rajdhani text-gray-600 text-lg leading-relaxed">
                We rebuild your site from the ground up — faster, more credible, fully optimised for RFQs.
              </p>
              <Link href="/services/website-redesign-for-industry" className="inline-flex items-center gap-2 font-rajdhani font-bold text-[#f4a31d] uppercase hover:underline">
                Learn More <ArrowRight className="size-4" />
              </Link>
            </Card>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#333] hover:bg-black text-white font-rajdhani font-bold text-lg h-14 px-10 rounded-full uppercase shadow-md transition-transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Logos Section */}
      <section className="py-16 sm:py-20 bg-[#333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              Trusted By Industry Leaders
            </span>
            <h2 className="font-days-one text-3xl sm:text-5xl uppercase leading-tight">
              Some Of Our <span className="text-[#f4a31d]">Clients</span>
            </h2>
            <p className="font-rajdhani font-semibold text-lg text-gray-300 uppercase">
              Empowering top manufacturers, exporters, and industrial brands across India and global markets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center justify-items-center">
            {/* Logo 1 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgGroup196} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 2 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgGroup199} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 3 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgGroup3} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 4 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgMainLogo1} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 5 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgLayer1} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 6 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgSddasas1} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 7 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgSadasda1} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 8 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgIn1} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 9 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105 gap-1">
              <Image src={imgImage115} alt="Client Logo" width={35} height={35} className="object-contain" />
              <Image src={imgImage210} alt="Client Logo" width={90} height={35} className="object-contain" />
            </div>
            {/* Logo 10 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgGroup219} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 11 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgRrr1} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 12 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgGroup6} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 13 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgSt1} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 14 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgGroup7} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 15 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105">
              <Image src={imgSdasas1} alt="Client Logo" width={130} height={50} className="object-contain max-h-16" />
            </div>
            {/* Logo 16 */}
            <div className="p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl w-full flex items-center justify-center h-24 sm:h-28 transition-all hover:scale-105 flex-col gap-1">
              <Image src={imgImage205} alt="Client Logo" width={50} height={30} className="object-contain" />
              <Image src={imgImage206} alt="Client Logo" width={100} height={20} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">Industries We Serve</span>
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
            We Speak <span className="text-[#f4a31d]">Industrial</span>. Your Sector, Our Expertise.
          </h2>
          <p className="font-rajdhani font-medium text-lg text-gray-600">
            We specialize in manufacturers, exporters, and B2B industrial companies — which means we already understand your buyers, process, and terminology.
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {[
            { title: "Auto Parts & Engineering Components", href: "/industries/auto-parts-engineering" },
            { title: "Fasteners & Hardware Manufacturers", href: "/industries/fasteners-hardware" },
            { title: "Steel & Metal Fabrication", href: "/industries/steel-metal-fabrication" },
            { title: "Castings & Precision Machining", href: "/industries/machine-tools-precision" },
            { title: "Hosiery & Textile Exporters", href: "/industries/hosiery-textile-exporters" },
            { title: "Cycle & Sports Equipment", href: "/industries/cycle-sports-equipment" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center justify-between p-6 bg-[#f5f5f5] hover:bg-[#f4a31d] text-[#333] hover:text-white rounded-[64px] transition-all duration-300 shadow-sm hover:shadow-lg group"
            >
              <span className="font-rajdhani font-bold text-xl sm:text-2xl uppercase">{item.title}</span>
              <div className="size-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl group-hover:bg-white group-hover:text-[#f4a31d]">
                +
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center pt-6">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-10 rounded-full uppercase shadow-md transition-transform hover:scale-105"
          >
            Explore All Industries
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
          Ready to Upgrade Your Industrial Online Presence?
        </h2>
        <p className="font-rajdhani font-semibold text-xl text-[#535353] max-w-2xl mx-auto">
          Free website audit for manufacturers. No commitment, just total clarity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase shadow-lg transition-transform hover:scale-105"
          >
            <FileSearch className="size-5" />
            Get Free Audit
          </Link>
        </div>
      </section>

      {/* Site Footer */}
      <PixelSiteFooter />
    </div>
  );
}