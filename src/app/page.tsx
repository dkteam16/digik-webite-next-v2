import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { HomePage } from "@/components/pages/homepage";

export const metadata: Metadata = {
  "title": "B2B Web Design Agency for Manufacturers & Exporters",
  "description": "High-performance websites and SEO strategies for manufacturers, exporters, and B2B industrial companies — built to turn buyers into RFQs."
};


export default function Home() {
  return (
    <FigmaScaleFrame width={1920} height={12224}>
      <HomePage />
    </FigmaScaleFrame>
  );
}
