import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { OurWorkPage } from "@/components/pages/our-work";

export const metadata: Metadata = {
  "title": "Our Work",
  "description": "Industrial companies. Ranked. Found. Trusted. See the websites and SEO campaigns we've built for manufacturers and exporters."
};


export default function OurWork() {
  return (
    <FigmaScaleFrame width={1920} height={3384}>
      <OurWorkPage />
    </FigmaScaleFrame>
  );
}
