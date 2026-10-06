
import Image from "next/image";
import Link from 'next/link';

export default function BuildManu() {
  return (
  <div className='build-manu  relative'>
    <section className="relative build-manu-iinner   w-full       flex items-center ">
      
      {/* --- Left Top ISO Badge --- */}
      <div className="absolute top-10 left-10 built-top-img  ">
        <img src="/iso.png" alt="ISO Certified" className="w-full  " />
      </div>

      <div className="flex items-center justify-center  relative build-manu-iinnerdda">
        
        {/* --- Left Side: Text Content --- */}
        <div className="space-y-6 z-10 relative build-manu-iinner-left">
          <p className=" top-text-build uppercase  font-[600]">
            Web Design & SEO Agency — India
          </p>
          
          <h2 className="    leading-tight uppercase">
            Built <br /> 
            for <span className="text-[#f5a623]">Manufacturers.</span> <br />
            Engineered to win.
          </h2>

          <p className="text-gray-600   leading-relaxed font-semibold top-text-build   ">
            WE BUILD HIGH-PERFORMANCE WEBSITES AND SEO STRATEGIES EXCLUSIVELY FOR 
            MANUFACTURERS, EXPORTERS, AND B2B INDUSTRIAL COMPANIES — SO YOUR NEXT 
            CUSTOMER FINDS YOU, TRUSTS YOU, AND SENDS YOU THE RFQ.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
              
               <div className="flex flex-wrap gap-4 pt-4 items-center buil-manubtn">
                        {/* पहला बटन (Orange) */}
                     
      <Link href="/contact-us" className="btn-group-link">
        {/* मुख्य बटन का कंटेनर */}
        <div className="btn-main-container">
          
          {/* अंदर का बॉर्डर वाला डिब्बा */}
          <div className="btn-inner-border">
            
            {/* बायाँ एरो (शुरुआत में छुपा हुआ, होवर पर अंदर आएगा) */}
            <span className="btn-arrow-left font-bold">
              &gt;&gt;
            </span>

            {/* मुख्य टेक्स्ट */}
            <span className="btn-text font-bold uppercase tracking-tight">
              Get a Free Website Audit
            </span>

            {/* दायाँ एरो (शुरुआत में दिखेगा, होवर पर बाहर जाएगा) */}
            <span className="btn-arrow-right font-bold">
              &gt;&gt;
            </span>
          </div>

          {/* होवर करने पर पीछे से आने वाला काला गोला (Background Fill Effect) */}
          <div className="btn-bg-fill"></div>
        </div>
      </Link>
     
                          {/* दूसरा बटन (White -> Black on Hover) */}
                          <Link href="/work" className="btn-group-link">
        {/* मुख्य बटन का कंटेनर */}
        <div className="btn-main-container">
          
          {/* अंदर का बॉर्डर वाला डिब्बा */}
          <div className="btn-inner-border">
            
            {/* बायाँ एरो (शुरुआत में छुपा हुआ, होवर पर अंदर आएगा) */}
            <span className="btn-arrow-left font-bold">
              &gt;&gt;
            </span>

            {/* मुख्य टेक्स्ट */}
            <span className="btn-text font-bold uppercase tracking-tight">
             See Our Work
            </span>

            {/* दायाँ एरो (शुरुआत में दिखेगा, होवर पर बाहर जाएगा) */}
            <span className="btn-arrow-right font-bold">
              &gt;&gt;
            </span>
          </div>

          {/* होवर करने पर पीछे से आने वाला काला गोला (Background Fill Effect) */}
          <div className="btn-bg-fill"></div>
        </div>
      </Link>
                </div>




          </div>
        </div>

        {/* --- Right Side: Image Collage (5 Images) --- */}
         
          <div className="relative w-full  desktop-view  flex items-center justify-end  gap-5  relative build-manu-iinner-right">
            
            <div className='build-manu-iinner-right-one '>
                  <div className="  w-[165px] m-auto   relative left-5 group overflow-hidden   ">
                    <img 
                      src="/build1.png" 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>

                
                  <div className=" w-[285px] m-auto mt-5 mb-2  group overflow-hidden   ">
                    <img 
                      src="/build3.png" 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>

                
                  <div className=" w-[170px] m-auto  top-[160px] left-[-20px]    group overflow-hidden   ">
                    <img 
                      src="/build5.png" 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
            </div>
                <div className='build-manu-iinner-right-two'>
                    <div className=" w-[267px]  my-8  bottom-0 left-20  group overflow-hidden   ">
                      <img 
                        src="/build2.png" 
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>

                    
                    <div className="w-[321px]    bottom-10 right-[-10px]  group overflow-hidden   ">
                      <img 
                        src="/build4.png" 
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                </div>
          </div>
        
        <div className='mobile-view  build-for-mobile'>
                <Image
                                                       src="/build.png"
                                                       alt="logo "
                                                       width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       className="imagee-stlakdsd"  
                                                       priority
                                                       />
        </div>

      </div>

      {/* --- Bottom Right Badge --- */}
      <div className="absolute  built-botm-img  ">
        <img src="/cartshop.png" alt="Digital Kangaroos" className="w-full h-auto animate-spin-slow" />
      </div>

    </section>
  </div>
  );
}