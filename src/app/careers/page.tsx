import First from "./first" 
import Three from "./six-tings" 
import Form from "./career-contact" 
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Careers at Digital Kangaroos | Join Our Digital Agency",
  },
  description:
    "Explore career opportunities at Digital Kangaroos Team and work on digital projects across website design, SEO, branding and marketing. Discover opportunities to grow your skills with our team.",
};
 
 
export default function loacl() {
  return (
    <div className="career all-indus-pagemian">    
      <First />
      <div className="relative   carere-second"> 
             <a href="http://cartpotato.com/" target="_blank" rel="noopener noreferrer" className="contents"><Image
                           src="/cartshop-new.png"
                           alt="logo"
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="leftcarere"
                           priority
                         /></a>
            <Three />
            <Image
                          src="/google.png"
                          alt="logo"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rightcarere"
                          priority
                        />
      </div>
      <Form />
                
    </div>
  );
}
