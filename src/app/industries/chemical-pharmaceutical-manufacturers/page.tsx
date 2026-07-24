import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { ChemicalPharmaceuticalManufacturersPage } from "@/components/pages/industries/chemical-pharmaceutical-manufacturers";

export const metadata: Metadata = {
  "title": "Chemical & Pharmaceutical Manufacturers",
  "description": "Web design and SEO built for chemical and pharmaceutical manufacturers."
};


export default function ChemicalPharmaceuticalManufacturers() {
  return (
    <FigmaScaleFrame width={1920} height={3820}>
      <ChemicalPharmaceuticalManufacturersPage />
    </FigmaScaleFrame>
  );
}
