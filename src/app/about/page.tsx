import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { AboutPage } from "@/components/pages/about";

export const metadata: Metadata = {
  "title": "About Us",
  "description": "We're a specialist web and SEO agency serving one audience exceptionally well: manufacturers, exporters, and B2B industrial companies."
};


export default function About() {
  return (
    <FigmaScaleFrame width={1920} height={6875}>
      <AboutPage />
    </FigmaScaleFrame>
  );
}
