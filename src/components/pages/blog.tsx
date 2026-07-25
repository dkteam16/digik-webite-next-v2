import Link from "next/link";
import { PixelHeader } from "@/components/layout/pixel-header";
import { PixelSiteFooter } from "@/components/layout/pixel-site-footer";
import Image from "next/image";
import { BLOG_POSTS, BLOG_TITLE } from "@/data/blog-posts";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronRight } from "lucide-react";

export function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#333] flex flex-col overflow-x-hidden">
      <PixelHeader activeHref="/blog" />

      {/* Page Heading */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="font-rajdhani font-bold text-lg text-[#f4a31d] uppercase tracking-wider">
          Insights & Articles
        </span>
        <h1 className="font-days-one text-3xl sm:text-5xl lg:text-6xl text-[#333] uppercase leading-tight">
          Industrial Web <span className="text-[#f4a31d]">&amp; SEO</span> Insights
        </h1>
        <p className="font-rajdhani font-semibold text-lg text-gray-600 max-w-2xl mx-auto">
          Actionable guides on web redesigns, B2B lead generation, and search positioning for manufacturers and industrial exporters.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BLOG_POSTS.slice(0, 12).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <Card className="h-full bg-[#f8f9fa] hover:bg-white rounded-3xl overflow-hidden border border-gray-200/70 hover:border-[#f4a31d] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                    <Image
                      src={post.cardImage}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="font-rajdhani font-semibold text-xs text-[#f4a31d] uppercase tracking-wider">
                      {post.date}
                    </p>
                    <h3 className="font-days-one text-lg text-[#242832] group-hover:text-[#f4a31d] transition-colors leading-snug line-clamp-3">
                      {BLOG_TITLE}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-1 font-rajdhani font-bold text-sm text-[#333] group-hover:text-[#f4a31d] uppercase transition-colors">
                  <span>Read Article</span>
                  <ChevronRight className="size-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 pt-6 font-rajdhani font-bold text-lg text-[#333]">
          <span className="w-10 h-10 rounded-full bg-[#f4a31d] text-white flex items-center justify-center cursor-pointer shadow-sm">
            1
          </span>
          <span className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors">
            2
          </span>
          <span className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors">
            3
          </span>
          <span className="text-gray-400">...</span>
          <span className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors">
            8
          </span>
        </div>
      </section>

      <PixelSiteFooter />
    </div>
  );
}
