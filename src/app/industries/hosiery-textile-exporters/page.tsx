import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  "title": "Hosiery & Textile Exporters",
  "description": "Web design and SEO built for hosiery and textile exporters reaching international buyers."
};


// TODO: Replace this placeholder with the real Figma design.
// Figma file: Oa2R8GAiByOdXZGBfmicsQ, node-id: 765:109
// Blocked by the Figma MCP Starter-plan rate limit — re-fetch with
// get_design_context({ fileKey: "Oa2R8GAiByOdXZGBfmicsQ", nodeId: "765:109" })
// once the limit resets, then run it through the same pipeline used
// for the other service/industry/case-study pages.
export default function HosieryTextileExporters() {
  return (
    <ComingSoonPage
      eyebrow={"Industries We Serve"}
      title={"Hosiery & Textile Exporters"}
      description={"Web design and SEO built for hosiery and textile exporters reaching international buyers."}
    />
  );
}
