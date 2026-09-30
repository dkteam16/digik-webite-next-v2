import Link from "next/link";

type CommonCTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonTextSecond: string;
  buttonLinkSecond: string;
  footerText?: string;
};

export default function CommonCTA({
  title,
  description,
  buttonText,
  buttonLink,
  buttonTextSecond,
  buttonLinkSecond,
  footerText,
}: CommonCTAProps) {
  return ( 
     <>
        <div className="something bg-white">
            <div className='something-inner text-center'>
                 <h2   dangerouslySetInnerHTML={{ __html: title }} />
                <p>{description}</p>
                
              <div className='text-center button-ourlatest'>
                <Link href={buttonLink} className="btn-group-link">
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
                        {buttonText}
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
                  <Link href={buttonLinkSecond} className="btn-group-link">
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
                        {buttonTextSecond}
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
    <p className='somefree-last'>{footerText}</p>
        </div>
        </div>
     </>
  );
}