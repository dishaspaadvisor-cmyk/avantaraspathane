"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/Data/siteData";
import { FaWhatsapp } from "react-icons/fa";

export default function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const phoneNumber = siteData.contact.phone;
  const whatsappNumber = siteData.contact.whatsapp;

  const whatsappMessage = encodeURIComponent(
    `Hello Avantara Wellness, I am interested in ${service.title}. Please provide me with more details.`
  );

  return (
    <article
      ref={cardRef}
      className={`service-card ${isVisible ? "service-card-visible" : ""
        }`}
      style={{
        "--card-delay": `${index * 140}ms`,
      }}
    >
      {/* ENTIRE CARD → SERVICE DETAIL */}
      <Link
        href={`/services/${service.id}`}
        className="service-card-clickable"
        aria-label={`View ${service.title}`}
      >
        {/* IMAGE */}
        <div className="service-image-wrapper">
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
            className="service-image"
            loading={index < 4 ? "eager" : "lazy"}
          />

          <div className="service-image-overlay" />
        </div>

        {/* CONTENT */}
        <div className="service-card-content">

          {/* TITLE + DURATION */}
          <div className="service-card-heading">
            <h2 className="service-card-title">
              {service.title}
            </h2>

            {service.duration && (
              <span className="service-duration ">
                {service.duration}
              </span>
            )}
          </div>



        </div>
      </Link>

      {/* CALL + WHATSAPP */}
      <div
        className="service-contact-buttons"
        style={{
          display: "flex",
          gap: "5px",
          padding: "0 8px 8px",
          width: "100%",
        }}
      >
        {/* CALL */}
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call Avantara Wellness"
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: "1 1 0",
            minWidth: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: "3px",

            height: "34px",
            padding: "5px 3px",

            borderRadius: "6px",

            background: "#f79b12",
            color: "#ffffff",

            textDecoration: "none",

            fontSize: "10px",
            fontWeight: "600",

            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          <Phone size={13} strokeWidth={2} />

          <span>
            Call
          </span>
        </a>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Avantara Wellness on WhatsApp"
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: "1 1 0",
            minWidth: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: "3px",

            height: "34px",
            padding: "5px 3px",

            borderRadius: "6px",

            background: "#25D366",
            color: "#ffffff",

            textDecoration: "none",

            fontSize: "10px",
            fontWeight: "600",

            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          <FaWhatsapp size={13} strokeWidth={2} />

          <span>
            WhatsApp
          </span>
        </a>
      </div>
    </article>
  );
}