import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TestimonialsSlider from "./Sub Components/Testimonial";
import { brandLogo, brandUrl, phoneNumber } from "../Data/AmrtuthaBrandData";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);
  return (
    <div className="overflow-hidden">
      {/* Open Graph Tags */}
      <Helmet>
        <title>
          About Obsession Unisex Salon & Nail Studio | Leading Beauty & Tattoo Studio in
          Hyderabad
        </title>
        <meta
          property="og:title"
          content="About Obsession Unisex Salon & Nail Studio | Leading Beauty & Tattoo Studio in Hyderabad"
        />
        <meta
          property="og:description"
          content="Discover the story of Amrutha Salon and Tattoos — Hyderabad’s most trusted beauty salon and tattoo studio. Serving Hyderabad and Telangana, we focus on personalized care, expert services, and artistic expression. Our salon offers professional haircuts, makeup services, facials, nail art, and stylish tattoos that speak your personality. With a passionate team of certified beauty professionals and tattoo artists, we are committed to delivering top-notch services to every client. Learn more about our journey, our values, and what makes us one of the most recommended salons in Hyderabad."
        />
        <meta property="og:image" content={`${brandLogo}`} />
        <meta property="og:url" content={`${brandUrl}/about`} />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="about-hero text-center text-white d-flex align-items-center justify-content-center container flex-column"
        data-aos="fade"
      >
        <div>
          <h2 className="fw-bold text-white">About Obsession Unisex Salon & Nail Studio</h2>
          <p className="lead">
            Your trusted destination for style, beauty & art.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-center over-story-container">
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <img
              src={require("./../Assets/20230926_200613_28_11zon.webp")}
              className="img-fluid rounded-4 shadow"
              alt="amrutha salon near hyderabad"
              loading="lazy"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h3 className="fw-bold mb-3">Our Story</h3>
            <p>
              Since 2012, Obsession Unisex Salon & Nail Studio has been transforming looks
              and crafting custom tattoos in Hyderabad, Hyderabad,
              Telangana. Our skilled stylists and talented tattoo artists
              deliver exceptional results, blending creativity with precision.
              Whether it’s a stunning makeover or a personalized tattoo, we
              strive to bring out your natural beauty and help you express your
              unique style. Visit us to experience professional salon services
              and custom tattoo artistry, designed to enhance your individual
              charm.
            </p>
            <p>
              Our mission is to enhance your natural beauty and help you express
              your individuality.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}

      <div className="container my-5">
        <div className="text-center mb-4" data-aos="fade">
          <h3 className="fw-bold">Our Mission & Vision</h3>
          <p>Discover the heart behind Obsession Unisex Salon & Nail Studio</p>
        </div>

        <div className="row align-items-center mb-5 our-mission-container">
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <img
              src={require("./../Assets/014A1053_27_11zon.webp")}
              className="img-fluid rounded shadow"
              loading="lazy"
              alt="amrutha salon near valasthipuram"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h3 className="fw-bold">Our Mission</h3>
            <p>
              At Obsession Unisex Salon & Nail Studio, we provide an exceptional experience
              that blends professional artistry with self-expression. Our expert
              team in Hyderabad, Hyderabad offers a wide range of services
              including luxury hair styling, beauty treatments, and custom
              tattoos that reflect personal stories. Dedicated to enhancing
              confidence and individuality, we use cutting-edge techniques while
              maintaining the highest standards of hygiene and professionalism.
              Transform your look and express your unique style with our premium
              services.
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-md-row-reverse our-vision-container">
          <div className="col-md-6 mb-4 text-center" data-aos="fade-left">
            <img
              src={require("./../Assets/014A1053_27_11zon.webp")}
              alt="Professional hair styling services at Amrutha Salon Hyderabad Hyderabad"
              loading="lazy"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <h3 className="fw-bold">Our Vision</h3>
            <p>
              Obsession Unisex Salon & Nail Studio envisions becoming Hyderabad’s most
              trusted salon and leading tattoo studio in Hyderabad. We’re
              committed to offering transformative beauty, grooming, and
              artistic tattoo experiences that truly reflect individual style
              and identity. Our mission is to deliver more than services —
              creating memorable moments that uplift and inspire. By embracing
              the latest trends, technologies, and personalized care, we aim to
              be a dynamic hub for beauty, body art, and self-expression in
              Telangana. We celebrate diversity, creativity, and confidence,
              making every client feel extraordinary and empowered.
            </p>
          </div>
        </div>
      </div>

      {/* Video CTA */}
      <section
        className="about-hero-video d-flex align-items-center justify-content-center text-white"
        data-aos="fade"
      >
        <video autoPlay muted loop className="video-bg">
          <source
            src="https://res.cloudinary.com/daelyy9vj/video/upload/v1744962280/about-CTA-video-background_uo3uxy.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="text-center position-relative"
          style={{
            background: " rgba(0, 0, 0, 0.44)",
            padding: "2rem",
            borderRadius: "6px",
          }}
        >
          <h2 className="fw-bold text-white">About Obsession Unisex Salon & Nail Studio</h2>
          <p>Beauty. Art. Confidence — All in One Place.</p>
        </div>
      </section>

      <TestimonialsSlider />
      <div className="text-center p-2" data-aos="fade">
        <h3>Our Achievements</h3>
      </div>
      <section
        className="about-counters text-white d-flex align-items-center justify-content-center"
        style={{ padding: "4rem 1rem 3rem 1rem" }}
        data-aos="fade"
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold counter text-white" data-target="13">
                0
              </h2>
              <p>Years Experience</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <h2 className="fw-bold counter text-white" data-target="7000">
                  0
                </h2>{" "}
                <span className="ms-1" style={{ fontSize: "2.3rem" }}>
                  +
                </span>
              </div>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <h2 className="fw-bold counter text-white" data-target="8000">
                  0
                </h2>{" "}
                <span className="ms-1" style={{ fontSize: "2.3rem" }}>
                  +
                </span>
              </div>
              <p>Tattoos Inked</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <h2 className="fw-bold counter text-white" data-target="25">
                  0
                </h2>{" "}
                <span className="ms-1" style={{ fontSize: "2.3rem" }}>
                  +
                </span>
              </div>
              <p>Professional Staff</p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="about-cta-section text-center d-flex align-items-center justify-content-center"
        data-aos="fade"
      >
        <div className="cta-content">
          <h2 className="fw-bold mb-3">Ready to Transform Your Look?</h2>
          <p className="mb-4">
            Book your appointment today at Obsession Unisex Salon & Nail Studio and
            experience the art of beauty and style.
          </p>
          <Link
            to={`tel:${phoneNumber}`}
            className="btn btn-outline-dark btn-lg"
            style={{ letterSpacing: "2.4px", whiteSpace: "nowrap" }}
          >
            Call Us - +{phoneNumber}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
