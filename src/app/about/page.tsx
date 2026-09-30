import Startstay from "@/app/about/start-stay";
import Howget from "@/app/about/how-got";
import Beleive from "@/app/about/beleive-exit";
import Work from "@/app/about/work-purpose";
import Principles from "@/app/about/principles";
import People from "@/app/about/people-behind";
import Something from "@/app/about/something"

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
