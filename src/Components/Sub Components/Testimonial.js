import React from "react";
import { Link } from "react-router-dom";

export const testimonialsData = [
  {
    name: "venki king",
    message:
      "The Perfect salon for Mens hair cut and styling with affordable prices. Mr Sonu is amazing in his work and friendly staff.",
    rating: 5,
    reviewlink: "https://maps.app.goo.gl/TYHUeX52sDGfbvih7",
  },
  {
    name: "Masna Varshitha",
    message:
      "They have provided the best service... I had a hair cut completely satisfied with their service. Will definitely recommend your beauty salon to our near ones. Thank you so much! Will be visiting regularly ❤",
    rating: 5,
    reviewlink: "https://maps.app.goo.gl/JyiS6MitWZcsZEKN9",
  },
  {
    name: "Poojitha Yadav",
    message:
      "Excellent haircut at affordable price...loved itt...and the owner is very kind and friendly Nature... highly recommend this obsession saloon bn reddy",
    rating: 5,
    reviewlink: "https://maps.app.goo.gl/56w9LuTHyFY9tW7s6",
  },
  {
    name: "gowtham reddy",
    message:
      "I had a wonderful time at Obsession. The hospitality was exceptional, and the services were top-notch. The entire staff was lovely and attentive. I highly recommend visiting this place for a great salon experience.",
    rating: 5,
    reviewlink: "https://maps.app.goo.gl/ugrwXtgQf7adfpWu9",
  },
  {
    name: "Shruthilaya Regati",
    message:
      "It's really awesome experience .the services provided by them are perfect and beautiful.I look completely different and cute after having multilayer haircut.please do visit and had a wonderful experience.",
    rating: 5,
    reviewlink: "https://maps.app.goo.gl/itGRKabh8cgkjVz36",
  },
  {
    name: "Bhavana Penumarthi",
    message:
      "I recommend people to come here for all the types of beauty services bcz I had a very good experience with my layer hair cut, calm and decent atmosphere and also services at reasonable prices, And they have the best hair spa services.",
    rating: 5,
    reviewlink: "https://maps.app.goo.gl/NNKuQ1c6JqSM4EGQ6",
  },
  {
    name: "Mounica Bapatla",
    message:
      "I'm very happy to take the hydra facial service in obsession parlour because they service was very good nd step by step explained they given the good facial......excellent",
    rating: 5,
    reviewlink: "https://maps.app.goo.gl/17Rqa87cyLNVy6ut6",
  },
  {
    name: "Nikhil Goud",
    message:
      "The service was excellent and the beauty of this saloon is too good. Staff is so friendly and I leterally recommend MR. Sonu friendly man nd they are treating customers very nyc I'm happy with haircut nd hairspa keep it up guy's",
    rating: 5,
    reviewlink: "https://maps.app.goo.gl/BrutxhMF7JAbhPB1A",
  },
];

function TestimonialsSlider() {

  return (
    <section
      className="testimonial-container py-5"
      id="testimonials"
      data-aos="fade"
    >
      <div className="container text-center">
        <h3 className="fw-bold mb-4">What Our Clients Say</h3>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonialsData.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="p-4">
                  <Link to={item.reviewlink}>
                    <img
                      src={require("./../../Assets/user.webp")}
                      alt={item.name}
                      className="rounded-circle mb-3"
                      width="80"
                      height="80"
                    />
                  </Link>
                  <p className="testimonial-message">
                    <i>{item.message}</i>
                  </p>
                  <div className="mb-3">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <i
                          className="fa-solid fa-star text-warning me-2"
                          key={i}
                        ></i>
                      ))}
                  </div>
                  <Link to={item.reviewlink} style={{ textDecoration: "none" }}>
                    <h5 className="fw-bold mt-2">— {item.name}</h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSlider;
