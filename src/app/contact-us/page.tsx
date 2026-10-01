import First from "../contact-us/first" 
import Contactleft from "../contact-us/contact-form-left" 
import Contactright from "../contact-us/contact-form-right" 
 
 
 
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
