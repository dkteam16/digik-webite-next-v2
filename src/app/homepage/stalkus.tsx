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
                    <p>Let's build a website and SEO strategy that works as hard as your factory does.</p>
                    <div className='stalk-iner-in-img'>
                     <a href="https://www.facebook.com/digitalkangaroos" target="_blank" rel="noopener noreferrer">
                       <Image
                         src="/face.png"
                         alt="logo logo"
                         width={0}
                         height={0}
                         sizes="100vw"
                        className=""  
                        priority
                        /></a>
              <a href="https://www.linkedin.com/company/digital-kangaroos/posts/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/link.png"
                  alt="logo logo"
                  width={0}
                  height={0}
                  sizes="100vw"
            className=""  
            priority
            /></a>
            <a href="https://www.instagram.com/digitalkangaroos/" target="_blank" rel="noopener noreferrer">
                <Image
            src="/insta.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className=""  
            priority
            />  </a>
            <a href="https://api.whatsapp.com/send/?phone=919814820845&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Image
            src="/whatsp.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className=""  
            priority
            /> </a>
            <a href="http://youtube.com/@digitalkangaroos" target="_blank" rel="noopener noreferrer">
              <Image
            src="/youtube.png"
            alt="logo logo"
            width={0}
            height={0}
            sizes="100vw"
            className=""  
            priority
            />  </a>
            </div>
               </div>
          </div>
     </div>
  </>
  );
}
