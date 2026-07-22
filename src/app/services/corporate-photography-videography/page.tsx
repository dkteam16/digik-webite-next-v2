import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  "title": "Corporate Photography & Videography",
  "description": "Professional photography and videography that showcases your factory, products, and process to build buyer trust."
};


// TODO: Replace this placeholder with the real Figma design.
// Figma file: Oa2R8GAiByOdXZGBfmicsQ, node-id: 619:2
// Blocked by the Figma MCP Starter-plan rate limit — re-fetch with
// get_design_context({ fileKey: "Oa2R8GAiByOdXZGBfmicsQ", nodeId: "619:2" })
// once the limit resets, then run it through the same pipeline used
// for the other service/industry/case-study pages.
export default function CorporatePhotographyVideography() {
  return (
    <ComingSoonPage
      eyebrow={"Corporate Photography & Videography"}
      title={"Corporate Photography & Videography"}
      description={"Professional photography and videography that showcases your factory, products, and process — building the trust international buyers expect."}
    />
  );
}
