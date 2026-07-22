import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  "title": "B2B Branding",
  "description": "Brand identity built for industrial companies — logos, visual systems, company profiles, and brand guidelines that build buyer trust."
};


// TODO: Replace this placeholder with the real Figma design.
// Figma file: Oa2R8GAiByOdXZGBfmicsQ, node-id: 568:328
// Blocked by the Figma MCP Starter-plan rate limit — re-fetch with
// get_design_context({ fileKey: "Oa2R8GAiByOdXZGBfmicsQ", nodeId: "568:328" })
// once the limit resets, then run it through the same pipeline used
// for the other service/industry/case-study pages.
export default function B2BBranding() {
  return (
    <ComingSoonPage
      eyebrow={"B2B Branding"}
      title={"B2B Branding"}
      description={"Brand identity built for industrial companies — logos, visual systems, company profiles, and brand guidelines that communicate credibility and capability to serious buyers."}
    />
  );
}
