import First from "./first" 
import Three from "./six-tings" 
import Form from "./career-contact" 
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "careers",
};
 
 
export default function loacl() {
  return (
    <div className="career all-indus-pagemian">    
      <First />
      <div className="relative   carere-second"> 
             <Image
                           src="/cartshop.png"
                           alt="logo"
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="leftcarere"
                           priority
                         />
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
