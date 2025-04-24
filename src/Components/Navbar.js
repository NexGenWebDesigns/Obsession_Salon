import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { phoneNumber } from "../Data/AmrtuthaBrandData";

import ObsessionLogo from "./../Assets/obsession-logo.jpg";

function Navbar() {
  const handleNavCollapse = () => {
    if (window.innerWidth <= 1200) {
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (
        navbarToggler &&
        navbarToggler.getAttribute("aria-expanded") === "true"
      ) {
        navbarToggler.click();
      }
    }
  };

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.httpEquiv = "Cache-Control";
    meta.content = "no-cache, no-store, must-revalidate";
    document.getElementsByTagName("head")[0].appendChild(meta);
  }, []);

  return (
    <>
      <div className="d-none navbar-tagline-details d-flex align-items-center justify-content-between">
        <p>Mon - Sat : 09:00AM to 06:00PM</p>
        <p>info@amrutha.com</p>
        <p>+918331889448</p>
      </div>

      <nav className="main-navbar navbar navbar-expand-lg" data-aos="fade-down">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img src={ObsessionLogo} alt="logo" className="amrutha-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="nav-open-btn"
          >
            <i className="fa-solid fa-bars" style={{ fontSize: "1.6rem" }}></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink to="/" end className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink to="/fitness" className="nav-link">
                  Fitness
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink to="/prices" className="nav-link">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink to="/gallery" className="nav-link">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-contact-number ms-1">
            <a
              href={`tel:${phoneNumber}`}
              className="btn btn-warning"
              style={{ letterSpacing: "2px", whiteSpace: "nowrap" }}
            >
              +{phoneNumber}
            </a>
          </div>
        </div>
      </nav>

      {/* Scroll Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn btn-danger position-fixed bottom-0 end-0 m-3"
        style={{ width: "50px", height: "50px", zIndex: 9999 }}
        data-aos="fade-left"
      >
        <i className="fa-solid fa-arrow-up" style={{ fontSize: "1.4rem" }}></i>
      </button>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center btn btn-success position-fixed bottom-0 start-0 m-3"
        style={{ width: "50px", height: "50px", zIndex: 9999 }}
        data-aos="fade-right"
      >
        <i
          className="fab fa-whatsapp fa-lg text-white"
          style={{ fontSize: "1.4rem" }}
        ></i>
      </a>
    </>
  );
}

export default Navbar;
