import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { BlogInsidePage } from "@/components/pages/blog-inside";
import { BLOG_POSTS, BLOG_TITLE, getBlogPost } from "@/data/blog-posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: BLOG_TITLE,
    description: "10 signs your business website is hurting your sales, and what to do about each one.",
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <FigmaScaleFrame width={1920} height={3050}>
      <BlogInsidePage post={post} />
    </FigmaScaleFrame>
  );
}
