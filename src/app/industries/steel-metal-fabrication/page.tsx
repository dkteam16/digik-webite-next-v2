import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  "title": "Steel & Metal Fabrication",
  "description": "Web design and SEO built for steel and metal fabrication companies."
};


// TODO: Replace this placeholder with the real Figma design.
// Figma file: Oa2R8GAiByOdXZGBfmicsQ, node-id: 875:330
// Blocked by the Figma MCP Starter-plan rate limit — re-fetch with
// get_design_context({ fileKey: "Oa2R8GAiByOdXZGBfmicsQ", nodeId: "875:330" })
// once the limit resets, then run it through the same pipeline used
// for the other service/industry/case-study pages.
export default function SteelMetalFabrication() {
  return (
    <ComingSoonPage
      eyebrow={"Industries We Serve"}
      title={"Steel & Metal Fabrication"}
      description={"Web design and SEO built for steel and metal fabrication companies."}
    />
  );
}
