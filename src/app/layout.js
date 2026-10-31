import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import OfferPopup from "@/components/OfferPopup";

import {
  footerData,
  siteData,
} from "@/Data/siteData";


/* =====================================================
   FONTS
===================================================== */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


/* =====================================================
   SEO METADATA
===================================================== */

export const metadata = {

  /* ===================================================
     METADATA BASE
  =================================================== */

  metadataBase: new URL(
    "https://avantaraspathane.best-spa.in"
  ),


  /* ===================================================
     TITLE
  =================================================== */

  title:
    siteData.seo?.title ||
    "Avantara Wellness Thane | Luxury Spa & Massage Near Me",


  /* ===================================================
     DESCRIPTION
  =================================================== */

  description:
    siteData.seo?.description ||
    "Discover Avantara Wellness in Thane West for relaxing spa experiences, professional massage treatments, body massage, wellness services and couples spa experiences near Ghodbunder Road and Suraj Water Park.",


  /* ===================================================
     KEYWORDS
  =================================================== */

  keywords:
    siteData.seo?.keywords || [

      "spa near me",
      "massage spa near me",
      "best spa near me",
      "best massage spa near me",
      "luxury spa near me",
      "body spa near me",
      "massage center near me",

      "spa in Thane",
      "spa in Thane West",
      "massage spa in Thane",
      "massage spa in Thane West",

      "best spa in Thane",
      "best spa in Thane West",

      "best massage spa in Thane",
      "best massage spa in Thane West",

      "luxury spa in Thane",
      "luxury spa in Thane West",

      "luxury massage spa in Thane",

      "massage center in Thane",
      "massage center in Thane West",

      "massage service in Thane",
      "massage service in Thane West",

      "body massage in Thane",
      "body massage in Thane West",

      "body massage spa in Thane",
      "body spa in Thane",

      "best body spa in Thane",
      "best massage in Thane",
      "best body massage in Thane",

      "spa and massage services in Thane",
      "spa wellness center in Thane",
      "wellness spa in Thane",

      "spa near Ghodbunder Road",
      "massage spa near Ghodbunder Road",

      "spa near Suraj Water Park",
      "massage spa near Suraj Water Park",

      "spa near Dongripada",
      "massage spa near Dongripada",

      "spa near Thane West",
      "massage near Thane West",

      "full body massage in Thane",
      "deep tissue massage in Thane",
      "Thai massage in Thane",
      "aromatherapy massage in Thane",
      "sports massage in Thane",
      "relaxation massage in Thane",

      "couples spa in Thane",
      "couple spa in Thane",
      "couple massage in Thane",

      "spa packages in Thane",
      "spa experience in Thane",
      "luxury spa experience in Thane",

      "spa near me in Thane West",
      "massage spa near me in Thane West",
      "best body massage near me",
      "best body spa near me",
      "nearest spa centre",
      "nearby spa massage",
      "find massage places near me",
      "massage near me now",
      "luxury spa near me",

    ],


  /* ===================================================
     CANONICAL
  =================================================== */

  alternates: {

    canonical:
      siteData.seo?.canonical ||
      "https://avantaraspathane.best-spa.in",

  },


  /* ===================================================
     ROBOTS / GOOGLE BOTS
  =================================================== */

  robots: {

    index: true,

    follow: true,

    nocache: false,

    googleBot: {

      index: true,

      follow: true,

      noimageindex: false,

      "max-video-preview": -1,

      "max-image-preview":
        "large",

      "max-snippet": -1,

    },

  },


  /* ===================================================
     OPEN GRAPH
  =================================================== */

  openGraph: {

    type:
      "website",

    locale:
      "en_IN",

    url:
      "https://avantaraspathane.best-spa.in",

    siteName:
      "Avantara Wellness",

    title:
      siteData.seo?.title ||
      "Avantara Wellness Thane | Luxury Spa & Massage Near Me",

    description:
      siteData.seo?.description ||
      "Discover Avantara Wellness in Thane West for relaxing spa experiences, professional massage treatments and wellness services.",

    images: [

      {

        url:
          "/hero/hero (1).png",

        width:
          1200,

        height:
          630,

        alt:
          "Avantara Wellness luxury spa in Thane West",

      },

    ],

  },


  /* ===================================================
     TWITTER
  =================================================== */

  twitter: {

    card:
      "summary_large_image",

    title:
      siteData.seo?.title ||
      "Avantara Wellness Thane | Luxury Spa & Massage Near Me",

    description:
      siteData.seo?.description ||
      "Premium spa, massage and wellness experiences in Thane West near Ghodbunder Road.",

    images: [
      "/hero/hero (1).png",
    ],

  },


  /* ===================================================
     ICONS / FAVICON
  =================================================== */

  icons: {

    icon:
      "/logo/logo.png",

    shortcut:
      "/logo/logo.png",

    apple:
      "/logo/logo.png",

  },


  /* ===================================================
     CATEGORY
  =================================================== */

  category:
    "Spa & Wellness",


  /* ===================================================
     APPLICATION
  =================================================== */

  applicationName:
    "Avantara Wellness",

  creator:
    "Avantara Wellness",

  publisher:
    "Avantara Wellness",

};


