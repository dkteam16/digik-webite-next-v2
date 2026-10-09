"use client";

import Link from "next/link";
import Image from "next/image";
import "./floating-contact.css";

export default function FloatingContact() {
  return (
    <div className="floatContact">
      <a href="tel:+919814820845" className="floatContactBtn" aria-label="Call">
        <Image src="/callside.png" alt="Call" width={22} height={23} />
      </a>

      <a
        href="https://wa.me/919814820845"
        target="_blank"
        rel="noopener noreferrer"
        className="floatContactBtn"   
        aria-label="WhatsApp"
      >
        <Image src="/whatsappside.png" alt="WhatsApp" width={29} height={29} />
      </a>   
       
      <Link href="/contact-us" className="floatContactBtn" aria-label="Enquiry">
        <Image src="/noteside.png" alt="Enquiry" width={26} height={27} />
      </Link>
    </div>
  );
}
