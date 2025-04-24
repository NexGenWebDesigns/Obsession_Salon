import React from "react";
import { Link } from "react-router-dom";
const AnniversaryPoster = () => {
  return (
    <div className="poster-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source
          src="https://res.cloudinary.com/daelyy9vj/video/upload/v1744958727/anniversary-poster-background-video_h9gytt.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="poster-content">
        <h1 className="poster-years mb-4 text-success">
          13<sup>th</sup>
        </h1>
        <h1 className="text-success anniversary-text" id="anniversary-text">
          🎉Anniversary🎉
        </h1>
        <h2>Amrutha Salon and Tattoo Studio</h2>
        <p>Thank you for 13 wonderful years of love, loyalty, and trust!</p>
        <Link className="btn btn-info" to="/services">
          Explore Our Services
        </Link>
      </div>
    </div>
  );
};

export default AnniversaryPoster;
