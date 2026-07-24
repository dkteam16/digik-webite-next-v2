import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { BlogPage } from "@/components/pages/blog";

export const metadata: Metadata = {
  "title": "Blog",
  "description": "Insights on web design, SEO, and digital strategy for manufacturers, exporters, and B2B industrial companies."
};


export default function Blog() {
  return (
    <FigmaScaleFrame width={1920} height={2213}>
      <BlogPage />
    </FigmaScaleFrame>
  );
}
