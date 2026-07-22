import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { CareerPage } from "@/components/pages/career";

export const metadata: Metadata = {
  "title": "Careers",
  "description": "We build for manufacturers, we hire for the same standard. Join a specialist B2B web and SEO agency."
};


export default function Careers() {
  return (
    <FigmaScaleFrame width={1920} height={2213}>
      <CareerPage />
    </FigmaScaleFrame>
  );
}
