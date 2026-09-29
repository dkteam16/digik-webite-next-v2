import Image from "next/image";
import PeopleMobile from "@/app/about/people-behind-mobile"  

export default function PeopleBehind() {
  return ( 
     <>
     <section className="people-mian relative bg-[#F5F5F5]">
          <Image
            src="/google.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className="people-mian-logo"  
            priority
            />

        <div className="people">
            <div className="people-top">
                <div className="people-top-in">
                    <p className="text-[#F4A31D]">The Team</p>
                    <h2  className="text-[#242832]">The People Behind <span  className="text-[#F4A31D]">Your Digital Growth</span>  </h2>
                    <p className="text-[#535353]">A tight-knit team of web designers, SEO strategists, and industrial content specialists — all focused on one thing: making manufacturing companies impossible to ignore online.</p>
                </div>
            </div>
            {/* ----- */}<div className="desktop-view">
            <ul>
                  <li>
                       <h4>DK</h4>
                      <h3>Founder & Strategy Lead</h3>
                      <p>With over 8 years building digital strategies for manufacturers and exporters, our founder has developed a deep understanding of what makes industrial buyers convert — and what makes them leave. Every strategy at Digital Kangaroos starts with this knowledge.</p>
                      <p className="people-p">Web Strategy · B2B SEO · Client Relations</p>
                  </li>
                 <li>
                      <h4>WD</h4>
                    <h3>Lead Web Designer</h3>
                    <p>Our design lead specialises in creating industrial websites that balance credibility with clarity. Every layout, every section, and every visual decision is informed by B2B buyer research — not personal aesthetic preference.</p>
                    <p className="people-p">UI/UX · Industrial Design · Frontend</p>
                 </li>
                 <li>
                      <h4>WD</h4>
                    <h3>SEO & Content Strategist</h3>
                    <p>Our SEO strategist focuses exclusively on B2B industrial search — building keyword strategies, content programmes, and link profiles that rank manufacturing companies for the exact terms their ideal buyers are searching.</p>
                    <p  className="people-p"> Technical SEO · Industrial Content · Rankings</p>
                 </li>
                
            </ul></div>
              <div className="mobile-view"><PeopleMobile /></div>
        </div>
        </section>
     </>
   );
}