import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { AllIndustriesPage } from "@/components/pages/all-industries";

export const metadata: Metadata = {
  "title": "Industries We Serve",
  "description": "We specialise in manufacturers, exporters, and B2B industrial companies — we understand your buyers, your process, and your terminology."
};


export default function Industries() {
  return (
    <FigmaScaleFrame width={1920} height={5678}>
      <AllIndustriesPage />
    </FigmaScaleFrame>
  );
}
