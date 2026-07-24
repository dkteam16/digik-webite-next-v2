import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { OctaveMettlePage } from "@/components/pages/work/octave-mettle";

export const metadata: Metadata = {
  "title": "Octave Mettle — Case Study",
  "description": "How we audited, cleaned, and optimised 240+ Google Business Profile listings for a pan-India franchise chain."
};


export default function OctaveMettleCaseStudy() {
  return (
    <FigmaScaleFrame width={1920} height={3125}>
      <OctaveMettlePage />
    </FigmaScaleFrame>
  );
}
