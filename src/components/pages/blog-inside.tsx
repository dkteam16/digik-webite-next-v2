"use client";

import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import Image from "next/image";
import type { BlogPost } from "@/data/blog-posts";
import { BLOG_POSTS, BLOG_TITLE } from "@/data/blog-posts";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your details have been submitted.");
  };

  return (
    <div className="bg-white relative w-[1920px] h-[3050px]">
      <PixelHeader activeHref="/blog" />

      {/* Main 2-Column Content Container */}
      <div className="-translate-x-1/2 absolute left-1/2 top-[120px] w-[1588px] flex gap-[88px]">
        {/* Left Column: Article Content (w-[1060px]) */}
        <div className="w-[1060px] flex flex-col">
          {/* Main Hero Banner Image */}
          <div className="relative w-full h-[520px] rounded-[24px] overflow-hidden bg-[#eee] shadow-sm mb-8">
            <Image
              src={post.heroImage}
              alt={BLOG_TITLE}
              fill
              priority
              sizes="1060px"
              className="object-cover"
            />
          </div>

          {/* Post Metadata & Title */}
          <p className="font-rajdhani font-medium text-[16px] text-[#777] mb-2">
            {post.date}
          </p>
          <h1 className="font-days-one text-[#242832] text-[34px] leading-[44px] tracking-[-0.5px] mb-8">
            Your Website Is Either Working For You — Or Against You
          </h1>

          {/* Article Body */}
          <div className="font-rajdhani font-medium text-[18px] leading-[30px] text-[#333] space-y-6">
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
            <p>
              The question is not whether a good website design matters for your business. The data has settled that question definitively. The question is: does your current website make the cut?
            </p>
            <p>
              In this guide, we walk through the 10 clearest warning signs that your business website is hurting your sales — and for each sign, we tell you exactly what to do about it. If you recognise three or more of these signs in your own website, it is time to have a serious conversation about a redesign.
            </p>

            <h2 className="font-days-one text-[#242832] text-[24px] leading-[32px] pt-4 mb-2">
              Why This Matters More Than Ever in 2026
            </h2>
            <p>
              Before we get into the signs, it is worth understanding why the standard for business websites has risen so dramatically in recent years.
            </p>
            <p>
              Most website design and development experts recommend businesses undergo a website redesign every 3–4 years. The technology, the user expectations, and the competitive landscape all shift faster than most business owners realise. A website built in 2020 is not just six years old — in digital terms, it is practically a relic. The tools, frameworks, user experience standards, and SEO requirements that define a high-performing website in 2026 are significantly different from what they were even three years ago.
            </p>
            <p>
              It takes about 0.05 seconds for a visitor to form an opinion after landing on your site. In that fraction of a second, they are not reading your copy. They are not evaluating your services. They are making a gut-level visual and experiential judgement about whether your business deserves their attention. And increasingly, the bar they are judging you against has been set by the best-designed websites they encounter daily — from major brands, tech companies, and your competitors who have invested in their digital presence.
            </p>
            <p>
              A website redesign is a strategic business investment that directly impacts traffic, leads, and revenue — slow, outdated sites cause visitors to leave within seconds, costing you potential customers.
            </p>
            <p>
              Now let us look at the specific, identifiable signs that your website has fallen behind.
            </p>

            <h2 className="font-days-one text-[#242832] text-[24px] leading-[32px] pt-4 mb-2">
              Sign #1: Your Website Looks Noticeably Older Than Your Competitors&apos;
            </h2>
            <p>
              Open your website and your top three competitors&apos; websites in separate tabs. Look at them honestly, as a potential customer would. Which one would you trust more with your business?
            </p>
            <p>
              Design trends change. If your website has not had a facelift in 3–5 years, chances are it looks behind the times. Fonts, spacing, outdated visuals, and cluttered layouts can make your site feel stale — hurting your brand&apos;s credibility. Visitors will judge your business in seconds based on how your site looks.
            </p>
            <p>
              This is not a superficial concern. Visitors form an impression within milliseconds, with about 94% based on visual elements like layout, colours, and fonts. An outdated website does not just look old — it communicates something damaging about your business: that you have not invested in your digital presence, which makes visitors wonder what else you have not invested in.
            </p>
            <p>
              The signs of a visually dated website are usually obvious once you know what to look for: heavy drop shadows, busy backgrounds, excessive use of stock photography, cluttered page layouts with no breathing room, inconsistent fonts across pages, small body text, and colour schemes that feel like they belong to a different era. Individually, each of these is a minor issue. Together, they create the immediate impression of a business that has not kept up.
            </p>

            <div className="bg-[#f8f9fa] border-l-4 border-[#f4a31d] p-6 rounded-r-[16px] my-6">
              <p className="font-rajdhani font-semibold text-[18px] text-[#242832]">
                What to do: Work with a professional corporate website design agency to conduct a design audit — a side-by-side comparison of your site against industry-current standards and your nearest competitors. A good agency will identify specifically which visual elements are dragging your credibility down and propose targeted improvements, whether that is a full visual redesign or a focused refresh of key pages.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar (w-[440px]) */}
        <div className="w-[440px] flex flex-col gap-6">
          {/* Related Card 1 */}
          <Link
            href={`/blog/${relatedPosts[0].slug}`}
            className="group bg-[#f8f9fa] rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-all flex flex-col h-[350px] cursor-pointer"
          >
            <div className="h-[180px] w-full relative overflow-hidden bg-[#eee]">
              <Image
                src={relatedPosts[0].cardImage}
                alt=""
                fill
                sizes="440px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <p className="font-rajdhani font-medium text-[15px] text-[#777]">
                {relatedPosts[0].date}
              </p>
              <p className="font-days-one text-[#242832] text-[16px] leading-[23px] tracking-[-0.3px] group-hover:text-[#f4a31d] transition-colors line-clamp-3">
                {BLOG_TITLE}
              </p>
            </div>
          </Link>

          {/* Related Card 2 */}
          <Link
            href={`/blog/${relatedPosts[1].slug}`}
            className="group bg-[#f8f9fa] rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-all flex flex-col h-[350px] cursor-pointer"
          >
            <div className="h-[180px] w-full relative overflow-hidden bg-[#eee]">
              <Image
                src={relatedPosts[1].cardImage}
                alt=""
                fill
                sizes="440px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <p className="font-rajdhani font-medium text-[15px] text-[#777]">
                {relatedPosts[1].date}
              </p>
              <p className="font-days-one text-[#242832] text-[16px] leading-[23px] tracking-[-0.3px] group-hover:text-[#f4a31d] transition-colors line-clamp-3">
                {BLOG_TITLE}
              </p>
            </div>
          </Link>

          {/* Contact Widget ("Let's Move Forward Faster") */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#2d3139] rounded-[24px] p-6 text-white shadow-lg flex flex-col gap-3"
          >
            <h3 className="font-days-one text-[24px] text-white text-center mb-2 tracking-[-0.5px]">
              Let&apos;s Move Forward Faster
            </h3>

            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-[46px] bg-[#f5f5f5] rounded-[30px] px-5 font-rajdhani font-medium text-[16px] text-[#333] placeholder:text-[#888] outline-none focus:ring-2 focus:ring-[#f4a31d]"
              required
            />

            <input
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full h-[46px] bg-[#f5f5f5] rounded-[30px] px-5 font-rajdhani font-medium text-[16px] text-[#333] placeholder:text-[#888] outline-none focus:ring-2 focus:ring-[#f4a31d]"
            />

            <div className="flex gap-2">
              <div className="w-[70px] h-[46px] bg-[#e5e5e5] rounded-[30px] flex items-center justify-center font-rajdhani font-bold text-[#333] text-[16px]">
                +91 ↓
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 h-[46px] bg-[#f5f5f5] rounded-[30px] px-5 font-rajdhani font-medium text-[16px] text-[#333] placeholder:text-[#888] outline-none focus:ring-2 focus:ring-[#f4a31d]"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-[46px] bg-[#f5f5f5] rounded-[30px] px-5 font-rajdhani font-medium text-[16px] text-[#333] placeholder:text-[#888] outline-none focus:ring-2 focus:ring-[#f4a31d]"
              required
            />

            <textarea
              placeholder="Project Details"
              rows={3}
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              className="w-full bg-[#f5f5f5] rounded-[20px] p-4 font-rajdhani font-medium text-[16px] text-[#333] placeholder:text-[#888] outline-none focus:ring-2 focus:ring-[#f4a31d] resize-none"
            />

            {/* reCAPTCHA Mockup */}
            <div className="bg-[#f9f9f9] border border-[#d3d3d3] rounded-[6px] p-3 flex items-center justify-between my-1">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isRobotChecked}
                  onChange={(e) => setFormData({ ...formData, isRobotChecked: e.target.checked })}
                  className="w-6 h-6 rounded border-gray-300 text-[#f4a31d] focus:ring-[#f4a31d]"
                />
                <span className="font-rajdhani font-medium text-[14px] text-[#444]">
                  I&apos;m not a robot
                </span>
              </label>
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  className="w-6 h-6"
                />
                <span className="text-[9px] text-[#777] font-sans">reCAPTCHA</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-[50px] bg-[#f4a31d] hover:bg-[#e09215] text-white font-days-one text-[16px] uppercase tracking-wider rounded-[30px] transition-colors shadow-md cursor-pointer mt-1"
            >
              LET&apos;S CONNECT
            </button>
          </form>

          {/* Related Card 3 */}
          <Link
            href={`/blog/${relatedPosts[2].slug}`}
            className="group bg-[#f8f9fa] rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-all flex flex-col h-[350px] cursor-pointer"
          >
            <div className="h-[180px] w-full relative overflow-hidden bg-[#eee]">
              <Image
                src={relatedPosts[2].cardImage}
                alt=""
                fill
                sizes="440px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <p className="font-rajdhani font-medium text-[15px] text-[#777]">
                {relatedPosts[2].date}
              </p>
              <p className="font-days-one text-[#242832] text-[16px] leading-[23px] tracking-[-0.3px] group-hover:text-[#f4a31d] transition-colors line-clamp-3">
                {BLOG_TITLE}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <PixelSiteFooter />
    </div>
  );
}

