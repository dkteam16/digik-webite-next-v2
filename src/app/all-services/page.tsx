import Allinone from "@/app/all-services/allinone" 
import Dotslide from "@/app/all-services/dostslide"
import Core from "@/app/all-services/core-service"
import Oneagency from "@/app/all-services/one-agency"
import Something from "@/app/all-services/something"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design, SEO & Digital Services for Industry",
  description: "Every service is built for manufacturers, exporters and B2B industrial companies: website design, SEO, branding, photography and mobile apps. Start with a free audit.",
};

export default function Allservices() {
  return (
    <div className="all-services">
      <Allinone />
      <Dotslide />
      <Core /> 
      <Oneagency />
      <Something />
    </div>
  );
}
