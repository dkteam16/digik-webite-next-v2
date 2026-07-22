import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { WebsiteRedesignPage } from "@/components/pages/services/website-redesign";

export const metadata: Metadata = {
  "title": "Website Redesign for Industry",
  "description": "Rebuild your manufacturing or industrial website from the ground up — faster, more credible, and fully SEO-optimised."
};


export default function WebsiteRedesignForIndustry() {
  return (
    <FigmaScaleFrame width={1920} height={3040}>
      <WebsiteRedesignPage />
    </FigmaScaleFrame>
  );
}