/* =====================================================
   ROOT LAYOUT
===================================================== */

export default function RootLayout({
  children,
}) {

  return (

    <html
      lang="en-IN"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
      `}
    >

      <body>


        {/* =================================================
            GOOGLE ANALYTICS
            GA4 Measurement ID
            G-WDH18H7S0H
        ================================================= */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WDH18H7S0H"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >

          {`

            window.dataLayer =
              window.dataLayer || [];

            function gtag(){
              window.dataLayer.push(arguments);
            }

            gtag(
              'js',
              new Date()
            );

            gtag(
              'config',
              'G-WDH18H7S0H'
            );

          `}

        </Script>


        {/* =================================================
            GLOBAL NAVBAR
        ================================================= */}

        <Navbar

          brand={
            siteData.brand
          }

          links={
            siteData.navbar.links
          }

          button={
            siteData.navbar.button
          }

        />


        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        {children}


        {/* =================================================
            GLOBAL FOOTER
        ================================================= */}

        <Footer

          footer={{

            ...footerData,


            /* ---------------------------------------------
               BRAND
            --------------------------------------------- */

            brand:
              siteData.brand,


            /* ---------------------------------------------
               CONTACT
            --------------------------------------------- */

            contact: {

              ...footerData.contact,

              phone:
                siteData.contact.phone,

              whatsapp:
                siteData.contact.whatsapp,

              whatsappUrl:
                siteData.contact.whatsappUrl ||

                `https://wa.me/${String(
                  siteData.contact.whatsapp || ""
                ).replace(
                  /\D/g,
                  ""
                )}`,

            },

          }}

        />


        {/* =================================================
            FLOATING CALL + WHATSAPP
        ================================================= */}

        <FloatingButtons />


        {/* =================================================
            OFFER POPUP
        ================================================= */}

        <OfferPopup />


        {/* =================================================
            BOOKINGBOT CHATBOT
            SPA ID: 233

            This is from your supplied code.
        ================================================= */}

        <Script
          id="bookingbot-loader"
          strategy="afterInteractive"
        >

          {`

            (function(){

              const spaId = "233";

              const script =
                document.createElement("script");

              script.src =
                "https://chatbot.bookingbot.in//bot.js?spa="
                + spaId;

              script.async = true;

              script.setAttribute(
                "data-spa",
                spaId
              );

              document.head.appendChild(
                script
              );

            })();

          `}

        </Script>


        {/* =================================================
            BOOKINGBOT TRACKER
        ================================================= */}

        <Script
          src="https://api.bookingbot.in/tracker.js"
          data-business-id="233"
          strategy="afterInteractive"
        />


      </body>

    </html>

  );

}