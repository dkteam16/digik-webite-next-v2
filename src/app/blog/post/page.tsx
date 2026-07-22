import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { BlogInsidePage } from "@/components/pages/blog-inside";

export const metadata: Metadata = {
  "title": "Is Your Website Due for a Redesign?",
  "description": "10 signs your business website is hurting your sales, and what to do about each one."
};


export default function BlogPost() {
  return (
    <FigmaScaleFrame width={1920} height={3268}>
      <BlogInsidePage />
    </FigmaScaleFrame>
  );
}
