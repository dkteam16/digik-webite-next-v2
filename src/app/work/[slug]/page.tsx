import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import CommonCTA from "@/app/common-components/last-industries";
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque";
import { getLiveWorkCaseStudy } from "@/lib/wordpress";

type CaseStudy = {
  id?: number;
  slug: string;
  title: string;
  acf?: {
    sub_heading?: string;
    heading?: string;
    description?: string;
    sub_descrip?: string;
    number_value?: string;
    last_left_side?: string;
    last_right_side?: string;
    last_right_side_copy?: string;
    multi_image?: number | string | {
      ID?: number;
      id?: number;
      url?: string;
      source_url?: string;
      alt?: string;
    };
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
};

function getImageUrl(data: CaseStudy): string | null {
  const image = data.acf?.multi_image;

  // ACF image returned as URL
  if (typeof image === "string" && image.startsWith("http")) {
    return image;
  }

  // ACF image returned as object
  if (image && typeof image === "object") {
    return image.url || image.source_url || null;
  }

  // Featured image fallback
  return (
    data._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const data = (await getLiveWorkCaseStudy(slug)) as CaseStudy | null;

  if (!data) {
    return {
      title: "Case Study Not Found | Digital Kangaroos",
    };
  }

  return {
    title: `${data.title} | Case Study | Digital Kangaroos`,
    description: data.acf?.description || "",
    openGraph: {
      title: data.title,
      description: data.acf?.description || "",
      images: getImageUrl(data) ? [getImageUrl(data)!] : [],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = (await getLiveWorkCaseStudy(slug)) as CaseStudy | null;

  if (!data) {
    return (
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        
        <h2>Case study not found</h2>

        <p style={{ marginTop: "12px", color: "#666" }}>
          The requested case study could not be located.
        </p>

        <Link
          href="/work"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          ← Back to Works
        </Link>
      </div>
    );
  }

  const acf = data.acf || {};

  const {
    sub_heading,
    heading,
    description,
    sub_descrip,
    number_value,
    last_left_side,
    last_right_side,
    last_right_side_copy,
  } = acf;

  const imageUrl = getImageUrl(data);

  return (
    <section className="avs-section our-worksdds">

      {/* ================= HERO ================= */}

      <div className="avs-container">

        {/* LEFT */}
        <div className="avs-left">

          {/* TAGS */}
          {sub_heading && (
            <div
              className="avs-tags"
              dangerouslySetInnerHTML={{
                __html: sub_heading,
              }}
            />
          )}

          {/* TITLE */}
          <h1 className="avs-title">
            {data.title}
          </h1>

          {/* DESCRIPTION */}
          {description && (
            <p className="avs-desc">
              {description}
            </p>
          )}

          {/* CLIENT INFORMATION */}
                {sub_descrip && (
            <div className="avs-info-box">
              <div
                className="avs-info-value"
                dangerouslySetInnerHTML={{
                  __html: sub_descrip,
                }}
              />
            </div>
          )}

        </div>

        {/* RIGHT */}
        <div className="avs-right">

              <Image
                 src="/iso.png"
                 alt="logo"
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="avs-iso-badge"
                 priority
               />

          {/* NUMBER VALUE */}
          {number_value && (
            
            
                      <div
                      className="avs-stat-label"
                      dangerouslySetInnerHTML={{
                        __html: number_value,
                      }}
                    /> 
                
          )}





 

        </div>

      </div>

      <Allinonemarque />

      {/* ================= BODY ================= */}

      <div className="innner-our-blog">

        <div className="cs-body">

          <div className="cs-main">

            {/* CHALLENGE */}
            {last_left_side && (
              <ContentSection
                title=" "
                content={last_left_side}
              />
            )}

           

          

          </div>

          {/*================================================================== SIDEBAR =====================================*/}
          <aside className="cs-side">

            {/* <div className="cs-card"> */}
               

             {last_right_side && (
                <div
                  className="cs-richtext"
                  dangerouslySetInnerHTML={{
                    __html: last_right_side,
                  }}
                />
              )}  
                {/* </div> */}

            {/* CTA */}
            <div className="cs-card cs-cta">
              {/* <p className="cs-cta-heading"> */}
                 {last_right_side_copy && (
                <div
                  className="cs-cta-heading"
                  dangerouslySetInnerHTML={{
                    __html: last_right_side_copy,
                  }}
                />
              )}  
              {/* </p> */}

              <Link
                className="cs-btn"
                href="/contact-us"
              >
                Get Free Audit
              </Link>
            </div> 

          </aside>

        </div>

      </div>

      {/* ================= EXTRA CTA ================= */}

      <div className="our-work">

        <div className="b2b-branding-inere allindus-btn">

          <Image
            src="/google.png"
            alt="Google"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto iso"
            priority
          />

          <CommonCTA
            title="Ready to Win More Industrial Contracts Through Your Website?"
            description="Free audit for industrial companies across India."
            buttonText="Get Free Audit"
            buttonLink="/contact-us"
            buttonTextSecond="WhatsApp Us"
            buttonLinkSecond="https://wa.me/919876543210"
            footerText=" "
          />

        </div>

      </div>

    </section>
  );
}

function ContentSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="cs-sectionmian">

      <h2 className="cs-h2">
        {title}
      </h2>

      <div
        className="cs-richtext"
        dangerouslySetInnerHTML={{
          __html: content.replace(/\n/g, "<br />"),
        }}
      />

      {/* <hr className="cs-divider" /> */}

    </section>
  );
}
