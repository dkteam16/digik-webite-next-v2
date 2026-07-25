"use client";

import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import Image from "next/image";
import type { BlogPost } from "@/data/blog-posts";
import { BLOG_POSTS, BLOG_TITLE } from "@/data/blog-posts";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronRight, Send, CheckCircle2 } from "lucide-react";

export function BlogInsidePage({ post }: { post: BlogPost }) {
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const relatedPosts = [
    BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length],
    BLOG_POSTS[(currentIndex + 2) % BLOG_POSTS.length],
    BLOG_POSTS[(currentIndex + 3) % BLOG_POSTS.length],
  ];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectDetails: "",
    isRobotChecked: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        projectDetails: "",
        isRobotChecked: false,
      });
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/blog" />

      <main className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Main Article Column (lg:col-span-8) */}
          <article className="lg:col-span-8 space-y-8">
            {/* Banner Image */}
            <div className="relative w-full h-[300px] sm:h-[450px] rounded-3xl overflow-hidden bg-gray-100 shadow-md">
              <Image
                src={post.heroImage}
                alt={BLOG_TITLE}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {/* Post Metadata & Title */}
            <div className="space-y-3">
              <span className="font-rajdhani font-bold text-sm text-[#f4a31d] uppercase tracking-wider block">
                {post.date}
              </span>
              <h1 className="font-days-one text-2xl sm:text-4xl text-[#242832] leading-tight">
                Your Website Is Either Working For You — Or Against You
              </h1>
            </div>

            {/* Article Content */}
            <div className="font-rajdhani font-medium text-lg leading-relaxed text-[#333] space-y-6 pt-4">
              <p>
                Here is something most business owners do not want to hear: your website might be your most expensive employee — and it might be doing absolutely nothing useful.
              </p>
              <p>
                Every day, potential customers visit your website. They land on a page, spend a few seconds forming an impression, and then make a decision — to stay and explore, or to leave and find your competitor. You never find out which option they chose, because they never called to tell you. They simply left.
              </p>
              <p>
                This silent, invisible loss of business happens on thousands of company websites every single day. And the brutal truth is that most of it is entirely preventable — because the reasons people leave are well understood, well documented, and very fixable.
              </p>
              <p>
                According to web credibility research from Stanford University, 75% of users admit to making judgements about a company&apos;s credibility based on their website design. You have between 0.2 and 2.6 seconds to make a first impression on your site. In that blink of an eye, visitors decide whether your business is professional and trustworthy — or whether they should look elsewhere.
              </p>
              <p>
                A site that focuses on superior user experience can have a visit-to-lead conversion rate that is more than 400% higher than a poorly designed site. That is not a marginal difference. That is the difference between a website that generates revenue and one that quietly bleeds it.
              </p>

              <h2 className="font-days-one text-xl sm:text-2xl text-[#242832] pt-4">
                Why This Matters More Than Ever in 2026
              </h2>
              <p>
                Before we get into the signs, it is worth understanding why the standard for business websites has risen so dramatically in recent years.
              </p>
              <p>
                Most website design and development experts recommend businesses undergo a website redesign every 3–4 years. The technology, the user expectations, and the competitive landscape all shift faster than most business owners realise. A website built in 2020 is not just six years old — in digital terms, it is practically a relic.
              </p>

              <div className="bg-[#f8f9fa] border-l-4 border-[#f4a31d] p-6 rounded-r-2xl my-6">
                <p className="font-rajdhani font-semibold text-lg text-[#242832] leading-relaxed">
                  What to do: Work with a professional corporate website design agency to conduct a design audit — a side-by-side comparison of your site against industry-current standards and your nearest competitors.
                </p>
              </div>
            </div>
          </article>

          {/* Right Sidebar Column (lg:col-span-4) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Sidebar Contact Widget */}
            <Card className="bg-[#2d3139] rounded-3xl p-6 text-white shadow-xl space-y-4 border-none">
              <div className="text-center space-y-1">
                <h3 className="font-days-one text-2xl text-white uppercase">
                  Let's Move Forward Faster
                </h3>
                <p className="font-rajdhani text-xs text-gray-300">
                  Speak with our B2B agency team today.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 bg-green-950/60 border border-green-500/40 text-green-300 rounded-2xl flex items-center gap-3 text-sm font-rajdhani font-semibold">
                  <CheckCircle2 className="size-5 text-green-400 shrink-0" />
                  <span>Thank you! Details submitted. We'll be in touch soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 bg-white rounded-xl px-4 font-rajdhani font-medium text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-11 bg-white rounded-xl px-4 font-rajdhani font-medium text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]"
                  />

                  <div className="flex gap-2">
                    <div className="w-16 h-11 bg-gray-200 rounded-xl flex items-center justify-center font-rajdhani font-bold text-[#333] text-sm shrink-0">
                      +91
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 bg-white rounded-xl px-4 font-rajdhani font-medium text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 bg-white rounded-xl px-4 font-rajdhani font-medium text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]"
                    required
                  />

                  <textarea
                    placeholder="Project Details"
                    rows={3}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full bg-white rounded-xl p-3 font-rajdhani font-medium text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d] resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full h-12 bg-[#f4a31d] hover:bg-[#d98d12] text-white font-days-one text-sm uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Let's Connect</span>
                    <Send className="size-4" />
                  </button>
                </form>
              )}
            </Card>

            {/* Related Posts */}
            <div className="space-y-4 pt-4">
              <h4 className="font-days-one text-xl text-[#333] uppercase">
                Related Articles
              </h4>

              {relatedPosts.map((rPost, idx) => (
                <Link key={idx} href={`/blog/${rPost.slug}`} className="block group">
                  <Card className="p-4 bg-[#f8f9fa] hover:bg-white rounded-2xl border border-gray-200/70 hover:border-[#f4a31d] transition-all flex gap-4 items-center">
                    <div className="size-20 relative rounded-xl overflow-hidden bg-gray-200 shrink-0">
                      <Image
                        src={rPost.cardImage}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="font-rajdhani font-semibold text-xs text-[#f4a31d] uppercase">
                        {rPost.date}
                      </span>
                      <h5 className="font-days-one text-sm text-[#242832] group-hover:text-[#f4a31d] transition-colors line-clamp-2">
                        {BLOG_TITLE}
                      </h5>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <PixelSiteFooter />
    </div>
  );
}
