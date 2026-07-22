import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { AllServicesPage } from "@/components/pages/all-services";

export const metadata: Metadata = {
  "title": "Our Services",
  "description": "Web design, SEO, branding, and content services built specifically for manufacturers, exporters, and B2B industrial companies."
};


export default function Services() {
  return (
    <FigmaScaleFrame width={1920} height={4193}>
      <AllServicesPage />
    </FigmaScaleFrame>
  );
}
