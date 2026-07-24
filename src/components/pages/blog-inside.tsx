import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import Image from "next/image";
import type { BlogPost } from "@/data/blog-posts";
import { BLOG_POSTS, BLOG_TITLE } from "@/data/blog-posts";

const imgImage217 = "/images/blog-inside/imgImage217.png";
const imgImage214 = "/images/blog-inside/imgImage214.svg";
const imgArrow1 = "/images/blog-inside/imgArrow1.svg";

const RELATED_ROWS = [
  { bgTop: "top-[232px]", titleTop: "top-[531px]", dateTop: "top-[501px]", imageInnerTop: "top-[calc(50%-1277px)]" },
  { bgTop: "top-[644px]", titleTop: "top-[943px]", dateTop: "top-[913px]", imageInnerTop: "top-[calc(50%-865px)]" },
  { bgTop: "top-[1759px]", titleTop: "top-[2058px]", dateTop: "top-[2028px]", imageInnerTop: "top-[calc(50%+250px)]" },
];

export function BlogInsidePage({ post }: { post: BlogPost }) {
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const relatedPosts = RELATED_ROWS.map(
    (_, i) => BLOG_POSTS[(currentIndex + i + 1) % BLOG_POSTS.length]
  );

  return (
    <div className="bg-white relative w-480 h-817">
      <PixelHeader activeHref="/blog" />
      <div className="absolute h-[692px] left-[124px] rounded-[16px] top-[232px] w-[1212px]" data-node-id="1035:484" data-name="image 215">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={post.heroImage} fill sizes="100vw" />
      </div>
      {relatedPosts.map((relatedPost, i) => {
        const row = RELATED_ROWS[i];
        return (
          <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="absolute contents cursor-pointer group">
            <div className={`absolute bg-[#f5f5f5] border border-[rgba(0,0,0,0.09)] border-solid h-[392px] left-[calc(66.67%+76px)] rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${row.bgTop} w-[441px] transition-colors group-hover:bg-[#efefef]`} />
            <p className={`[word-break:break-word] absolute font-montserrat font-semibold leading-[normal] left-[calc(83.33%-219px)] text-[20px] text-black ${row.titleTop} tracking-[-0.4px] w-[394px] transition-colors group-hover:text-[#f4a31d]`}>
              {BLOG_TITLE}
            </p>
            <p className={`[word-break:break-word] absolute font-montserrat font-normal leading-[normal] left-[calc(83.33%-218.66px)] text-[16px] text-black ${row.dateTop} tracking-[-0.32px] whitespace-nowrap`}>
              {relatedPost.date}
            </p>
            <div className={`absolute contents left-[calc(66.67%+76px)] ${row.bgTop}`} data-name="Mask group">
              <div className={`-translate-y-1/2 absolute h-[251.715px] left-[calc(66.67%+76px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.861px] mask-size-[441px_249.785px] ${row.imageInnerTop} w-[440.638px]`} style={{ maskImage: `url("${imgImage214}")` }} data-name="image 214">
                <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={relatedPost.cardImage} fill sizes="100vw" />
              </div>
            </div>
          </Link>
        );
      })}
      <div className="[word-break:break-word] absolute font-rajdhani font-semibold leading-[0] left-[calc(50%-836px)] not-italic text-[#333] text-[0px] top-[961px] tracking-[-0.4px] w-[1180px] whitespace-pre-wrap" data-node-id="1035:513">
        <p className="leading-[normal] mb-0 text-[20px]">{`${post.date} `}</p>
        <p className="font-rajdhani font-bold leading-[normal] mb-0 text-[40px]">{`Your Website Is Either Working For You — Or Against You `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">​</p>
        <p className="mb-0 text-[20px]">
          <span className="leading-5">{`Here is something most business owners do not want to hear: your website might be your most expensive employee — and it might be doing `}</span>
          <span className="leading-[normal]">{`absolutely nothing useful. `}</span>
        </p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`Every day, potential customers visit your website. They land on a page, spend a few seconds forming an impression, and then make a decision — to stay and explore, or to leave and find your competitor. You never find out which option they chose, because they never called to tell you. They simply left. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`This silent, invisible loss of business happens on thousands of company websites every single day. And the brutal truth is that most of it is entirely preventable — because the reasons people leave are well understood, well documented, and very fixable. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`According to web credibility research from Stanford University, 75% of users admit to making judgements about a company's credibility based on their website design. You have between 0.2 and 2.6 seconds to make a first impression on your site. In that blink of an eye, visitors decide whether your business is professional and trustworthy — or whether they should look elsewhere. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`A site that focuses on superior user experience can have a visit-to-lead conversion rate that is more than 400% higher than a poorly designed site. That is not a marginal difference. That is the difference between a website that generates revenue and one that quietly bleeds it. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`The question is not whether a good website design matters for your business. The data has settled that question definitively. The question is: does your current website make the cut? `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`In this guide, we walk through the 10 clearest warning signs that your business website is hurting your sales — and for each sign, we tell you exactly what to do about it. If you recognise three or more of these signs in your own website, it is time to have a serious conversation about a redesign. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`Why This Matters More Than Ever in 2026 `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`Before we get into the signs, it is worth understanding why the standard for business websites has risen so dramatically in recent years. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`Most website design and development experts recommend businesses undergo a website redesign every 3–4 years. The technology, the user expectations, and the competitive landscape all shift faster than most business owners realise. A website built in 2020 is not just six years old — in digital terms, it is practically a relic. The tools, frameworks, user experience standards, and SEO requirements that define a high-performing website in 2026 are significantly different from what they were even three years ago. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`It takes about 0.05 seconds for a visitor to form an opinion after landing on your site. In that fraction of a second, they are not reading your copy. They are not evaluating your services. They are making a gut-level visual and experiential judgement about whether your business deserves their attention. And increasingly, the bar they are judging you against has been set by the best-designed websites they encounter daily — from major brands, tech companies, and your competitors who have invested in their digital presence. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`A website redesign is a strategic business investment that directly impacts traffic, leads, and revenue — slow, outdated sites cause visitors to leave within seconds, costing you potential customers. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`Now let us look at the specific, identifiable signs that your website has fallen behind. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`Sign #1: Your Website Looks Noticeably Older Than Your Competitors' `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`Open your website and your top three competitors' websites in separate tabs. Look at them honestly, as a potential customer would. Which one would you trust more with your business? `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`Design trends change. If your website has not had a facelift in 3–5 years, chances are it looks behind the times. Fonts, spacing, outdated visuals, and cluttered layouts can make your site feel stale — hurting your brand's credibility. Visitors will judge your business in seconds based on how your site looks. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`This is not a superficial concern. Visitors form an impression within milliseconds, with about 94% based on visual elements like layout, colours, and fonts. An outdated website does not just look old — it communicates something damaging about your business: that you have not invested in your digital presence, which makes visitors wonder what else you have not invested in. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{`The signs of a visually dated website are usually obvious once you know what to look for: heavy drop shadows, busy backgrounds, excessive use of stock photography, cluttered page layouts with no breathing room, inconsistent fonts across pages, small body text, and colour schemes that feel like they belong to a different era. Individually, each of these is a minor issue. Together, they create the immediate impression of a business that has not kept up. `}</p>
        <p className="leading-[normal] mb-0 text-[20px]">{` `}</p>
        <p className="leading-[normal] text-[20px]">What to do: Work with a professional corporate website design agency to conduct a design audit — a side-by-side comparison of your site against industry-current standards and your nearest competitors. A good agency will identify specifically which visual elements are dragging your credibility down and propose targeted improvements, whether that is a full visual redesign or a focused refresh of key pages.</p>
      </div>
      <div className="absolute bg-[#333] h-170.75 left-[calc(66.67%+76px)] rounded-[16px] top-264 w-110.25" data-node-id="1039:520" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-montserrat font-semibold leading-[normal] left-[calc(83.33%-24px)] text-[30px] text-center text-white top-270.1975 tracking-[-0.6px] whitespace-nowrap" data-node-id="1039:521">
        {`Let's Move Forward Faster`}
      </p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="absolute bg-[#f5f5f5] h-12 left-[calc(66.67%+101px)] rounded-[13px] top-284.5 w-97.5 px-4 font-rajdhani text-[20px] text-black placeholder:text-black outline-none focus:ring-2 focus:ring-[#f4a31d]"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        className="absolute bg-[#f5f5f5] h-12 left-[calc(66.67%+101px)] rounded-[13px] top-299.75 w-97.5 px-4 font-rajdhani text-[20px] text-black placeholder:text-black outline-none focus:ring-2 focus:ring-[#f4a31d]"
      />
      <div className="absolute bg-[#cbcbcb] flex items-center justify-center h-12 left-[calc(66.67%+101px)] rounded-[13px] top-315 w-18.75 font-rajdhani text-[20px] text-black" data-node-id="1039:534">
        +91
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="absolute bg-[#f5f5f5] h-12 left-[calc(66.67%+176px)] rounded-[13px] top-315 w-78.75 px-4 font-rajdhani text-[20px] text-black placeholder:text-black outline-none focus:ring-2 focus:ring-[#f4a31d]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="absolute bg-[#f5f5f5] h-12 left-[calc(66.67%+101px)] rounded-[13px] top-330.25 w-97.5 px-4 font-rajdhani text-[20px] text-black placeholder:text-black outline-none focus:ring-2 focus:ring-[#f4a31d]"
      />
      <textarea
        name="projectDetails"
        placeholder="Project Details"
        className="absolute bg-[#f5f5f5] h-39.25 left-[calc(66.67%+101px)] rounded-[13px] top-345.5 w-97.5 px-4 py-3 font-rajdhani text-[20px] text-black placeholder:text-black outline-none focus:ring-2 focus:ring-[#f4a31d] resize-none"
      />
      <div className="absolute h-18.25 left-[calc(66.67%+148px)] top-390.5 w-74.5" data-node-id="1039:533" data-name="image 216">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative background uses a custom percentage crop; next/image's fill sizing conflicts with it */}
          <img alt="" className="absolute h-[1038.36%] left-[-11.41%] max-w-none top-[-769.86%] w-[170.81%]" src={imgImage217} />
        </div>
      </div>
      <div className="absolute flex h-2.25 items-center justify-center left-[calc(66.67%+155px)] top-320 w-0" data-node-id="1039:537">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-2.25">
            <div className="absolute inset-[-3.68px_-5.56%_-3.68px_0]">
              <Image alt="" className="block max-w-none size-full" src={imgArrow1} fill sizes="100vw" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute contents left-[calc(83.33%-23.5px)] top-414.5" data-node-id="1039:539">
        <div className="absolute bg-[#f4a31d] h-14 left-[calc(66.67%+203px)] rounded-[16px] top-414.5 w-46.75" data-node-id="1039:540" />
        <Link href="/contact" aria-label="Let's Connect" className="absolute border border-solid border-white h-12 left-[calc(66.67%+208px)] rounded-[13px] top-415.5 w-44.25" data-node-id="1039:541" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-rajdhani font-bold leading-[normal] left-[calc(83.33%-24px)] not-italic text-[20px] text-center text-white top-418.5 tracking-[-0.4px] uppercase whitespace-nowrap" data-node-id="1039:542">
          {`Let's Connect`}
        </p>
      </div>
      <PixelSiteFooter />
    </div>
  );
}
