import React from "react";
import { Link } from "react-router-dom";
import {
  address1,
  address1Link,
  brandLogo,
  brandUrl,
  email,
  phoneNumber,
} from "../Data/AmrtuthaBrandData";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      {/* Open Graph Tags */}
      <Helmet>
        <title>
          Book Appointment | Obsession Unisex Salon & Nail Studio in Hyderabad,
          Hyderabad
        </title>
        <meta
          property="og:title"
          content="Book Appointment | Where beauty meets boldness — express yourself, refresh your look, and embrace your unique style with us. in Hyderabad, Hyderabad"
        />
        <meta
          property="og:description"
          content="Contact Obsession Salon and Tattoos — your trusted salon and tattoo studio in Hyderabad, Hyderabad. Book your appointment today for professional haircuts, makeup, facials, hair coloring, nail art, and tattoo services. Our friendly team is ready to assist you with personalized beauty and grooming solutions in Telangana. Call us, visit our salon, or book online to experience Hyderabad’s top-rated beauty parlour and tattoo studio. We’re always here to help you feel beautiful, bold, and confident!"
        />
        <meta property="og:image" content={`${brandLogo}`} />
        <meta property="og:url" content={`${brandUrl}/contact`} />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Contact Hero */}
      <section
        className="container text-white text-center contact-hero d-flex align-items-center justify-content-center flex-column"
        data-aos="fade"
      >
        <h2 className="fw-bold text-white">Get In Touch</h2>
        <p>
          We'd love to hear from you — book your appointment or ask your
          queries!
        </p>
      </section>

      <div>
        <h3 className="text-center p-3" data-aos="fade-down">
          Our Locations
        </h3>
        <div className="d-flex align-items-ceter justify-content-around flex-wrap gap-4">
          <div className="location-container" data-aos="fade-right">
            <h5>Hyderabad</h5>
            <hr />
            <p>
              <i className="fa-solid fa-phone"></i> +{phoneNumber}
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> {email}
            </p>
            <p>Address - {address1}</p>
            <div className="d-flex align-items-center justify-content-between">
              <Link to={address1Link} className="btn btn-info">
                Get Directions
              </Link>
              <Link to={`tel:${phoneNumber}`} className="btn btn-warning">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="container py-5">
        <div className="row">
          <div className="d-none col-lg-6 mb-4" data-aos="fade-right">
            <h3 className="fw-bold mb-3">Send us a message</h3>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control p-3"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger px-4 py-2">
                Send Message
              </button>
            </form>
          </div>
          <div className="" data-aos="fade-left">
            {/* Embedded Map */}
            <iframe
              title="Obesession Salon Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.996541720312!2d78.5533492!3d17.315716000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba33f9dd8623f%3A0xf8d1f2a24de7b632!2sObsession%20Unisex%20Salon%20%26%20Nail%20Studio!5e0!3m2!1sen!2sin!4v1745316725578!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-4 mb-4" data-aos="zoom-in">
            <div className="p-4 rounded-4 shadow-sm h-100 text-center hover-card">
              <div className="mb-3 fs-1">
                <i className="fas fa-phone-alt text-warning"></i>
              </div>
              <h5 className="fw-bold">Call Us</h5>
              <p>+{phoneNumber}</p>
              <a
                href={`tel:${phoneNumber}`}
                className="btn btn-info text-decoration-none fw-semibold"
              >
                Make a Call
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in">
            <div className="p-4 rounded-4 shadow-sm h-100 text-center hover-card">
              <div className="mb-3 fs-1">
                <i className="fas fa-envelope-open-text text-warning"></i>
              </div>
              <h5 className="fw-bold">Email Us</h5>
              <p>{email}</p>
              <a
                href={`mailto:${email}`}
                className="btn btn-info text-decoration-none fw-semibold"
              >
                Send Email
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in">
            <div className="p-4 rounded-4 shadow-sm h-100 text-center hover-card">
              <div className="mb-3 fs-1">
                <i className="fas fa-map-marker-alt text-warning"></i>
              </div>
              <h5 className="fw-bold">Visit Us</h5>
              <p>Hyderabad, Telangana</p>
              <a
                href="https://maps.app.goo.gl/rz9Q5sZcvhymeoLE8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info text-decoration-none fw-semibold"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
