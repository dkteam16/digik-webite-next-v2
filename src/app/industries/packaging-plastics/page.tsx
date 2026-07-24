import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { PackagingPlasticsPage } from "@/components/pages/industries/packaging-plastics";

export const metadata: Metadata = {
  "title": "Packaging & Plastics",
  "description": "Web design and SEO built for packaging and plastics manufacturers."
};


export default function PackagingPlastics() {
  return (
    <FigmaScaleFrame width={1920} height={2970}>
      <PackagingPlasticsPage />
    </FigmaScaleFrame>
  );
}
