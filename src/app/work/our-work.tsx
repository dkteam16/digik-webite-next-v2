import Image from "next/image";
export default function loacl() {
  return (
    <div className="our-section-first0w-eorj">  
         <Image
            src="/google.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto iso"
            priority
         />
        <div className="our-section-first0w-eorj-iner">
               <p className="text-[#F4A31D]">Our work</p>
                <h1>Industrial companies. Ranked. Found. Trusted.</h1>
                <p className="text-[#333333]">We don't take on every client. We take on manufacturers, exporters, and B2B industrial companies — and we build digital engines that get them found by the buyers who matter.    </p>
        </div>    
          <a href="http://cartpotato.com/" target="_blank" rel="noopener noreferrer" className="contents"><Image 
            src="/cartshop.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto iso"
            priority
         /></a>             
    </div>
  );
}
