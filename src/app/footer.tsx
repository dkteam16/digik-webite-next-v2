"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Link from "next/link";
export default function Footer() {
  const [linksOpen, setLinksOpen] = useState(false);

  return (
    <footer className="dk-footer">
      <div className="dk-footer-container">
        
        {/* COLUMN 1: LOGO & TAGLINE */}
        <div className="dk-footer-col dk-col-logo">
          <div className="dk-logo-box">
            <Link href="/">
              <Image
                src="/homelogo.png"
                alt="logo logo"
                width={0}
                height={0}
                sizes="100vw"
                className="imagee-stlak"
                priority
              />
            </Link>
          </div>
          <p className="dk-logo-sub">Web Development & Software Company</p>
        </div>

        {/* COLUMN 2: ADDRESS & CONTACT */}
        <div className="dk-footer-col dk-col-contact">
          <div className="dk-contact-item">
            
            <p><span className="dk-label-orange">INDIA:</span> SCO-4, 1ST FLOOR, OMAXE ROYAL RESIDENCY, LUDHIANA, 142022.</p>
            <p><u><a href="https://maps.app.goo.gl/tSENydQRWLV5wHse6" target="blank">View on Google Maps</a></u></p>
          </div>
          <div className="dk-contact-item">
            
            <p><span className="dk-label-orange">USA:</span> 48870 EAGLE VIEW TERRACE, FREMONT CA 94539.</p>
          </div>
          <div className="dk-contact-item">
            <span className="dk-label-orange">PHONE:</span>
            <p className="dk-phone-num"><a href="tel:+919814820845">+91 9814820845</a></p>
          </div>
          <div className="dk-contact-item">
            <span className="dk-label-orange">EMAIL:</span>
            <p><a href="mailto:info@digitalkangaroos.com">INFO@DIGITALKANGAROOS.COM</a></p>  
          </div>
        </div>

        {/* COLUMN 3: QUICK LINKS */}
        {/* COLUMN 3: QUICK LINKS */}
        <div className={`dk-footer-col dk-col-links ${linksOpen ? "is-open" : ""}`}>
          <button
            type="button"
            className="dk-links-toggle"
            onClick={() => setLinksOpen(!linksOpen)}
            aria-expanded={linksOpen}
            aria-controls="dk-links-list"
          >
            <span>MORE INFO</span>
            <span className="dk-links-icon">{linksOpen ? "−" : "+"}</span>
          </button>

          <ul id="dk-links-list" className="dk-links-list">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about-us">ABOUT</Link></li>
            <li><Link href="/all-services">SERVICES</Link></li>
            <li><Link href="/all-industries-page">INDUSTRIES</Link></li>
            <li><Link href="/work">WORK</Link></li>
            <li><Link href="/careers">CAREERS</Link></li>
            <li><Link href="/blogs">BLOG</Link></li>
            <li><Link href="/contact-us">CONTACT</Link></li>
            <li><Link href="/faq">FAQS</Link></li>
            <li><Link href="/privacy-policy">PRIVACY POLICY</Link></li>
            <li><Link href="/terms-conditions">TERMS &amp; CONDITIONS</Link></li>
          </ul>
</div>
       

        {/* COLUMN 4: SOCIALS & NEWSLETTER */}
        <div className="dk-footer-col dk-col-newsletter">
          <p className="dk-social-title">STALK US. FEED YOUR CREATIVITY</p>
          
          {/* Social Icons Wrapper */}
          <div className="dk-social-icons">
            <a href="https://www.facebook.com/digitalkangaroos" className="">
                 <Image
                       src="/face.png"
                       alt="logo logo"
                       width={0}
                       height={0}
                       sizes="100vw"
                       className=""  
                       priority
                       />
            </a>
            <a href="https://www.linkedin.com/company/digital-kangaroos/posts/" className="">
                 <Image
                       src="/link.png"
                       alt="logo logo"
                       width={0}
                       height={0}
                       sizes="100vw"
                       className=""  
                       priority
                       />
            </a>
            <a href="https://www.instagram.com/digitalkangaroos/" className="">
                 <Image
                       src="/insta.png"
                       alt="logo logo"
                       width={0}
                       height={0}
                       sizes="100vw"
                       className=""  
                       priority
                       />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=919814820845&text&type=phone_number&app_absent=0" className="">
                 <Image
                       src="/whatsp.png"
                       alt="logo logo"
                       width={0}
                       height={0}
                       sizes="100vw"
                       className=""  
                       priority
                       />
            </a>
            <a href="http://youtube.com/@digitalkangaroos" className="">  
                 <Image
                       src="/youtube.png"
                       alt="logo logo"
                       width={0}
                       height={0}
                       sizes="100vw"
                       className=""  
                       priority
                       />
            </a>
          </div>

          <p className="dk-newsletter-text">SIGN UP FOR THE DIGITAL KANGAROOS NEWSLETTER</p>
          
          {/* Newsletter Form */}
          <form className="dk-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="EMAIL ADDRESS" className="dk-input" required />
            <button type="submit" className="dk-submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR: COPYRIGHTS */}
      <div className='dk-footer-top'>
        <div className="dk-footer-bottom">
            <p>© DIGITAL KANGAROOS | ALL RIGHTS RESERVED 2026</p>
            <a href="#" className="dk-orange-link">DK COMPANY PROJECTS</a>
            <div className="dk-bottom-links">
            
            <a href="https://cartpotato.com/">CART POTATO</a>
            <Link href="/">Digital Kangaroos</Link>
            </div>
        </div>
      </div>  
    </footer>
  );
}
