import React from "react";
import { brandLogo, brandUrl, phoneNumber } from "../Data/AmrtuthaBrandData";
import { Link } from "react-router-dom";
import { services } from "../Data/ServicesPageData";
import { Helmet } from "react-helmet";

const Services = () => {

  return (
    <div>
      {/* Open Graph Tags */}
      <Helmet>
        <title>
          Salon & Tattoo Services in Hyderabad, Hyderabad | Amrutha Salon
          & Tattoos
        </title>
        <meta
          property="og:title"
          content="Salon & Tattoo Services in Hyderabad, Hyderabad | Amrutha Salon & Tattoos"
        />
        <meta
          property="og:description"
          content="Explore a wide range of salon and tattoo services at Obsession Unisex Salon & Nail Studio, Hyderabad. Our services include bridal makeup, haircuts, hair spa, facials, waxing, threading, nail art, permanent tattoos, and custom tattoo designs. We proudly serve customers from Hyderabad and Telangana. Our professionals ensure the highest quality standards and the latest trends in beauty, grooming, and tattoos. Book an appointment today and indulge in the best beauty experience in Hyderabad, Hyderabad. Get pampered with stylish makeovers and unique tattoos at affordable prices."
        />
        <meta property="og:image" content={`${brandLogo}`} />
        <meta property="og:url" content={`${brandUrl}/services`} />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Header */}
      <section
        data-aos="fade"
        className="container services-header text-white text-center bg-dark d-flex align-items-center justify-content-center flex-column"
      >
        <h2 className="fw-bold text-white">Our Premium Services</h2>
        <p className="">
          Obsession Unisex Salon & Nail Studio — where beauty meets boldness.
        </p>
      </section>

      {/* Section Title */}
      <div className="text-center p-2 mb-3 mt-5" data-aos="fade-right">
        <h3>Our Most Popular Services</h3>
      </div>

      {/* Filter Buttons */}
      {/* <div className="d-none justify-content-center mb-4">
        {["All", "male", "female"].map((category, index) => (
          <button
            key={category}
            data-aos="zoom-in"
            data-aos-delay={(index + 1) * 150}
            style={{ width: "6rem" }}
            className={`btn mx-2 ${
              filter === category ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

      {/* Services Grid */}
      <section className="d-flex justify-content-around flex-wrap">
        {services.map((service, index) => (
          <div
            className="service-card-container"
            key={index}
            data-aos="zoom-in"
          >
            <div className="card h-100 shadow-sm service-card">
              <div className="service-img-wrapper">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.alt}
                  loading="lazy"
                />
                <div className="service-icon d-flex align-items-center justify-content-center">
                  <i className={`fa ${service.icon}`}></i>
                </div>
              </div>
              <div className="card-body text-center d-flex justify-content-around flex-column">
                <h6 className="card-title fw-bold">{service.title}</h6>
                <p className="card-text">{service.description}</p>
                <Link to="/prices" className="w-100 btn btn-outline-dark">
                  View Prices
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Highlight Offer Section */}
      <section
        className="services-discount-banner py-5 text-center text-white"
        data-aos="fade"
      >
        <h3 className="fw-bold mb-3 text-white">
          Special Beauty Packages & Tattoo Combos!
        </h3>
        <p className="mb-4">
          ✨ Transform your look today! Book now and grab exclusive salon offers
          you simply can’t miss! 💇‍♀️
        </p>
        <a
          href={`tel:${phoneNumber}`}
          className="btn btn-danger px-4 py-2"
          aria-label="Book an Appointment"
        >
          Book an Appointment
        </a>
      </section>

      {/* Call to Action */}
      <section
        className="services-cta-section text-white text-center p-5"
        data-aos="fade"
      >
        <h3 className="fw-bold text-white">
          Let's Transform Your Look Together!
        </h3>
        <p>
          Our team is ready to give you the makeover you deserve.
        </p>
        <Link to="/contact" className="btn btn-outline-light px-4 py-2 mt-3">
          Contact Us Now
        </Link>
      </section>
    </div>
  );
};

export default Services;
