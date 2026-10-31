"use client";

import { useEffect, useRef, useState } from "react";

export default function OfferCard({
  offer,
  index = 0,
  phone,
  whatsapp,
}) {

  const cardRef =
    useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);


  /* =====================================================
     SCROLL REVEAL
  ===================================================== */

  useEffect(() => {

    const element =
      cardRef.current;

    if (!element) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setIsVisible(true);

          } else {

            /*
             * Reset when leaving viewport.
             * Animation will replay when
             * scrolling back.
             */

            setIsVisible(false);

          }

        },
        {
          threshold: 0.15,

          rootMargin:
            "0px 0px -60px 0px",
        }
      );


    observer.observe(element);


    return () => {
      observer.disconnect();
    };

  }, []);


  /* =====================================================
     CONTACT URLs
  ===================================================== */

  const phoneNumber =
    phone || "";


  const whatsappNumber =
    whatsapp ||
    phoneNumber.replace(
      /[^0-9]/g,
      ""
    );


  const whatsappMessage =
    `Hello Avantara Spa , I am interested in the ${offer.title} offer.`;


  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  return (

    <article
      ref={cardRef}
      className={`
        offer-card
        ${
          isVisible
            ? "offer-card-visible"
            : ""
        }
      `}
      style={{
        "--offer-delay":
          `${index * 140}ms`,
      }}
    >


      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="offer-image-wrapper">

        <img
          src={offer.image}
          alt={
            offer.imageAlt ||
            offer.title
          }
          className="offer-image"
          width="1110"
          height="1455"
          loading={
            index === 0
              ? "eager"
              : "lazy"
          }
        />

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="offer-card-content">

        {offer.label && (

          <span className="offer-label">
            {offer.label}
          </span>

        )}

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="offer-buttons">


          {/* =================================================
              CALL BUTTON
          ================================================= */}

          <a
            href={`tel:${phoneNumber}`}
            className="offer-call-button"
            aria-label={
              `Call for ${offer.title}`
            }
          >

            <span className="offer-button-icon">
              ☎
            </span>

            <span>
              Call Now
            </span>

          </a>


          {/* =================================================
              WHATSAPP BUTTON
          ================================================= */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="offer-whatsapp-button"
            aria-label={
              `WhatsApp about ${offer.title}`
            }
          >

            <span className="offer-button-icon">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <path
                  d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.33-1.66a11.87 11.87 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.16-3.45-8.42ZM12.09 21.79h-.01a9.86 9.86 0 0 1-5.03-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.27C2.19 6.44 6.62 2 12.08 2c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.43 9.89-9.88 9.89Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z"
                />

              </svg>

            </span>

            <span>
              WhatsApp
            </span>

          </a>


        </div>

      </div>

    </article>
  );
}