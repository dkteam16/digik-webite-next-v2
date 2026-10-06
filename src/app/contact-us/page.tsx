import First from "../contact-us/first" 
import Contactleft from "../contact-us/contact-form-left" 
import Contactright from "../contact-us/contact-form-right" 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch with Digital Kangaroos | Contact Information",
  description: "Have questions or ready to start a project? Contact Digital Kangaroos today. Find our contact information and reach out to our experts for all your digital needs.",
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
