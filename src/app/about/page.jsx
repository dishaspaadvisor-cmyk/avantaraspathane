"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Aboutdata } from "@/Data/siteData";
import { siteData } from "@/Data/siteData";

/* =========================================================
   SCROLL ANIMATION COMPONENT
========================================================= */

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setIsVisible(true);

          } else {

            /*
             * Remove class when element leaves
             * viewport so animation plays again
             * when user scrolls back.
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


  return (
    <div
      ref={elementRef}
      className={`
        about-scroll-reveal
        ${isVisible ? "about-scroll-visible" : ""}
        ${className}
      `}
      style={{
        "--reveal-delay":
          `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


export default function AboutPage() {

  const {
    hero,
    story,
    philosophy,
    stats,
    cta,
  } = Aboutdata;


  return (
    <main className="about-page">


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        brand={siteData.brand}
        links={siteData.navbar.links}
        button={siteData.navbar.button}
      />


      {/* =================================================
          ABOUT HERO
      ================================================= */}

      <section className="about-hero">

        <div className="about-hero-inner">


          {/* HERO TEXT */}

          <div className="about-hero-content">

            <ScrollReveal>

              <span className="about-eyebrow">
                {hero.eyebrow}
              </span>

            </ScrollReveal>


            <ScrollReveal
              delay={100}
            >

              <h1 className="about-hero-title">

                {hero.title}

                <br />

                <em>
                  {hero.titleAccent}
                </em>

              </h1>

            </ScrollReveal>


            <ScrollReveal
              delay={200}
            >

              <p className="about-hero-description">
                {hero.description}
              </p>

            </ScrollReveal>

          </div>


          {/* HERO IMAGE */}

          <ScrollReveal
            className="about-image-reveal"
            delay={150}
          >

            <div className="about-hero-image">

              <img
                src={hero.image}
                alt={
                  hero.imageAlt ||
                  hero.title
                }
              />

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =================================================
          OUR STORY
      ================================================= */}

      <section className="about-story">

        <div className="about-story-inner">


          {/* IMAGE */}

          <ScrollReveal
            className="about-image-reveal"
          >

            <div className="about-story-image">

              <img
                src={story.image}
                alt={
                  story.imageAlt ||
                  story.title
                }
              />

            </div>

          </ScrollReveal>


          {/* CONTENT */}

          <div className="about-story-content">

            <ScrollReveal>

              <span className="about-section-eyebrow">
                {story.eyebrow}
              </span>

            </ScrollReveal>


            <ScrollReveal
              delay={100}
            >

              <h2 className="about-story-title">
                {story.title}
              </h2>

            </ScrollReveal>


            <div className="about-story-text">

              {story.description.map(
                (
                  paragraph,
                  index
                ) => (

                  <ScrollReveal
                    key={index}
                    delay={
                      150 +
                      index * 120
                    }
                  >

                    <p>
                      {paragraph}
                    </p>

                  </ScrollReveal>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PHILOSOPHY
      ================================================= */}

  


      {/* =================================================
          STATS
      ================================================= */}



      {/* =================================================
          CTA
      ================================================= */}



    </main>
  );
}