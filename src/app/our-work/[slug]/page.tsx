"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Link from "next/link";
import CommonCTA from "@/app/common-components/last-industries";
import Image from "next/image"; 

import Allinonemarque from "@/app/industrial-website-desgin/allinonemarque";
const API_BASE = "https://www.dkteam.in/dk-admin/api/case-studies";

export default function CaseStudyDetail() {
  const params = useParams();

  const slug = typeof params?.slug === "string" ? params.slug : "";

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    const controller = new AbortController();

    setLoading(true);
    setError("");

    fetch(`${API_BASE}/${slug}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed (${res.status})`);
        }

        return res.json();
      })
      .then((json) => {
        console.log("API RESPONSE:", json);

        if (!json.status) {
          throw new Error(json.message || "Case study not found");
        }

        setData(json.data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [slug]);

  if (loading) {
    return <div>Loading case study...</div>;
  }

  if (error) {
    return <div>Could not load this case study: {error}</div>;
  }

  if (!data) {
    return null;
  }

  /* ================= API DATA ================= */

  const {
    title,
    client,
    short_description,
    project_tags = [],
    statistics = [],
    project_information = [],
    problem = [],
    outcome = [],
    services_delivered = [],
    industries = [],
    cta_heading,
    cta_button,
    cta_url,
  } = data;

  /* ================= JSX ================= */

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
            {client} – {title}
          </h1>

          {/* DESCRIPTION */}

          <p className="avs-desc">{short_description}</p>

          {/* INFO */}

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
              src="/iso-badge.png"
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
            {/* PROBLEM */}

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

            {/* OUTCOME */}

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

                <Link className="cs-btn" href={cta_url || "/contact"}>
                  {cta_button || "Get Free Audit"}
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ================= EXTRA BRANDING / CTA BLOCK ================= */}
      {/* Pehle ye JSX component ke bahar tha isliye render nahi ho raha tha.
          Ab isse return ke andar, section ke andar move kar diya gaya hai. */}
      <div className="our-work ">
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
          buttonLink="/contact"
          buttonTextSecond="WhatsApp Us"
          buttonLinkSecond="/contact"
          footerText=" "
        />
      </div></div>
    </section>
  );
}

/* =====================================================
   CONTENT SECTION
===================================================== */

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
