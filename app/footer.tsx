"use client";
import Image from 'next/image';
import React from 'react';

export default function  Footer() {
  return (
    <footer className="dk-footer">
      <div className="dk-footer-container">
        
        {/* COLUMN 1: LOGO & TAGLINE */}
        <div className="dk-footer-col dk-col-logo">
          <div className="dk-logo-box">
             <Image
                       src="/homelogo.png"
                       alt="logo logo"
                       width={0}
                       height={0}
                       sizes="100vw"
                       className="imagee-stlak"  
                       priority
                       />
          </div>
          <p className="dk-logo-sub">Web Development & Software Company</p>
        </div>

        {/* COLUMN 2: ADDRESS & CONTACT */}
        <div className="dk-footer-col dk-col-contact">
          <div className="dk-contact-item">
            
            <p><span className="dk-label-orange">INDIA:</span> SCO-4, 1ST FLOOR, OMAXE ROYAL RESIDENCY, LUDHIANA, 142022.</p>
          </div>
          <div className="dk-contact-item">
            
            <p><span className="dk-label-orange">USA:</span> 48870 EAGLE VIEW TERRACE, FREMONT CA 94539.</p>
          </div>
          <div className="dk-contact-item">
            <span className="dk-label-orange">PHONE:</span>
            <p className="dk-phone-num">+91 9814820845</p>
          </div>
          <div className="dk-contact-item">
            <span className="dk-label-orange">EMAIL:</span>
            <p>INFO@DIGITALKANGAROOS.COM</p>
          </div>
        </div>

        {/* COLUMN 3: QUICK LINKS */}
        <div className="dk-footer-col dk-col-links  desktop-view">
          <ul className="dk-links-list">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#industries">INDUSTRIES</a></li>
            <li><a href="#work">WORK</a></li>
            <li><a href="#careers">CAREERS</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#faqs">FAQS</a></li>
            <li><a href="#press">PRESS RELEASE</a></li>
            <li><a href="#privacy">PRIVACY POLICY</a></li>
            <li><a href="#terms">TERMS & CONDITIONS</a></li>
          </ul>
        </div>

        {/* COLUMN 4: SOCIALS & NEWSLETTER */}
        <div className="dk-footer-col dk-col-newsletter">
          <p className="dk-social-title">STALK US. FEED YOUR CREATIVITY</p>
          
          {/* Social Icons Wrapper */}
          <div className="dk-social-icons">
            <a href="#" className="">
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
            <a href="#" className="">
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
            <a href="#" className="">
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
            <a href="#" className="">
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
            <a href="#" className="">  
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
            
            <a href="#">CART POTATO</a>
            <a href="#">DK SCHOOL</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
