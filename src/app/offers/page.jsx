import Navbar from "@/components/Navbar";
import OfferCard from "@/components/OfferCard";

import { offersData,siteData } from "@/Data/siteData";


export default function OffersPage() {

  return (

    <main className="offers-page">


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        brand={siteData.brand}
        links={siteData.navbar.links}
        button={siteData.navbar.button}
      />


      {/* =================================================
          INTRO
      ================================================= */}

      <section className="offers-intro">

        <div className="offers-intro-inner">

          <span className="offers-eyebrow">
            {offersData.page.eyebrow}
          </span>


          <h1 className="offers-title">

            {offersData.page.title}

            <br />

            <em>
              {offersData.page.titleAccent}
            </em>

          </h1>


          <p className="offers-description">
            {offersData.page.description}
          </p>

        </div>

      </section>


      {/* =================================================
          OFFERS
      ================================================= */}

      <section className="offers-section">

        <div className="offers-grid">

          {offersData.items.map(
            (offer, index) => (

              <OfferCard
                key={
                  offer.id ||
                  index
                }

                offer={
                  offer
                }

                index={
                  index
                }

                phone={
                  siteData.contact.phone
                }

                whatsapp={
                  siteData.contact.whatsapp
                }

              />

            )
          )}

        </div>

      </section>


    </main>
  );
}