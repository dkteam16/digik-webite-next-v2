import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; 
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
      <body className="min-h-full flex flex-col">
          
       <Header />
       <MobileHeader /> 
        {children} 
       <Footer/>
       <FloatingContact />
            
      </body>
    </html>
  );
}
