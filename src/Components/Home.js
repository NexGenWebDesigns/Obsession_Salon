import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../Data/ServicesPageData";
import ClientTestimonials from "./Sub Components/Testimonial";
import {
  brandLogo,
  brandName,
  brandUrl,
  phoneNumber,
} from "../Data/AmrtuthaBrandData";
import HomeGallery from "./Sub Components/HomeGallery";
import { galleryData } from "../Data/GalleryPageData";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "What services does Obsession Unisex Salon & Nail Studio offer?",
    answer:
      "We offer a complete range of premium unisex salon services including trendy haircuts, hair coloring, bridal and party makeup, skin treatments, nail extensions, and grooming — all under one roof in Hyderababd, Hyderabad.",
  },
  {
    question: "Where is Obsession Salon & Nail Studio located?",
    answer:
      "We are located in Hyderabad, Telangana. You can easily find us via Google Maps or get directions from our Contact page.",
  },
  {
    question: "Do you offer services for both men and women?",
    answer:
      "Yes — we provide grooming, hair, skin, and nail services for both men and women. From elegant bridal looks to stylish men's grooming, we’ve got you covered.",
  },
  {
    question: "Is prior appointment necessary?",
    answer:
      "Walk-ins are welcome, but we highly recommend pre-booking your slot to avoid waiting, especially for makeup sessions, nails, and festive seasons.",
  },
  {
    question: "Do you provide bridal and party makeup?",
    answer:
      "Absolutely! We specialize in customized bridal, party, and engagement makeup using high-quality products to deliver flawless, camera-ready looks.",
  },
  {
    question: "Are your tools and products hygienic and safe?",
    answer:
      "Yes, we maintain the highest hygiene standards by sterilizing tools, using disposable items, and trusted branded products for every service.",
  },
  {
    question: "Do you provide nail extension and nail art services?",
    answer:
      "Yes — our salon features expert nail technicians offering nail extensions, gel nails, nail art, and regular nail care treatments.",
  },
  {
    question: "Are your beauty products skin-safe and certified?",
    answer:
      "We only use top-rated, skin-safe, dermatologically tested products to ensure safety, nourishment, and visible results for all skin types.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Obsession Unisex Salon is open every day from 10:00 AM to 9:00 PM. For special holiday hours, kindly check Google or contact us directly.",
  },
  {
    question: "Do you offer affordable packages?",
    answer:
      "Yes — we provide value-for-money service packages, grooming combos, festive offers, and custom plans to suit every budget.",
  },
  {
    question: "Do you have grooming services for men?",
    answer:
      "Yes — from haircuts, beard styling, facials to head massages, our grooming menu for men is designed to keep you looking your best.",
  },
  {
    question: "Can I get a makeover for a special event?",
    answer:
      "Definitely! Our stylists are experts in transforming looks for parties, pre-wedding shoots, and personal celebrations.",
  },
  {
    question: "Do you offer hair coloring and treatments?",
    answer:
      "Yes — we offer highlights, balayage, root touch-ups, global coloring, keratin, smoothening, and other trendy hair treatments.",
  },
  {
    question: "Is parking available at your salon?",
    answer:
      "Yes, we have convenient parking space near our salon premises in Hyderababd for your hassle-free visit.",
  },
  {
    question: "How can I book an appointment at Obsession Salon?",
    answer:
      "You can call us directly, fill out the online form on our website, or drop a WhatsApp message. Visit our Contact page to get started.",
  },
];

