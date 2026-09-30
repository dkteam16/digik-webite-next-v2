import Image from 'next/image';
export default function stalkus() {
  return (
  <>
     <div className='stalkus'>
            <Image
            src="/stalk.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className="imagee-stlak"  
            priority
            />
         
          <div className='stalk-iner'>
               <div className='stalk-iner-in'>
                    <h2>stalk us.</h2>
                    <p>Let's build a website and SEO strategy that works as hard as your factory does. Get your free audit today — we'll show you exactly what's holding your current site back and what we'd do differently.</p>
                    <div className='stalk-iner-in-img'>
                       <Image
            src="/face.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className=""  
            priority
            />
                <Image
            src="/link.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className=""  
            priority
            />
                <Image
            src="/insta.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className=""  
            priority
            />  
              <Image
            src="/whatsp.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className=""  
            priority
            /> 
              <Image
            src="/youtube.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className=""  
            priority
            />  
            </div>
               </div>
          </div>
     </div>
  </>
  );
}
