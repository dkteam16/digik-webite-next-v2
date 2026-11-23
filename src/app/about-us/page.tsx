import Startstay from "@/app/about-us/start-stay";
import Howget from "@/app/about-us/how-got";
import Beleive from "@/app/about-us/beleive-exit";
import Work from "@/app/about-us/work-purpose";
import Principles from "@/app/about-us/principles";
import People from "@/app/about-us/people-behind";
import Something from "@/app/about-us/something"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Digital Kangaroos | B2B Digital Agency for Manufacturers",
  },
  description:
    "Learn about Digital Kangaroos and our work helping manufacturers and exporters strengthen their digital presence through industrial website design, B2B branding and SEO services.",
};

export default function Aboutus() {
  return (
    <div className="about-us">
        <Startstay />
        <Howget /> 
        <Beleive />  
        <Work />
        <Principles />
        <People />
        <Something />
    </div>
  );
}
