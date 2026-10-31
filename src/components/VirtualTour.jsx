"use client";

import { Maximize2 } from "lucide-react";

export default function VirtualTour() {
const tourUrl =
"https://tour.panoee.net/69d0aa3116e07f143331dd48";

const openFullscreen = () => {
const iframe = document.getElementById("panoee-tour");

if (iframe?.requestFullscreen) {
  iframe.requestFullscreen();
}


};

return ( <section className="virtual-tour-section"> <div className="virtual-tour-container">


    {/* Heading */}
    <div className="virtual-tour-heading">
      <span>EXPLORE OUR SPACE</span>
      <h2>Take a Virtual Tour</h2>
      <p>
        Experience our spa from anywhere with our interactive 360°
        virtual tour.
      </p>
    </div>

    {/* Tour */}
    <div className="virtual-tour-wrapper">

      <iframe
        id="panoee-tour"
        src={tourUrl}
        title="Avantara Spa Thane Virtual Tour"
        allow="fullscreen; accelerometer; gyroscope; autoplay"
        allowFullScreen
        loading="lazy"
      />

      {/* Fullscreen Button */}
      <button
        type="button"
        className="tour-fullscreen-btn"
        onClick={openFullscreen}
        aria-label="Open virtual tour fullscreen"
      >
        <Maximize2 size={18} />
        <span>Fullscreen</span>
      </button>

    </div>
  </div>

  <style jsx>{`
    .virtual-tour-section {
      width: 100%;
      padding: 80px 20px;
      background: #f8f5ef;
    }

    .virtual-tour-container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .virtual-tour-heading {
      text-align: center;
      margin-bottom: 35px;
    }

    .virtual-tour-heading span {
      display: block;
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 3px;
      color: #a4774e;
    }

    .virtual-tour-heading h2 {
      margin: 0 0 14px;
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 500;
      color: #17120d;
    }

    .virtual-tour-heading p {
      max-width: 650px;
      margin: 0 auto;
      color: #665f58;
      font-size: 16px;
      line-height: 1.7;
    }

    .virtual-tour-wrapper {
      position: relative;
      width: 100%;
      height: 700px;
      overflow: hidden;
      border-radius: 18px;
      background: #111;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    .virtual-tour-wrapper iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }

    .tour-fullscreen-btn {
      position: absolute;
      right: 18px;
      bottom: 18px;
      z-index: 10;

      display: flex;
      align-items: center;
      gap: 8px;

      padding: 11px 16px;
      border: 0;
      border-radius: 8px;

      background: rgba(23, 18, 13, 0.9);
      color: #fff;

      font-size: 14px;
      cursor: pointer;

      transition: all 0.3s ease;
    }

    .tour-fullscreen-btn:hover {
      background: #a4774e;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .virtual-tour-section {
        padding: 55px 15px;
      }

      .virtual-tour-heading {
        margin-bottom: 25px;
      }

      .virtual-tour-wrapper {
        height: 500px;
        border-radius: 12px;
      }

      .tour-fullscreen-btn {
        right: 12px;
        bottom: 12px;
        padding: 10px 13px;
      }
    }

    @media (max-width: 480px) {
      .virtual-tour-wrapper {
        height: 430px;
      }

      .tour-fullscreen-btn span {
        display: none;
      }

      .tour-fullscreen-btn {
        width: 42px;
        height: 42px;
        justify-content: center;
        padding: 0;
      }
    }
  `}</style>
</section>


);
}
