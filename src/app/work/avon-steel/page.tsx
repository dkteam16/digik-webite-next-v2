import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { AvonSteelPage } from "@/components/pages/work/avon-steel";

export const metadata: Metadata = {
  "title": "Avon Steel — Case Study",
  "description": "How we transformed a legacy steel manufacturer's outdated digital presence into a bold, future-ready website with a full brand identity system."
};


export default function AvonSteelCaseStudy() {
  return (
    <FigmaScaleFrame width={1920} height={3157}>
      <AvonSteelPage />
    </FigmaScaleFrame>
  );
}
