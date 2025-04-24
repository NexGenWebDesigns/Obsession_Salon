import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomeGallery({ filteredImages }) {
  const [popupImg, setPopupImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const openPopup = (img, index) => {
    setPopupImg(img);
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setPopupImg(null);
    setIsPlaying(false);
  };

  const showPrev = () => {
    const newIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setPopupImg(filteredImages[newIndex].image);
    setCurrentIndex(newIndex);
  };

  const showNext = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setPopupImg(filteredImages[newIndex].image);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    document.body.style.overflow = popupImg ? "hidden" : "auto";
    if (isPlaying) {
      const interval = setInterval(showNext, 2000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line
  }, [popupImg, isPlaying, currentIndex]);

  return (
    <section className="py-5" id="gallery">
      <div className="container">
        <h3 className="fw-bold text-center mb-4" data-aos="zoom-in">
          Our Work Gallery
        </h3>

        <div className="d-flex justify-content-around flex-wrap gallery-container">
          {filteredImages.map((item, index) => (
            <div className="gallery-container-sub" key={index}>
              <div
                className="gallery-img-wrapper rounded"
                onClick={() => openPopup(item.image, index)}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="caption-overlay d-flex align-items-center justify-content-center">
                  <h5 className="text-white text-center">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-5" data-aos="fade">
          <Link to="/gallery" className="btn btn-warning">
            View More <i className="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </div>

      {/* Popup Overlay */}
      {popupImg && (
        <div className="custom-popup">
          <span className="close-btn" onClick={closePopup}>
            &times;
          </span>
          <img src={popupImg} alt="View" className="popup-img" />
          <button className="popup-nav left" onClick={showPrev}>
            &#10094;
          </button>
          <button className="popup-nav right" onClick={showNext}>
            &#10095;
          </button>
          <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "❚❚ Pause" : "▶ Play"}
          </button>
        </div>
      )}
    </section>
  );
}

export default HomeGallery;
