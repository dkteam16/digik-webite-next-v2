import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import Image from "next/image";
import { BLOG_POSTS, BLOG_TITLE } from "@/data/blog-posts";

export function BlogPage() {
  return (
    <div className="bg-white relative w-[1920px] h-[2213px]">
      <PixelHeader activeHref="/blog" />

      {/* Page Heading */}
      <p className="-translate-x-1/2 absolute font-days-one leading-[56.6px] left-1/2 text-[#333] text-[50px] text-center top-[170px] tracking-[-1px] uppercase whitespace-nowrap">
        BLOGS
      </p>

      {/* Blog Cards Grid (4 columns x 3 rows) */}
      <div className="-translate-x-1/2 absolute left-1/2 top-[260px] w-[1588px] grid grid-cols-4 gap-x-[44px] gap-y-[40px]">
        {BLOG_POSTS.slice(0, 12).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-[#f8f9fa] rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-all flex flex-col h-[410px] cursor-pointer"
          >
            {/* Thumbnail Image */}
            <div className="h-[210px] w-full relative overflow-hidden bg-[#eee]">
              <Image
                src={post.cardImage}
                alt=""
                fill
                sizes="364px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Post Metadata & Title */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="font-rajdhani font-medium text-[16px] text-[#777] mb-2">
                {post.date}
              </p>
              <p className="font-days-one text-[#242832] text-[18px] leading-[25px] tracking-[-0.36px] group-hover:text-[#f4a31d] transition-colors line-clamp-3">
                {BLOG_TITLE}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="-translate-x-1/2 absolute flex items-center justify-center gap-6 left-1/2 top-[1620px] font-rajdhani font-medium text-[20px] text-[#333]">
        <span className="font-bold text-[#f4a31d] cursor-pointer">1</span>
        <span className="hover:text-[#f4a31d] cursor-pointer transition-colors">2</span>
        <span className="hover:text-[#f4a31d] cursor-pointer transition-colors">3</span>
        <span className="text-[#888] tracking-widest">....</span>
        <span className="hover:text-[#f4a31d] cursor-pointer transition-colors">8</span>
        <button
          aria-label="Next page"
          className="hover:text-[#f4a31d] transition-colors cursor-pointer flex items-center justify-center"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <PixelSiteFooter />
    </div>
  );
}

