import React, { useState } from "react";

function SalonGallery({ images }) {
  const [popupIndex, setPopupIndex] = useState(null);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);

  const showNext = () => {
    setPopupIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setPopupIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-5" id="gallery">
      <div className="container">
        <h3 className="fw-bold text-center" data-aos="fade-up">
          Our Salon Gallery
        </h3>
        <p className="text-center mb-3" data-aos="fade-up">
          Explore our salon gallery featuring elegant hair styles, vibrant nail
          art, and stunning transformations. Each image reflects our
          professional touch, creativity, and dedication to delivering beauty
          and confidence.
        </p>
        <div className="d-flex justify-content-around flex-wrap">
          {images.map((img, index) => (
            <div className="home-gallery-single-container" key={index}>
              <div
                className=""
                onClick={() => openPopup(index)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="img-thumbnail"
                  loading="lazy"
                />
                <div className="mt-3">{img.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {popupIndex !== null && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center z-1050"
          style={{ zIndex: 1050 }}
        >
          <div
            className="position-relative bg-black rounded p-3"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          >
            <button
              className="btn btn-sm btn-light position-absolute top-0 end-0 m-2"
              onClick={closePopup}
            >
              &times;
            </button>
            <img
              src={images[popupIndex].image}
              alt="popup"
              className="img-fluid rounded"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-outline-light" onClick={showPrev}>
                &#8592; Prev
              </button>
              <button className="btn btn-outline-light" onClick={showNext}>
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SalonGallery;
