import { Hero } from "../components/hero";
import { Products } from "../components/products";
import AboutWhy from "../components/about-why";
import { WhyFits } from "../components/why-fits";
import Cylinder from "../components/cylinder";
import Layers from "../components/layers";
import BubbleSize from "../components/bubble-size";
import BuyNow from "../components/buy-now";
import HipDelivers from "../components/hip-delivers";
import Consultant from "../components/consultatant";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import { siteConfig } from "@/config/site";
import Script from "next/script";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "خانه",
// };

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `https://${siteConfig.domain}/#organization`,
      name: "هیپ‌فوم | HipFoam",
      url: `https://${siteConfig.domain}/`,
      logo: `https://${siteConfig.domain}/android-chrome-192x192.png`,
      image: `https://${siteConfig.domain}/socials/og.jpg`,
      description: siteConfig.description,

      address: {
        "@type": "PostalAddress",
        streetAddress:
          "شهرک بزرگ صنعتی، میدان سوم، کوشش شمالی، خیابان ۱۱۲، پلاک ۷",
        addressLocality: "Shiraz",
        addressRegion: "Fars",
        addressCountry: "IR",
      },

      areaServed: {
        "@type": "AdministrativeArea",
        name: "Iran",
      },

      hasMap: "https://maps.google.com/?q=29.485417,52.538537",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.485417,
        longitude: 52.538537,
      },

      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "general inquiries",
          telephone: "+989174044721",
          availableLanguage: ["fa"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+989023035258",
          availableLanguage: ["fa"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "sales@hipfoam.com",
          availableLanguage: ["fa"],
        },
      ],

      // sameAs: [
      //   "https://instagram.com/hipfoam",
      //   "https://linkedin.com/company/hipfoam",
      // ],
    },

    {
      "@type": "WebSite",
      "@id": `https://${siteConfig.domain}/#website`,
      url: `https://${siteConfig.domain}/`,
      name: "هیپ‌فوم | HipFoam",
      publisher: {
        "@id": `https://${siteConfig.domain}/#organization`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <div dir="rtl" className="font-fa bg-white">
        {/* <div id="container">
        <div id="square"></div>
        <div id="stretcher"></div>
      </div> */}
        <Navbar />
        <Hero />
        <Products />
        <AboutWhy />
        <WhyFits />
        <Cylinder />
        <Layers />
        <BubbleSize />
        <Divider />
        <Consultant />
        <HipDelivers />
        <Divider />
        <BuyNow />
        <Footer />
      </div>
    </>
  );
}

const Divider = () => <div className="w-1/2 border-l h-44 border-zinc-300" />;
