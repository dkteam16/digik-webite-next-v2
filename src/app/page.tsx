import Image from "next/image";
import MainHero from "./homepage/mainhero";
import Yourfactory from "./homepage/your-factory"
import Ourlatest from "./homepage/ourlatest";
import Build from "./homepage/build-manu"
import WebSeo from "./homepage/web-seo"
import Client from "./homepage/client-logo"
import Faq from "./homepage/faq"
import BrifRank from "./homepage/brif-rank"
import GeneralAgency from "./homepage/general-agency"
import Kangaroo from "./homepage/kangaro"
import Stalk from "./homepage/stalkus"
import Testimonials from "./homepage/testimonial"


export default function Home() {
  return (
    <div className="main-page">
         <MainHero />
         <Yourfactory />
         <Ourlatest />
         <Build />
         <WebSeo />
         <Client />
         <Faq />
         <BrifRank />
         <GeneralAgency />
         <Testimonials />
         <Kangaroo />
         <Stalk />
         
    </div>
  );
}
