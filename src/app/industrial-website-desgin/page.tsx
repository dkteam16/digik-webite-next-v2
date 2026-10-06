import Allinone from "@/app/industrial-website-desgin/allinone"
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque"
import IndustWorldClass from "@/app/industrial-website-desgin/industworldclass"
import CopyOneAgency from "@/app/industrial-website-desgin/copy-one-agency"
import FiveStage from "@/app/industrial-website-desgin/five-stage"
import SectorDesign from "@/app/industrial-website-desgin/sector-design"

import CommonCTA from "../common-components/last-second"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Website Design That Wins Orders",
  description: "High-performance websites for manufacturers, exporters and B2B industrial companies, designed to turn visitors into RFQs. Request a free website audit.",
};

export default function Industrial() {
  return (
    <div className="indsutrial-website-design">
        <Allinone />
        <Allinonemarque />
        <IndustWorldClass />   
        <CopyOneAgency />
        <FiveStage />
        <SectorDesign /> 
         <CommonCTA
      title="Ready for a Website That Actually Generates RFQs?"
      description="Get a free audit of your current website. We'll show you exactly what's failing and what a proper industrial website would look like for your business."
      buttonText="Request Free Website Audit"
      buttonLink="/contact-us"
      footerText="Free · 48-Hour Delivery · No Obligation"
    />
    </div>
  );
}
