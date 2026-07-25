import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { Card } from "@/components/ui/card";
import {
  FileSearch,
  CheckCircle2,
  Award,
  Users,
  Target,
  Compass,
  Lightbulb,
  Shield,
  ArrowRight
} from "lucide-react";

export function AboutPage() {
  const stats = [
    { label: "B2B Focus", value: "100%", desc: "Of our clients are industrial or export focused" },
    { label: "Websites Delivered", value: "150+", desc: "Custom industrial websites launched" },
    { label: "Avg. RFQ Uplift", value: "3×", desc: "Reported within 6 months of launch" },
    { label: "Sectors Served", value: "12+", desc: "Manufacturing industries covered" },
    { label: "Years of Focus", value: "8+", desc: "Exclusively building for B2B industry" }
  ];

  const timeline = [
    { year: "2019 / Day 1", title: "A Humble Beginning with a Clear Vision", desc: "Started as a small web team in Ludhiana with a commitment to craft high quality websites." },
    { year: "Year 2", title: "Discovering the Industrial Gap", desc: "Realized generalist agencies failed to understand B2B manufacturing, RFQ needs, and technical specs." },
    { year: "Year 4", title: "Going All-In on Manufacturers & Exporters", desc: "Pivoted exclusively to serve B2B industrial companies and export manufacturers across India." },
    { year: "Year 6", title: "Serving Global Buyers from Ludhiana", desc: "Helped clients generate inbound RFQs from UK, USA, Germany, and Australian buyers." },
    { year: "Today", title: "India's Specialist Web & SEO Agency for Industry", desc: "Recognized as the premier digital partner for Indian manufacturers entering international markets." }
  ];

  const differences = [
    { number: "01", title: "Industrial Buyer Psychology", desc: "We know how procurement engineers and sourcing directors evaluate suppliers before submitting RFQs." },
    { number: "02", title: "Technical Content Expertise", desc: "We speak your industry language—ISO certifications, tolerances, specs, and export logistics." },
    { number: "03", title: "B2B SEO Built for Long Sales Cycles", desc: "Targeting high-intent search queries that sourcing teams actually use to find global manufacturers." },
    { number: "04", title: "Export-Ready Design Standards", desc: "International trust signals, responsive catalogues, and multilingual capability built in." },
    { number: "05", title: "Located in India's Industrial Heartland", desc: "Based in Ludhiana, surrounded by manufacturing hubs, giving us firsthand operational context." },
    { number: "06", title: "You Own Everything We Build", desc: "No locked platforms or recurring proprietary traps. 100% ownership of code and assets." }
  ];

  const values = [
    { title: "Specialisation Over Scale", desc: "We would rather be the best agency for manufacturers than a large agency for everyone. Depth always beats breadth." },
    { title: "Results, Not Deliverables", desc: "We measure success in RFQs, rankings, and revenue — not in pages delivered, reports sent, or hours billed." },
    { title: "Honest Before Comfortable", desc: "We will tell you when your idea won't work or when budget is realistic. We don't tell clients what they want to hear." },
    { title: "Build Assets, Not Dependencies", desc: "Everything we build for you is something you own and that compounds in value over time." }
  ];

  const team = [
    { name: "DK", title: "Founder & Strategy Lead", tags: "Web Strategy · B2B SEO · Client Relations", desc: "With over 8 years building digital strategies for manufacturers, developing a deep understanding of what makes industrial buyers convert." },
    { name: "WD", title: "Lead Web Designer", tags: "UI/UX · Industrial Design · Frontend", desc: "Specialises in creating industrial websites that balance credibility with clarity, informed by B2B buyer research." },
    { name: "WD", title: "SEO & Content Strategist", tags: "Technical SEO · Industrial Content · Rankings", desc: "Focuses exclusively on B2B industrial search—building keyword strategies and content programmes that rank manufacturing companies." }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden font-rajdhani">
      <PixelHeader activeHref="/about" />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              About Digital Kangaroos
            </span>
            <h1 className="font-days-one text-3xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
              We Started Small. We Stayed <span className="text-[#f4a31d]">Focused</span>.
            </h1>
            <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              Our journey began as a humble web development agency with a vision to create captivating online experiences. Fuelled by innovation and an unwavering commitment to excellence, we evolved into something more deliberate — a specialist web and SEO agency that serves one audience: manufacturers, exporters, and B2B industrial companies.
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

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl text-white space-y-1 ${
                  idx === 0 ? "col-span-2 bg-[#f4a31d] text-[#333]" : "bg-[#333]"
                }`}
              >
                <div className={`font-days-one text-3xl sm:text-4xl ${idx === 0 ? "text-[#333]" : "text-[#f4a31d]"}`}>
                  {stat.value}
                </div>
                <div className="font-rajdhani font-bold text-base uppercase">{stat.label}</div>
                <div className={`font-rajdhani text-xs ${idx === 0 ? "text-gray-800" : "text-gray-400"}`}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Got Here (Timeline) */}
      <section className="py-20 bg-[#f5f5f5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              2019 EST INDIA
            </span>
            <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
              How We Got Here
            </h2>
            <p className="font-rajdhani font-semibold text-lg text-gray-600 uppercase">
              Every decision we have made as an agency — every pivot and specialisation — has been in service of building the most effective digital growth engine for industrial businesses.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white border-2 border-transparent hover:border-[#f4a31d] rounded-3xl transition-all duration-300 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 md:w-1/3">
                  <span className="inline-block px-3 py-1 bg-[#f4a31d] text-white font-rajdhani font-bold text-sm rounded-full uppercase">
                    {item.year}
                  </span>
                  <h3 className="font-days-one text-2xl text-[#333] uppercase leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="font-rajdhani font-medium text-gray-600 text-lg md:w-2/3 leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
            Mission & Vision
          </span>
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
            What We Believe. Why We Exist.
          </h2>
          <p className="font-rajdhani font-semibold text-lg text-gray-600 uppercase">
            We are in the business of building the digital engine that drives enquiries, builds credibility, and grows revenue for industrial companies across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-10 bg-[#f5f5f5] rounded-[32px] space-y-6 border-l-8 border-l-[#f4a31d]">
            <div className="size-14 rounded-2xl bg-[#f4a31d] flex items-center justify-center text-white">
              <Target className="size-8" />
            </div>
            <span className="font-rajdhani font-bold text-base text-[#f4a31d] uppercase tracking-wider">Our Mission</span>
            <h3 className="font-days-one text-2xl sm:text-3xl text-[#333] uppercase leading-snug">
              To Make Every Indian Manufacturer Findable, Credible, and Easy to Buy From
            </h3>
          </Card>

          <Card className="p-10 bg-[#f5f5f5] rounded-[32px] space-y-6 border-l-8 border-l-[#333]">
            <div className="size-14 rounded-2xl bg-[#333] flex items-center justify-center text-white">
              <Compass className="size-8" />
            </div>
            <span className="font-rajdhani font-bold text-base text-[#333] uppercase tracking-wider">Our Vision</span>
            <h3 className="font-days-one text-2xl sm:text-3xl text-[#333] uppercase leading-snug">
              To Be the Go-To Digital Partner for B2B Industrial Companies Across India
            </h3>
          </Card>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-[#333] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              What Makes Us Different
            </span>
            <h2 className="font-days-one text-3xl sm:text-5xl uppercase leading-tight">
              We Only Work With <span className="text-[#f4a31d]">Manufacturers</span>. On Purpose.
            </h2>
            <p className="font-rajdhani text-gray-300 text-lg leading-relaxed">
              Most digital agencies take any client who walks through the door. They are generalists by design. Digital Kangaroos made a deliberate choice to focus exclusively on manufacturers, exporters, and B2B industrial companies. That choice means we understand your buyers in a way a generalist never will.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((diff, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl space-y-4 border border-white/10 hover:border-[#f4a31d] transition-all"
              >
                <div className="font-days-one text-3xl text-[#f4a31d]">{diff.number}</div>
                <h3 className="font-days-one text-xl uppercase leading-snug">{diff.title}</h3>
                <p className="font-rajdhani text-gray-300 text-base leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Principles We Work By */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
            Our Values
          </span>
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
            The Principles We Work By
          </h2>
          <p className="font-rajdhani font-semibold text-lg text-gray-600 uppercase">
            These are actual principles that govern every decision we make, every project we take on, and every recommendation we give.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <Card key={idx} className="p-8 bg-[#f5f5f5] rounded-3xl space-y-4 flex flex-col justify-between border-t-4 border-t-[#f4a31d]">
              <div className="space-y-3">
                <h3 className="font-days-one text-xl text-[#333] uppercase">{val.title}</h3>
                <p className="font-rajdhani text-gray-600 text-base leading-relaxed">{val.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 bg-[#f5f5f5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              The Team
            </span>
            <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
              The People Behind Your Digital Growth
            </h2>
            <p className="font-rajdhani font-semibold text-lg text-gray-600 uppercase">
              A tight-knit team of web designers, SEO strategists, and industrial content specialists — all focused on one thing: making manufacturing companies impossible to ignore online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="p-8 bg-white rounded-3xl space-y-6 shadow-sm border-2 border-transparent hover:border-[#f4a31d] transition-all">
                <div className="size-16 rounded-full bg-[#f4a31d] flex items-center justify-center text-white font-days-one text-xl">
                  {member.name}
                </div>
                <div className="space-y-1">
                  <h3 className="font-days-one text-2xl text-[#333] uppercase">{member.title}</h3>
                  <span className="inline-block px-3 py-1 bg-[#f4a31d]/10 text-[#f4a31d] font-rajdhani font-bold text-xs rounded-md uppercase">
                    {member.tags}
                  </span>
                </div>
                <p className="font-rajdhani text-gray-600 text-base leading-relaxed">{member.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase leading-tight">
          Let's Build Something That Actually Works.
        </h2>
        <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          If you are a manufacturer, exporter, or B2B industrial company that is serious about growing through digital — we should talk. Start with a free audit of your current website.
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

      <PixelSiteFooter />
    </div>
  );
}