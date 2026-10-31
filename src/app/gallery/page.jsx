import Navbar from "@/components/Navbar";
import GalleryCard from "@/components/GalleryCard";

import { galleryData } from "@/Data/siteData";
import { siteData } from "@/Data/siteData";


export default function GalleryPage() {

  const {
    page,
    images,
  } = galleryData;

  return (
    <main className="gallery-page">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        brand={siteData.brand}
        links={siteData.navbar.links}
        button={siteData.navbar.button}
      />


      {/* =================================================
          GALLERY INTRO
      ================================================= */}

      <section className="gallery-intro">

        <div className="gallery-intro-inner">

          <span className="gallery-eyebrow">
            {page.eyebrow}
          </span>

          <h1 className="gallery-title">

            {page.title}

            <br />

            <em>
              {page.titleAccent}
            </em>

          </h1>

          <p className="gallery-description">
            {page.description}
          </p>

        </div>

      </section>


      {/* =================================================
          GALLERY
      ================================================= */}

      <section className="gallery-section">

        <div className="gallery-grid">

          {images.map(
            (item, index) => (

              <GalleryCard
                key={
                  item.id ||
                  index
                }

                image={
                  item.image
                }

                alt={
                  item.alt
                }

                title={
                  item.title
                }

                category={
                  item.category
                }

                number={
                  item.number ||
                  String(
                    item.id ||
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )
                }

                index={index}
              />

            )
          )}

        </div>

      </section>


      {/* =================================================
          GALLERY CTA
      ================================================= */}

      <section className="gallery-cta">

        <div className="gallery-cta-inner">

          <span className="gallery-eyebrow">
            / YOUR WELLNESS MOMENT
          </span>

          <h2 className="gallery-cta-title">

            Come in.

            <br />

            <em>
              Slow down.
            </em>

          </h2>

          <p>
            Discover a calm and thoughtful
            wellness experience created
            around you.
          </p>

          <a
            href="/services"
            className="gallery-cta-button"
          >

            <span>
              Explore Services
            </span>

            <span>
              ↗
            </span>

          </a>

        </div>

      </section>

    </main>
  );
}