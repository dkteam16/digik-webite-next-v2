import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { HosieryTextileExportersPage } from "@/components/pages/industries/hosiery-textile-exporters";

export const metadata: Metadata = {
  "title": "Hosiery & Textile Exporters",
  "description": "Web design and SEO built for hosiery and textile exporters reaching international buyers."
};


export default function HosieryTextileExporters() {
  return (
    <FigmaScaleFrame width={1920} height={3480}>
      <HosieryTextileExportersPage />
    </FigmaScaleFrame>
  );
}
