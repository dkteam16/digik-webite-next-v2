import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { QQSolutionsPage } from "@/components/pages/work/qq-solutions";

export const metadata: Metadata = {
  "title": "Q&Q Solutions — Case Study",
  "description": "How we repositioned a CNC machine shop with a new strategy, homepage, sitemap, and SEO keywords targeting global OEM buyers."
};


export default function QQSolutionsCaseStudy() {
  return (
    <FigmaScaleFrame width={1920} height={3674}>
      <QQSolutionsPage />
    </FigmaScaleFrame>
  );
}
