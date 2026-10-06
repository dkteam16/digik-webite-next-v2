import Startstay from "@/app/about-us/start-stay";
import Howget from "@/app/about-us/how-got";
import Beleive from "@/app/about-us/beleive-exit";
import Work from "@/app/about-us/work-purpose";
import Principles from "@/app/about-us/principles";
import People from "@/app/about-us/people-behind";
import Something from "@/app/about-us/something"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Digital Kangaroos | Web Development & Software Company",
  description: "Learn more about Digital Kangaroos, a top-notch web development and software company dedicated to delivering innovative digital solutions.",
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
