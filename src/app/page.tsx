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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & SEO Agency for B2B in India",
  description:
    "Grow your manufacturing business with a B2B web design and SEO agency in India. Build a buyer-ready website that showcases your products.",
  alternates: { canonical: "https://digitalkangaroos.com/" },
  openGraph: {
    type: "website",
    url: "https://digitalkangaroos.com/",
    title: "Web Design & SEO Agency for B2B in India",
    description:
      "Grow your manufacturing business with a B2B web design and SEO agency in India. Build a buyer-ready website that showcases your products.",
    images: ["https://digitalkangaroos.com/OG_IMAGE_PATH.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & SEO Agency for B2B in India",
    description:
      "Grow your manufacturing business with a B2B web design and SEO agency in India. Build a buyer-ready website that showcases your products.",
    images: ["https://digitalkangaroos.com/OG_IMAGE_PATH.png"],
  },
};


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
