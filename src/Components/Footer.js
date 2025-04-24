import React from "react";
import { Link } from "react-router-dom";
import {
  address1,
  address1Link,
  email,
  phoneNumber,
} from "../Data/AmrtuthaBrandData";

function Footer() {
  return (
    <footer className="text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              className="mb-3 footer-logo"
              src={require("./../Assets/obsession-logo.jpg")}
              alt="logo"
              style={{ width: "8rem" }}
            />
            <p>
              Your one-stop destination for modern beauty makeovers and custom
              tattoo artistry, delivered by expert professionals in a welcoming
              space.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/services" className="text-decoration-none text-light">
                  <i className="fa-solid fa-angles-right"></i> Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-decoration-none text-light">
                  <i className="fa-solid fa-angles-right"></i> Gallery
                </a>
              </li>
              <li>
                <a href="/prices" className="text-decoration-none text-light">
                  <i className="fa-solid fa-angles-right"></i> Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-light">
                  <i className="fa-solid fa-angles-right"></i> About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-light">
                  <i className="fa-solid fa-angles-right"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-white">Our Services</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fa-solid fa-angles-right"></i> Hair Styling &
                Makeup
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i> Bridal Packages
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i> Custom Tattoos
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i> Body Piercing
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i> Hair Coloring
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i> Nair Art
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i> Permanent Makeup
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-white">Contact Us</h5>
            <p>
              <i className="fas fa-phone me-2"></i> +{phoneNumber}
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> {email}
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a
                href="https://www.instagram.com/obsessionbeautyloungehyd?igsh=MWZjamJ5YTJubDZyeQ=="
                className="text-light me-3"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href={`https://wa.me/${phoneNumber}`} className="text-light">
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white">Our Locations</h5>
            <div className="d-flex flex-wrap">
              <div className="footer-addresses-container col-md-3 mb-4 me-5">
                <h6 className="text-white">Branch - 1 </h6>
                <Link
                  to={address1Link}
                  className="text-decoration-none text-white"
                >
                  <i className="fas fa-map-marker-alt me-2"></i> {address1}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center mt-4">
          <hr className="bg-light" />
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-5">
            <p className="mb-0">
              Copyright &copy; 2025 Obsession Unisex Salon & Nail Studio. All Rights Reserved.
            </p>
            <p>
              Designed by{" "}
              <Link
                className="text-info"
                to={"https://nexgenwebdesigns.com"}
                style={{ textDecoration: "none" }}
              >
                NexGen Web Designs
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
