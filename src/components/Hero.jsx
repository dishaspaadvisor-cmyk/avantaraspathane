"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { siteData } from "@/Data/siteData";

import {
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";


export default function Hero({ hero }) {

  const [activeSlide, setActiveSlide] =
    useState(0);


  /* =================================================
     SLIDES
  ================================================= */

  const slides =
    hero?.slides || [];


  const currentSlide =
    slides[activeSlide] || slides[0];


  /* =================================================
     CONTACT DATA
  ================================================= */

  const contact =
    siteData?.contact || {};


  /* =================================================
     PHONE
  ================================================= */

  const phoneNumber =
    contact.phone || "";


  const phoneUrl =
    contact.phoneUrl ||
    `tel:${String(phoneNumber).replace(
      /[^0-9+]/g,
      ""
    )}`;


  /* =================================================
     WHATSAPP
  ================================================= */

  const whatsappNumber =
    String(
      contact.whatsapp ||
      phoneNumber ||
      ""
    ).replace(/\D/g, "");


  const whatsappMessage =
    "Hi, I am visiting the Avantara Wellness website. I would like to know more about your spa services, packages, and today's availability.";


  const whatsappBaseUrl =
    contact.whatsappUrl ||
    `https://wa.me/${whatsappNumber}`;


  const whatsappUrl =
    `${whatsappBaseUrl}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  /* =================================================
     AUTO SLIDER
  ================================================= */

  useEffect(() => {

    if (!slides.length) return;


    const interval =
      setInterval(() => {

        setActiveSlide(
          (previous) =>
            (previous + 1) %
            slides.length
        );

      }, 5000);


    return () => {

      clearInterval(interval);

    };

  }, [slides.length]);


  /* =================================================
     SAFETY
  ================================================= */

  if (!currentSlide) {

    return null;

  }


  return (

    <section
      className="hero"
      id="home"
    >


      {/* =================================================
          DESKTOP HERO IMAGE
          Changes with every slide
      ================================================= */}

      <div
        className="
          hero-image-wrapper
          hero-desktop-image
        "
      >

        <Image

          key={`desktop-${activeSlide}`}

          src={
            currentSlide.desktopImage
          }

          alt={
            currentSlide.imageAlt ||
            "Avantara Wellness Thane"
          }

          fill

          priority={
            activeSlide === 0
          }

          sizes="100vw"

          className="hero-image"

        />

      </div>


      {/* =================================================
          MOBILE HERO VIDEO
          ONE COMMON VIDEO
          Does NOT change with slides
      ================================================= */}

      <div
        className="
          hero-image-wrapper
          hero-mobile-image
        "
      >

        {hero?.mobileVideo ? (

          <video

            className="
              hero-image
              hero-mobile-video
            "

            autoPlay

            muted

            loop

            playsInline

            preload="auto"

            aria-label=
              "Avantara Wellness mobile hero video"

          >

            <source

              src={
                hero.mobileVideo
              }

              type="video/mp4"

            />

          </video>

        ) : (

          <Image

            src={
              currentSlide.desktopImage
            }

            alt={
              currentSlide.imageAlt ||
              "Avantara Wellness Thane"
            }

            fill

            priority

            sizes="100vw"

            className="hero-image"

          />

        )}

      </div>


      {/* =================================================
          OVERLAY
      ================================================= */}

      <div
        className="hero-overlay"
        aria-hidden="true"
      />


      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <div className="hero-container">

        <div className="hero-content">





          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            key={`title-${activeSlide}`}
            className="
              hero-title
              hero-pop-right
              hero-delay-1
            "
          >

            {currentSlide.title}


            {currentSlide.titleAccent && (

              <span>

                {currentSlide.titleAccent}

              </span>

            )}

          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          {currentSlide.description && (

            <p
              key={`description-${activeSlide}`}
              className="
                hero-description
                hero-pop-right
                hero-delay-2
              "
            >

              {currentSlide.description}

            </p>

          )}


          {/* =================================================
              CALL + WHATSAPP
          ================================================= */}

          <div
            className="
              hero-actions
              hero-pop-right
              hero-delay-3
            "
          >


            {/* =================================================
                CALL NOW
            ================================================= */}

            <a
              href={phoneUrl}

              className="hero-primary-button"

              aria-label={
                `Call ${
                  siteData.brand?.name ||
                  "Avantara Wellness"
                }`
              }

              style={{

                background:
                  "#D4AF37",

                color:
                  "#ffffff",

                border:
                  "1px solid #D4AF37",

                padding:
                  "14px 24px",

                minHeight:
                  "52px",

                minWidth:
                  "145px",

                display:
                  "inline-flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap:
                  "10px",

                borderRadius:
                  "50px",

                boxSizing:
                  "border-box",

                textDecoration:
                  "none",

                fontWeight:
                  600,

              }}
            >

              <span>
                Call Now
              </span>


              <span
                className="hero-button-arrow"

                style={{
                  display:
                    "inline-flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",
                }}
              >

                <FaPhone
                  size={17}
                />

              </span>

            </a>


            {/* =================================================
                WHATSAPP
            ================================================= */}

            <a
              href={whatsappUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="
                hero-secondary-button
              "

              aria-label=
                "Contact us on WhatsApp"

              style={{

                background:
                  "#25D366",

                color:
                  "#ffffff",

                border:
                  "1px solid #25D366",

                padding:
                  "14px 24px",

                minHeight:
                  "52px",

                minWidth:
                  "145px",

                display:
                  "inline-flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap:
                  "10px",

                borderRadius:
                  "50px",

                boxSizing:
                  "border-box",

                textDecoration:
                  "none",

                fontWeight:
                  600,

              }}
            >

              <FaWhatsapp
                size={19}
              />

              <span>
                WhatsApp
              </span>

            </a>


          </div>


        </div>

      </div>


      {/* =================================================
          BOTTOM SECTION
      ================================================= */}

      <div className="hero-bottom">


        {/* =================================================
            STATS
        ================================================= */}

        <div
          className="
            hero-stats
            hero-pop-bottom
            hero-delay-4
          "
        >

          {hero.stats?.map(
            (stat) => (

              <div
                className="hero-stat"
                key={stat.label}
              >

                <strong>
                  {stat.number}
                </strong>

                <span>
                  {stat.label}
                </span>

              </div>

            )
          )}

        </div>


        {/* =================================================
            SLIDE INDICATORS
        ================================================= */}

        <div
          className="
            hero-slide-indicators
          "

          aria-label=
            "Hero slides"
        >

          {slides.map(
            (_, index) => (

              <button

                key={index}

                type="button"

                aria-label={
                  `Go to slide ${index + 1}`
                }

                aria-current={
                  activeSlide === index
                    ? "true"
                    : "false"
                }

                onClick={() =>
                  setActiveSlide(index)
                }

                className={
                  activeSlide === index
                    ? "active"
                    : ""
                }

              />

            )
          )}

        </div>


        {/* =================================================
            SCROLL
        ================================================= */}

        <a

          href={
            hero.scroll.href
          }

          className="
            hero-scroll
            hero-pop-bottom
            hero-delay-5
          "
        >

          <span
            className="
              hero-scroll-line
            "
          />

          <span>
            {hero.scroll.label}
          </span>

        </a>


      </div>


    </section>

  );

}