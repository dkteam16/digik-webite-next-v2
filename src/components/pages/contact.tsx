import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import { ContactForm } from "./contact-form";
import { Card } from "@/components/ui/card";
import { FileSearch, Layers, PhoneCall, Mail, MapPin, Star } from "lucide-react";

export function ContactPage() {
  const contactInfo = [
    {
      title: "Free Website Audit",
      icon: FileSearch,
      desc: "We'll review your existing website and tell you exactly what's costing you buyer enquiries — no obligation, no agency speak."
    },
    {
      title: "New Project",
      icon: Layers,
      desc: "Website build, SEO strategy, positioning, or content — tell us what you need and we'll scope it properly."
    },
    {
      title: "Direct Contact",
      icon: PhoneCall,
      desc: "Phone: +91 98148 20845\nEmail: hello@digitalkangaroos.com\nOffice: Ludhiana, Punjab, India"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/contact" />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
          Contact Us
        </span>
        <h1 className="font-days-one text-3xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
          Let's Build Something That <span className="text-[#f4a31d]">Actually Works</span>.
        </h1>
        <p className="font-rajdhani font-semibold text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We only work with manufacturers, exporters, and B2B industrial companies. If that's you — tell us what you're trying to fix. We'll be direct about whether we can help.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-800 font-rajdhani font-bold text-sm">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <span>4.7 Google Rating Across 150+ Reviews</span>
        </div>
      </section>

      {/* Main Content: Info Cards & Contact Form */}
      <section className="py-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <Card key={idx} className="p-6 bg-[#f5f5f5] rounded-3xl space-y-3 border-2 border-transparent hover:border-[#f4a31d] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-2xl bg-[#f4a31d] flex items-center justify-center text-white shrink-0">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-days-one text-xl text-[#333] uppercase">{info.title}</h3>
                  </div>
                  <p className="font-rajdhani font-medium text-gray-700 text-base whitespace-pre-line leading-relaxed">
                    {info.desc}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 bg-[#f5f5f5] rounded-[32px] space-y-6 border-2 border-[#f4a31d]/30 shadow-sm">
              <div className="space-y-2 text-center sm:text-left">
                <h2 className="font-days-one text-2xl sm:text-3xl text-[#333] uppercase">
                  Send Us A Message
                </h2>
                <p className="font-rajdhani font-semibold text-gray-600 text-base">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <ContactForm />
            </Card>
          </div>
        </div>
      </section>

      <PixelSiteFooter />
    </div>
  );
}
