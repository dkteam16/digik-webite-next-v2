// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; 
// import "./globals.css";
// import Header from "./header";
// import Footer from "./footer";
// import MobileHeader from "./mobile-header";
// import FloatingContact from "./floating-contact";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: {
//     default: "Digital Kangaroos | B2B Web Design & SEO Agency in India",
//     template: "%s | Digital Kangaroos",
//   },
//   description:
//     "Specialist web design and SEO agency for manufacturers, exporters and B2B industrial companies in India.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">
          
//        <Header />
//        <MobileHeader /> 
//         {children} 
//        <Footer/>
//        <FloatingContact />
            
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import FloatingContact from "./floating-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Kangaroos | B2B Web Design & SEO Agency in India",
    template: "%s | Digital Kangaroos",
  },
  description:
    "Specialist web design and SEO agency for manufacturers, exporters and B2B industrial companies in India.",
  // Google Search Console verification meta tag
  verification: {
    google: "nFzqiLnF8bE-S46SIGooDHDg-vtrGJ64Kbo7u308Dfw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Digital Kangaroos",
              url: "https://digitalkangaroos.com/",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <MobileHeader />
        {children}
        <Footer />
        <FloatingContact />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DLVN0K22NX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DLVN0K22NX');
          `}
        </Script>
      </body>
    </html>
  );
}