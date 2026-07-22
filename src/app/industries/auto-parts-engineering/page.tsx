import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  "title": "Auto Parts & Engineering Components",
  "description": "Web design and SEO built for auto parts manufacturers and engineering component suppliers targeting global OEM buyers."
};


// TODO: Replace this placeholder with the real Figma design.
// Figma file: Oa2R8GAiByOdXZGBfmicsQ, node-id: 733:879
// Blocked by the Figma MCP Starter-plan rate limit — re-fetch with
// get_design_context({ fileKey: "Oa2R8GAiByOdXZGBfmicsQ", nodeId: "733:879" })
// once the limit resets, then run it through the same pipeline used
// for the other service/industry/case-study pages.
export default function AutoPartsEngineering() {
  return (
    <ComingSoonPage
      eyebrow={"Industries We Serve"}
      title={"Auto Parts & Engineering Components"}
      description={"Web design and SEO built for auto parts manufacturers and engineering component suppliers targeting global OEM buyers."}
    />
  );
}
