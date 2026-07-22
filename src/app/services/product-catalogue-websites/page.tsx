import type { Metadata } from "next";
import { FigmaScaleFrame } from "@/components/figma-scale-frame";
import { ProductCataloguePage } from "@/components/pages/services/product-catalogue";

export const metadata: Metadata = {
  "title": "Product Catalogue Websites",
  "description": "Structured, searchable product catalogue websites that let buyers find the exact product they need and submit an RFQ in minutes."
};


export default function ProductCatalogueWebsites() {
  return (
    <FigmaScaleFrame width={1920} height={2551}>
      <ProductCataloguePage />
    </FigmaScaleFrame>
  );
}
