import React from "react";
import { Link } from "react-router-dom";
import { brandLogo, brandUrl, phoneNumber } from "../Data/AmrtuthaBrandData";
import { Helmet } from "react-helmet";

const pricesData = [
  {
    title: "Hair Spa + Advance Haircut",
    alt: "Affordable beauty services pricing at Obsession Unisex Salon & Nail Studio in Hyderabad",
    price: "₹1599",
    time: "1 hr 30 min",
    discount: "10% OFF",
    description:
      "Rejuvenate your hair and transform your style with a fresh, expert haircut and spa treatment.",
    image: require("./../Assets/hair-cutting.webp"),
  },
  {
    title: "Advance Haircut + Head Massage + Hair Wash + De-Tan",
    alt: "Obsession Unisex Salon & Nail Studio service menu with competitive prices in Hyderabad",
    price: "₹1299",
    time: "1 hr",
    discount: "15% OFF",
    description:
      "Complete your grooming routine with this relaxing, skin-refreshing, and stylish hair makeover combo.",
    image: require("./../Images/Advance Haircut + Head Massage + Hair Wash + De-Tan.webp"),
  },
  {
    title: "Keratin or Nano Plastia",
    alt: "Luxury salon pricing for haircuts, tattoos, and beauty treatments in Telangana",
    price: "₹3999",
    time: "2 hrs",
    discount: "20% OFF",
    description:
      "Smooth, nourish, and revive your hair with premium treatments for long-lasting shine and strength.",
    image: require("./../Images/Keratin or Nano Plastia.webp"),
  },
  {
    title: "Advance Haircut + Hair Spa + Clean-Up + Pedicure",
    alt: "Clear and transparent pricing for salon services at Amrutha Salon in Hyderabad",
    price: "₹2599",
    time: "2 hrs",
    discount: "12% OFF",
    description:
      "Experience a total grooming session from head to toe, leaving you relaxed, styled, and glowing.",
    image: require("./../Images/Advance Haircut + Hair Spa + Clean-Up + Pedicure.webp"),
  },
  {
    title: "Hair Spa + Skin Lightening Facial + Pedicure",
    alt: "Exclusive salon and tattoo packages with pricing details at Amrutha Salon in Hyderabad",
    price: "₹3399",
    time: "2 hrs 30 min",
    discount: "18% OFF",
    description:
      "Achieve ultimate relaxation and glowing skin with this luxurious facial, spa, and pedicure package.",
    image: require("./../Assets/facial-service.webp"),
  },
  {
    title: "Male Haircut Only @200",
    alt: "Professional male haircut services at Amrutha Salon Hyderabad Telangana",
    price: "₹200",
    time: "30 mins",
    discount: "No Discount",
    description:
      "Get a sharp, clean, and stylish haircut for men by our experienced hair stylists at an unbeatable price.",
    image: require("./../Assets/unisex-salon.webp"),
  },
];

const PriceList = () => {
  return (
    <div className="container my-5">
      {/* Open Graph Tags */}
      <Helmet>
        <title>
          Affordable Salon & Tattoo Prices in Hyderabad | Amrutha Salon and
          Tattoos
        </title>
        <meta
          property="og:title"
          content="Affordable Salon & Tattoo Prices in Hyderabad | Obsession Unisex Salon & Nail Studio"
        />
        <meta
          property="og:description"
          content="Check out our affordable and transparent price list at Obsession Unisex Salon & Nail Studio, the most trusted unisex salon in Hyderabad, Hyderabad. We offer a complete range of professional beauty and grooming services including trendy haircuts, bridal makeup, party looks, hair spa, beard styling, facials, waxing, and stylish custom tattoos — all at budget-friendly rates. Our pricing is designed to offer premium services to men and women without compromising on quality. Whether you need a quick grooming session, a relaxing spa day, or a complete bridal package, you’ll find the best salon rates right here. Serving clients from Hyderabad and Telangana, we’re committed to providing exceptional service at prices you’ll love. Discover the latest deals, combos, and seasonal discounts that make your beauty care affordable and luxurious. Book your appointment now and experience premium services that fit your budget at Obsession Unisex Salon & Nail Studio!"
        />
        <meta property="og:image" content={`${brandLogo}`} />
        <meta property="og:url" content={`${brandUrl}/prices`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div
        className="d-flex align-items-center justify-content-center mb-4"
        data-aos="fade-right"
      >
        <img
          src={require("./../Images/star.gif")}
          alt="star"
          className="pricing-star"
        />
        <h3 className="text-center ms-2 me-2 mt-2">Our Special Price List</h3>
        <img
          src={require("./../Images/star.gif")}
          alt="star"
          className="pricing-star"
        />
      </div>
      <div className="row g-4 justify-content-center">
        {pricesData.map((item, index) => (
          <div
            className="col-md-6 col-lg-4"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={(index + 1) * 100}
          >
            <div className="price-card shadow-sm p-3 rounded h-100">
              <div className="price-card-img-wrap mb-3">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="img-fluid rounded"
                />
                <span className="badge bg-danger price-card-discount-badge">
                  <i className="fa-solid fa-tags me-2"></i> {item.discount}
                </span>
              </div>
              <h5 className="mb-2 text-center">{item.title}</h5>
              <p className="price-card-desc text-center">{item.description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="price-card-price-tag">
                  Price - {item.price} /-
                </span>
                <span className="price-card-time">
                  <i className="fa-regular fa-clock"></i> {item.time}
                </span>
              </div>
              <Link to={`tel:${phoneNumber}`} className="btn btn-dark w-100">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <img
        src={require("./../Assets/zumba-fitness-3.webp")}
        className="text-center"
        alt="Spa Services in Hyderabad"
        style={{ width: "22rem", margin: "1rem auto" }}
      />
      <img
        src={require("./../Assets/zumba-fitness-4.webp")}
        className="text-center"
        alt="Spa Services in Hyderabad"
        style={{ width: "22rem", margin: "1rem auto" }}
      />
      <img
        src={require("./../Assets/zumba-fitness-1.webp")}
        className="text-center"
        alt="Spa Services in Hyderabad"
        style={{ width: "22rem", margin: "1rem auto" }}
      />
      <div
        className="prices-parallax-cta text-center text-white d-flex flex-column justify-content-center align-items-center"
        data-aos="fade"
      >
        <h3 className="mb-3 text-white">💥 Book Your Makeover Today!</h3>
        <p className="mb-4">
          Indulge in our premium grooming packages. Get styled, relaxed, and
          glowing — instantly!
        </p>
        <div className="prices-cta-buttons d-flex flex-wrap gap-3 justify-content-center">
          <a
            href={`tel:${phoneNumber}`}
            className="btn btn-light prices-cta-btn"
          >
            <i className="fa-solid fa-phone me-1"></i> Call Us
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success prices-cta-btn"
          >
            <i className="fa-brands fa-whatsapp me-1"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
