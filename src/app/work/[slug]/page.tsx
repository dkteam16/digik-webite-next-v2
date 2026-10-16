import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CommonCTA from "@/app/common-components/last-industries";
import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque";
import { getLiveWorkCaseStudy } from "@/lib/wordpress";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getLiveWorkCaseStudy(slug);

  if (!data) {
    return { title: "Case Study Not Found | Digital Kangaroos" };
  }

  return {
    title: `${data.title} | Case Study | Digital Kangaroos`,
    description: data.short_description,
    openGraph: {
      title: data.title,
      description: data.short_description,
      images: data.hero_image_url ? [data.hero_image_url] : [],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getLiveWorkCaseStudy(slug);

  if (!data) {
    return (
      <div style={{ padding: "80px 20px", textAlign: "center" }}>
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

  const {
    title,
    client,
    short_description,
    project_tags = [],
    statistics = [],
    project_information = [],
    focus_cards = [],
    problem = [],
    outcome = [],
    services_delivered = [],
    industries = [],
    cta_heading,
    cta_button,
    cta_url,
    case_study_images = [],
  } = data;

  return (
    <section className="avs-section">
      <div className="avs-container">
        {/* ================= LEFT ================= */}
        <div className="avs-left">
          {/* TAGS */}
          <ul className="avs-tags">
            {project_tags.map((tag: string, index: number) => (
              <li key={`${tag}-${index}`} className="avs-tag">
                {tag}
              </li>
            ))}
          </ul>

          {/* TITLE */}
          <h1 className="avs-title">
            {client && client !== title && !title.startsWith(client)
              ? `${client} – ${title}`
              : title}
          </h1>

          {/* DESCRIPTION */}
          {short_description && (
            <p className="avs-desc">{short_description}</p>
          )}

          {/* INFO */}
          {project_information.length > 0 && (
            <div className="avs-info-box">
              {project_information.map(
                (item: { label: string; value: string }, index: number) => (
                  <div key={`${item.label}-${index}`} className="avs-info-row">
                    <span className="avs-info-key">{item.label}</span>
                    <span className="avs-info-value">{item.value}</span>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="avs-right">
          {statistics.map(
            (
              stat: { value: string; description: string },
              index: number
            ) => (
              <div key={index} className="avs-stat-card">
                <h3 className="avs-stat-value">{stat.value}</h3>
                <p className="avs-stat-label">{stat.description}</p>
              </div>
            )
          )}

          {/* ISO */}
          <div className="avs-iso-badge">
            <Image
              src="/iso.png"
              alt="ISO 9001:2015 Certified Company"
              width={170}
              height={170}
            />
          </div>
        </div>
      </div>

      <Allinonemarque />

      {/* ================= BODY ================= */}
      <div className="innner-our-blog">
        <div className="cs-body">
          <div className="cs-main">
            {/* FOCUS AREA CARDS (ACF fields: logo1-3, s-head1-3, client_overview, challenge, solutions) */}
            {focus_cards.length > 0 && (
              <div
                className="cs-focus-cards"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "20px",
                  marginBottom: "35px",
                }}
              >
                {focus_cards.map((card, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#f8f9fa",
                      padding: "24px 20px",
                      borderRadius: "12px",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.title}
                        style={{
                          maxHeight: "70px",
                          margin: "0 auto 16px auto",
                          display: "block",
                        }}
                      />
                    )}
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "10px",
                        fontSize: "18px",
                        color: "#111",
                      }}
                    >
                      {card.title}
                    </h4>
                    <p
                      style={{
                        color: "#555",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* PROBLEM / SOLUTION */}
            {problem.map(
              (section: { title: string; content: string }, index: number) => (
                <div key={index}>
                  <ContentSection
                    title={section.title}
                    content={section.content}
                  />
                  <hr className="cs-divider" />
                </div>
              )
            )}

            {/* SHOWCASE IMAGES GALLERY (ACF fields 17, 18, 19) */}
            {case_study_images.length > 0 && (
              <div
                className="cs-showcase-gallery"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                  margin: "30px 0",
                }}
              >
                {case_study_images.map((imgUrl: string, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                      background: "#f8f9fa",
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={`Case Study Showcase ${idx + 1}`}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* OUTCOME / RESULTS / CONCLUSION */}
            {outcome.map(
              (section: { title: string; content: string }, index: number) => (
                <ContentSection
                  key={index}
                  title={section.title}
                  content={section.content}
                />
              )
            )}
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="cs-side">
            {/* SERVICES */}
            {services_delivered.length > 0 && (
              <div className="cs-card">
                <h3 className="cs-card-title">Services delivered</h3>
                <ul className="cs-list cs-list-sm">
                  {services_delivered.map((service: string, index: number) => (
                    <li key={`${service}-${index}`}>{service}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* INDUSTRIES */}
            {industries.length > 0 && (
              <div className="cs-card">
                <h3 className="cs-card-title">Industry</h3>
                <ul className="cs-list cs-list-sm">
                  {industries.map((industry: string, index: number) => (
                    <li key={`${industry}-${index}`}>{industry}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            {cta_heading && (
              <div className="cs-card cs-cta">
                <p className="cs-cta-heading">{cta_heading}</p>
                <Link className="cs-btn" href={cta_url || "/contact-us"}>
                  {cta_button || "Get Free Audit"}
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ================= EXTRA BRANDING / CTA BLOCK ================= */}
      <div className="our-work">
        <div className="b2b-branding-inere allindus-btn">
          <Image
            src="/google.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto iso"
            priority
          />
          <CommonCTA
            title="Ready to Win More Logistics Contracts Through Your Website?"
            description="Free audit for industrial logistics and supply chain companies across India."
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
    <section className="cs-section">
      <h2 className="cs-h2">{title}</h2>
      <div
        className="cs-richtext"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </section>
  );
}
