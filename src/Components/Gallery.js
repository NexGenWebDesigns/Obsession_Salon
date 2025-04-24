import React, { useState } from "react";
import { galleryData } from "../Data/GalleryPageData";
import { brandLogo, brandUrl, phoneNumber } from "../Data/AmrtuthaBrandData";
import { Helmet } from "react-helmet";

function Gallery() {
  const [visibleItems, setVisibleItems] = useState(9);

  const loadMore = () => {
    setVisibleItems(galleryData.length);
  };

  return (
    <div className=" mt-4 mb-4">
      {/* Open Graph Tags */}
      <Helmet>
        <title>
          Our Work | Salon & Tattoo Gallery in Hyderabad | Obsession
          Unisex Salon & Nail Studio
        </title>
        <meta
          property="og:title"
          content="Our Work | Salon & Tattoo Gallery in Hyderabad | Obsession
          Unisex Salon & Nail Studio"
        />
        <meta
          property="og:description"
          content="Take a look at the stunning transformations and creative tattoos crafted by Obsession
          Unisex Salon & Nail Studio and Tattoos in Hyderabad, Hyderabad. Browse our gallery showcasing bridal makeup, hair coloring, haircuts, nail art, facials, and breathtaking tattoo designs. Each image represents the passion and precision of our beauty professionals and tattoo artists. Serving Hyderabad, Hyderabad, and Telangana, our salon is a trusted name for beauty and tattoos. Get inspired by our latest work and book your appointment for a fresh, confident look today."
        />
        <meta property="og:image" content={`${brandLogo}`} />
        <meta property="og:url" content={`${brandUrl}/gallery`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div
        className="container parallax-banner text-center text-white"
        data-aos="fade"
      >
        <h2 className=" text-white">Our Beautiful Moments</h2>
        <p>Captured with our amazing clients and artists!</p>
      </div>

      <div className="main-container main-masonry-gallery d-flex justify-content-around flex-wrap overflow-hidden">
        {galleryData.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className="main-gallery-box main-fade-in"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="main-caption">
              <h5 className="text-white">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < galleryData.length && (
        <div className="text-center mt-4 mb-4">
          <button onClick={loadMore} className="btn btn-custom">
            Load More
          </button>
        </div>
      )}

      <div className="gallery-parallax-cta d-flex align-items-center text-center">
        <div className="container">
          <h3 className="gallery-cta-heading text-white">
            Capture Your Beautiful Moments
          </h3>
          <p className="gallery-cta-text">
            Discover our stunning gallery and book your next salon, spa, or
            tattoo appointment now!
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="btn btn-light btn-lg shadow-sm mt-3"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
