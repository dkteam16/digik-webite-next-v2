import Image from "next/image";
import PrincipleMobile from "@/app/about-us/principles-moble" 


export default function Principles() {
  return ( 
     <>
     <section className="principles-mian bg-white">
        <div className="principles">
            <div className="principles-top">
                <div className="principles-top-in">
                    <p className="text-[#F4A31D]">Our Values</p>
                    <h2  className="text-[#242832]">The Principles <span  className="text-[#F4A31D]">We Work By</span>  </h2>
                    <p className="text-[#535353]">These are not aspirational wall-posters. They are the actual principles that govern every decision we make, every project we take on, and every recommendation we give a client.</p>
                </div>
                <a href="http://cartpotato.com/" target="_blank" rel="noopener noreferrer" className="contents"><Image
                          src="/cartshop.png"
                          alt="logo logo"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="iso"  
                          priority
                          /></a>
            </div>
            {/* ----- */}
            <div  className="desktop-view">
            <ul> 
                  <li>
                      <Image
                          src="/about/pri1.png"
                          alt="logo logo"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="iso"  
                          priority
                          />
                      <h3>Specialisation Over Scale</h3>
                      <p>We would rather be the best agency for manufacturers than a large agency for everyone. Depth always beats breadth.</p>
                  </li>
                 <li>
                     <Image
                         src="/about/pri2.png"
                         alt="logo logo"
                         width={0}
                         height={0}
                         sizes="100vw"
                         className="iso"  
                         priority
                         />
                    <h3>Results, Not Deliverables</h3>
                    <p>We measure success in RFQs, rankings, and revenue — not in pages delivered, reports sent, or hours billed.</p>
                 </li>
                 <li>
                    <Image
                        src="/about/pri3.png"
                        alt="logo logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="iso"  
                        priority
                        />
                    <h3>Honest Before Comfortable</h3>
                    <p>We will tell you when your idea won't work. We will tell you when your budget is too low for what you need. We don't tell clients what they want to hear.</p>
                 </li>
                 <li>
                    <Image
                        src="/about/pri4.png"
                        alt="logo logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="iso"  
                        priority
                        />
                    <h3>Build Assets, Not Dependencies</h3>
                    <p>Everything we build for you is something you own and that compounds in value over time. Never a subscription to someone else's platform.</p>
                 </li>
            </ul>
        </div>
         <div className="mobile-view">   <PrincipleMobile /> </div>

        </div>
        </section>
     </>
   );
}