import First from "../career/first" 
import Three from "../career/six-tings" 
import Form from "../career/career-contact" 
import Image from "next/image";
 
 
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