const updatedServices = services.slice(0, 5);

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % updatedServices.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (index) => {
    const pos =
      (index - current + updatedServices.length) % updatedServices.length;
    switch (pos) {
      case 0:
        return "center";
      case 1:
        return "right1";
      case 2:
        return "right2";
      case updatedServices.length - 1:
        return "left1";
      case updatedServices.length - 2:
        return "left2";
      default:
        return "hidden";
    }
  };

  return (
    <div className="main-home-container mt-3">
      {/* Open Graph Tags */}
      <Helmet>
        <title>
          Best Salon & Tattoo Studio in Hyderabad | Obsession Salon & Tattoos
        </title>
        <meta
          property="og:title"
          content="Best Salon & Tattoo Studio in Hyderabad | Obsession Unisex Salon & Nail Studio"
        />
        <meta
          property="og:description"
          content="Obsession Salon and Tattoos is the #1 destination for beauty, grooming, and tattoos in Hyderabad, Hyderabad, Telangana. We specialize in haircuts, bridal makeup, facials, hair coloring, nail art, body tattoos, and more. Our skilled team offers trendy styles and artistic tattoo work to enhance your look and confidence. Visit us for modern salon services and unique tattoo designs. Book your appointment now at the best salon and tattoo studio in Hyderabad. Discover why we are rated among the top beauty parlours in Hyderabad. Feel beautiful, bold, and confident at Obsession!"
        />
        <meta property="og:image" content={`${brandLogo}`} />
        <meta property="og:url" content={`${brandUrl}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div
        className="text-center pb-3 home-special-offer-tag d-flex align-items-center justify-content-center"
        data-aos="fade-right"
      >
        <img
          src={require("./../Assets/fire.gif")}
          alt="fire"
          loading="lazy"
          className="home-fire-gif"
        />
        <h3 className="mt-3">Best Salon Special Offers</h3>
        <img
          src={require("./../Assets/fire.gif")}
          alt="fire"
          loading="lazy"
          className="home-fire-gif"
        />
      </div>

      <div className="rotation-slider" data-aos="zoom-in">
        {updatedServices.map((offer, index) => (
          <div
            key={index}
            className={`rotation-card ${getPositionClass(index)}`}
          >
            <img
              src={offer.image}
              alt={offer.title}
              width="100%"
              loading="lazy"
              style={{ borderBottom: "2px solid white" }}
            />
            <div className="rotation-content">
              <p>{offer.title}</p>
              <p>
                <span className="price" style={{ fontSize: "1.6rem" }}>
                  {offer.finalPrice}
                </span>
              </p>
              <span style={{ fontSize: "0.8rem" }}>
                + Taxes and * T&C Apply
              </span>
            </div>
          </div>
        ))}
      </div>

      <section className="welcome-section text-white text-center d-flex align-items-center justify-content-center flex-column">
        <h1 className="fw-bold mb-3 text-white">Welcome to {brandName}</h1>
        <p className=" mb-4 px-2">
          Where beauty meets boldness — express yourself, refresh your look, and
          embrace your unique style with us.
        </p>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <Link to="/services" className="btn btn-light px-4 py-2">
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn-light px-4 py-2">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* <AnniversaryPoster /> */}

      <div className="container overflow-hidden">
        <h3 className="fw-bold text-center pt-5" data-aos="fade">
          Featured Services
        </h3>

        {/* Section 1 */}
        <section className=" d-flex flex-wrap align-items-center home-section-1">
          <div className="col-md-6 text-center p-4" data-aos="fade-right">
            <img
              src={require("./../Assets/hair-cutting.webp")}
              alt="unisex salon in Hyderabad"
              className="img-fluid rounded"
              loading="lazy"
            />
          </div>
          <div className="col-md-6 p-4" data-aos="fade-left">
            <h4 className="fw-bold mb-3">Salon Services in Hyderabad</h4>
            <p>
              Obsession Unisex Salon & Nail Studio in Hyderabad, Hyderabad
              offers premium unisex salon services tailored to your style. Our
              skilled team specializes in trendy haircuts, vibrant hair
              coloring, smooth blow-drys, threading, facials, bridal makeup, and
              custom tattoos. We use high-quality, skin-safe products and the
              latest techniques to deliver flawless, long-lasting results.
              Whether it’s a casual makeover or a special event, we create looks
              that match your personality and boost your confidence. Discover
              the best salon and tattoo studio experience in Hyderabad and
              Telangana with Obsession Salon & Tattoos — where beauty meets
              creativity.
            </p>
            <Link to="/services" className="btn btn-danger">
              View Services
            </Link>
          </div>
        </section>

        {/* Section 2 */}
        <section className="d-flex flex-wrap flex-md-row-reverse align-items-center home-section-2">
          <div className="col-md-6 text-center p-4" data-aos="fade-right">
            <img
              src={require("./../Assets/tatto-design.webp")}
              alt=" Tattoo studio in Hyderabad, Hyderabad"
              loading="lazy"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 p-4" data-aos="fade-left">
            <h4 className="fw-bold mb-3">Custom Tattoos in Hyderabad</h4>
            <p>
              Discover the best tattoo studio in Hyderabad, Hyderabad, at
              Obsession Unisex Salon & Nail Studio. Our expert tattoo artists
              specialize in custom, creative, and meaningful tattoo designs for
              men and women. Whether it’s your first tattoo or an addition to
              your collection, we deliver clean, detailed, and long-lasting
              artwork using premium, skin-safe inks. We prioritize hygiene and
              safety, ensuring a comfortable and memorable tattoo experience.
              Book your appointment today for stylish tattoos in Telangana's
              top-rated salon and studio. Let your skin tell a beautiful story
              with our professional tattoo services in Hyderabad!
            </p>
            <Link to="/services" className="btn btn-dark">
              Explore Tattoos
            </Link>
          </div>
        </section>

        {/* Section 3 */}
        <section className="d-flex flex-wrap align-items-center home-section-1">
          <div className="col-md-6 text-center p-4" data-aos="fade-right">
            <img
              src={require("./../Assets/facial-service.webp")}
              alt="Custom tattoo designs"
              loading="lazy"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 p-4" data-aos="fade-left">
            <h4 className="fw-bold mb-3">Facial Services in Hyderabad</h4>
            <p>
              At Obsession Unisex Salon & Nail Studio, your beauty, confidence,
              and well-being matter to us. That’s why we use and recommend only
              premium, skin-safe, and hair-friendly products for all our
              services. From professional skincare treatments to gentle haircare
              solutions, every product is carefully chosen for its quality,
              safety, and proven results. Our exclusive range keeps your skin
              glowing, hair healthy, and leaves you feeling refreshed,
              nourished, and radiant. Experience the best of salon-grade beauty
              products in Hyderabad, Hyderabad, designed to give your skin and
              hair the love they truly deserve.
            </p>
            <Link to="/services" className="btn btn-danger">
              See Our Brands
            </Link>
          </div>
        </section>
      </div>

      <div className="container py-5 overflow-hidden" id="why-choose-us">
        <h3 className="text-center mb-5 fw-bold">
          Why Choose Obsession Unisex Salon & Nail Studio?
        </h3>

        {/* Section 1 */}
        <div className="row align-items-center">
          <div className="col-lg-6 text-center" data-aos="fade-right">
            <img
              loading="lazy"
              src={require("./../Assets/unisex-salon.webp")}
              alt="tattoo studio Hyderabad"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h4 className="fw-bold">Professional Unisex Salon Services</h4>
            <p className="">
              Discover premium unisex salon services in Hyderabad, Hyderabad at
              Obsession Unisex Salon & Nail Studio. We offer expert haircuts,
              hair coloring, facials, bridal makeup, grooming, and custom
              tattoos for men and women. Experience trendy, affordable, and
              hygienic salon services tailored to your style. Book your
              appointment today for the best salon and tattoo studio experience
              in Telangana.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center flex-lg-row-reverse mb-5">
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
              src={require("./../Assets/tattoo-studio-hyderabad.webp")}
              alt="custom tattoo studio Hyderabad"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <h4 className="fw-bold">Custom Creative Tattoo Studio</h4>
            <p className="">
              Discover Obsession Unisex Salon & Nail Studio, Hyderabad’s
              top-rated custom creative tattoo studio in Hyderabad. We design
              unique, skin-safe tattoos tailored to your personality, using
              premium certified inks. Experience professional tattoo artistry
              with hygienic, personalized designs for every style —
              minimalistic, bold, or traditional. Book your custom tattoo
              appointment in Telangana today!
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 text-center" data-aos="fade-right">
            <img
              src={require("./../Assets/affordable-salon-telangana.webp")}
              alt="tattoo Telangana"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h4 className="fw-bold">Affordable, Value-Packed Services</h4>
            <p className="d">
              Experience top-quality salon and tattoo services at affordable
              prices. Our value-packed packages offer exceptional results in
              hairstyling, makeup, and custom tattoos, all tailored to your
              unique needs. Located in Hyderabad, Hyderabad, we ensure every
              client receives premium care, comfort, and unbeatable pricing.
              Book your appointment today and indulge in the best salon
              experience!
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
              src={require("./../Assets/safe-hygienic-salon-tattoo.webp")}
              alt="safe and hygienic salon"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <h4 className="fw-bold">Safe, Hygienic & Trusted by Customers</h4>
            <p className="d">
              Experience top-notch hygiene and safety with Obsession Salon &
              Tattoos, trusted by customers in Hyderabad, Hyderabad. Our salon
              ensures the highest standards of cleanliness and professionalism
              for every service, from haircuts to tattoos, making us a reliable
              choice for all your beauty and grooming needs.
            </p>
          </div>
        </div>
      </div>

      <HomeGallery images={galleryData.slice(0, 9)} />
      <div className="text-center">
        <Link to={"/gallery"} className="btn btn-primary">
          See more <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </div>
      <ClientTestimonials />

      <div className="container py-5" id="faqs">
        <h3 className="text-center mb-5 fw-bold">Frequently Asked Questions</h3>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index} data-aos="fade-up">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    borderBottom: "2px solid black",
                  }}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-5 text-white home-cta-section" data-aos="fade">
        <div className="container text-center">
          <h3 className="fw-bold mb-3 text-white">Ready for a Makeover?</h3>
          <p className="mb-4 fs-5">
            Book your salon appointment or tattoo session today — let’s create
            something amazing together!
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="btn btn-outline-info btn-lg me-3 mb-4"
          >
            Book Now
          </a>
          <Link to="/services" className="btn btn-outline-warning btn-lg mb-4">
            View Services
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
