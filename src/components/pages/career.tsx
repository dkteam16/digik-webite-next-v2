import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { CareerForm } from "./career-form";
import { Card } from "@/components/ui/card";
import { Target, Zap, Users, Award, Star } from "lucide-react";

export function CareerPage() {
  const perks = [
    {
      title: "Niche, Not Generic",
      icon: Target,
      desc: "We only work with manufacturers and industrial companies. You'll go deep in one vertical and become genuinely expert in B2B digital — not a generalist chasing every brief."
    },
    {
      title: "Work That Ships",
      icon: Zap,
      desc: "No endless decks. No committee approvals. We build, we launch, we measure. Every project you work on goes live and has real commercial impact for a real business."
    },
    {
      title: "Founder-Led Team",
      icon: Users,
      desc: "You'll work closely with the founder on strategy and delivery. There are no layers of management between you and the decisions that matter."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/careers" />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
          Careers
        </span>
        <h1 className="font-days-one text-3xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
          We Build For Manufacturers. <br className="hidden sm:inline" />
          <span className="text-[#f4a31d]">We Hire For The Same Standard.</span>
        </h1>
        <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Digital Kangaroos is a specialist web and SEO agency for B2B industrial companies. We're a tight team — and we hire people who care about the work, not just the brief.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-800 font-rajdhani font-bold text-sm">
            <Star className="size-4 fill-yellow-500 text-yellow-500" />
            <span>4.7 Google Rating</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-900 font-rajdhani font-bold text-sm">
            <Award className="size-4 text-[#f4a31d]" />
            <span>ISO 9001:2015 Certified Agency</span>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-[#f5f5f5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
              Why Join Us
            </span>
            <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase">
              A Small Team. A Sharp Focus.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <Card
                  key={idx}
                  className={`p-8 rounded-[32px] space-y-6 bg-white border-2 ${
                    idx === 1 ? "border-[#f4a31d] shadow-lg" : "border-transparent"
                  } hover:border-[#f4a31d] transition-all flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="size-14 rounded-2xl border-2 border-[#f4a31d] flex items-center justify-center text-[#f4a31d]">
                      <Icon className="size-7" />
                    </div>
                    <h3 className="font-days-one text-2xl text-[#333] uppercase">{perk.title}</h3>
                    <p className="font-rajdhani font-medium text-gray-700 text-base leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
            Apply Now
          </span>
          <h2 className="font-days-one text-3xl sm:text-5xl text-[#333] uppercase">
            Don't Wait For A Job Listing.
          </h2>
          <p className="font-rajdhani font-semibold text-gray-600 text-lg max-w-2xl mx-auto">
            We are always open to meeting talented web developers, designers, and SEO specialists.
          </p>
        </div>

        <CareerForm />
      </section>

      <PixelSiteFooter />
    </div>
  );
}
