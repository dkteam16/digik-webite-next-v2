import First from "../contact-us/first" 
import Contactleft from "../contact-us/contact-form-left" 
import Contactright from "../contact-us/contact-form-right" 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact Digital Kangaroos | Manufacturing Website & SEO Services",
  },
  description:
    "Contact Digital Kangaroos to discuss industrial website design, B2B branding or SEO for your manufacturing business. Share your goals and connect with our team about your next project.",
};
 
 
 
export default function loacl() {
  return (
    <div className="contact-us ">    
      <First />
       <div className="contact-form  bg-white"> 
          <div className="contact-form-inner">
              <Contactleft />
              <Contactright />   
          </div>
       </div>
           
      
    </div>
  );
}
