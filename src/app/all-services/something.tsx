import Link from 'next/link'; 
export default function Something() {
  return ( 
     <>
        <div className="something bg-white">
            <div className='something-inner text-center'>
                <h2>Not Sure Which Service You Need?</h2>
                <p>Start with a free audit. We'll tell you exactly what's holding your current digital presence back, which services would make the most impact for your specific situation, and what a realistic timeline and investment looks like.</p>
              <div className='text-center button-ourlatest'>
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
                        get your free website audit
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
    <p className='somefree-last'>Free  ·  No Obligation  ·  Delivered in 48 Hours</p>
        </div>
        </div>
     </>
  );
}