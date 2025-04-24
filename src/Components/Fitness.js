import React from "react";

const certificates = [
  {
    title: "Certified Zumba Trainer",
    image: require("./../Assets/zumba-img-1.jpeg"),
  },
  {
    title: "Certified Zumba Trainer",
    image: require("./../Assets/zumba-certificate-1.png"),
  },
  {
    title: "Certified Zumba Trainer",
    image: require("./../Assets/zumba-cerificate-2.png"),
  },
  {
    title: "Certified Zumba Trainer",
    image: require("./../Assets/zumba-certificate-3.png"),
  },
];

function FitnessPage() {
  return (
    <div className="container py-5 overflow-hidden">
      <div className="text-center mb-5" data-aos="zoom-in">
        <img
          src={require("./../Assets/Zumba-img-1.webp")}
          className="mb-3"
          alt="Zumba CLass"
          style={{ width: "10rem" }}
        />
        <h2 className="fw-bold">Obsession Unisex Salon & Nail Studio</h2>
        <p className="lead">Where Health Meets Passion</p>
      </div>

      {/* About Co-founder */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6" data-aos="zoom-in">
          <img
            src={require("./../Assets/Zumba-img-2.webp")}
            alt="Co-founder Ms. Nadia"
            className="img-fluid rounded-3 shadow"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <img
            src={require("./../Assets/zumba-trainer.jpg")}
            alt="zumba trainer"
            style={{ width: "8rem", borderRadius: "100%", margin: "1rem 0rem" }}
          />
          <h3 className="fw-bold">Meet Ms. Nadia</h3>
          <p className="text-muted">
            Obsession's Co-founder <strong>Ms. Nadia</strong> is a certified
            <strong> Zumba & Aerobics Trainer</strong>, actively conducting
            sessions since <strong>2015</strong>. Her passion for fitness and
            dance inspires every participant to move, sweat, and smile!
          </p>
          <p className="text-muted">
            At Obsession, we offer an <strong>exclusive action floor</strong>{" "}
            for
            <strong> Zumba, Aerobics, Yoga, and Dance for Kids</strong>. Our
            expert-led programs promote{" "}
            <strong>Weight Loss, Core Strength</strong>, and{" "}
            <strong>Overall Fitness</strong> in a fun, safe, and supportive
            environment.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mb-4" data-aos="fade-right">
        <h2 className="fw-bold">Our Popular Fitness Programs</h2>
        <p className="text-muted">
          A mix of fun, rhythm, and wellness for everyone
        </p>
      </div>

      <div className="row g-4">
        {/* Zumba */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in">
          <div
            className="card h-100 shadow"
            style={{ border: "2px solid black" }}
          >
            <img
              src={require("./../Assets/Zumba-Service-1.jpeg")}
              className="card-img-top"
              alt="Zumba"
            />
            <div className="card-body">
              <h5 className="fw-bold">Zumba</h5>
              <p className="text-muted">
                Dance your way to fitness with high-energy Zumba sessions that
                burn calories, boost energy, and improve coordination — all
                while having a blast.
              </p>
            </div>
          </div>
        </div>

        {/* Aerobics */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in">
          <div
            className="card h-100 shadow"
            style={{ border: "2px solid black" }}
          >
            <img
              src={require("./../Assets/Zumba-Service-2.avif")}
              className="card-img-top"
              alt="Aerobics"
            />
            <div className="card-body">
              <h5 className="fw-bold">Aerobics</h5>
              <p className="text-muted">
                Stay active and strengthen your heart with energizing Aerobics
                classes that tone muscles, improve stamina, and reduce stress.
              </p>
            </div>
          </div>
        </div>

        {/* Yoga */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in">
          <div
            className="card h-100 shadow"
            style={{ border: "2px solid black" }}
          >
            <img
              src={require("./../Assets/Yoga-Service-3.jpg")}
              className="card-img-top"
              alt="Yoga"
            />
            <div className="card-body">
              <h5 className="fw-bold">Yoga</h5>
              <p className="text-muted">
                Enhance flexibility, mindfulness, and inner calm with our
                expert-led Yoga sessions — perfect for stress relief and
                holistic wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Dance for Kids */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in">
          <div
            className="card h-100 shadow"
            style={{ border: "2px solid black" }}
          >
            <img
              src={require("./../Assets/Zumba-service-4.jpg")}
              className="card-img-top"
              alt="Dance for Kids"
            />
            <div className="card-body">
              <h5 className="fw-bold">Dance for Kids</h5>
              <p className="text-muted">
                Let your little stars groove, learn, and shine with our lively,
                kid-friendly dance classes that build confidence and
                coordination.
              </p>
            </div>
          </div>
        </div>

        {/* Weightloss & Core Strength */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in">
          <div
            className="card h-100 shadow"
            style={{ border: "2px solid black" }}
          >
            <img
              src={require("./../Assets/zumba-service-5.avif")}
              className="card-img-top"
              alt="Weightloss & Core"
            />
            <div className="card-body">
              <h5 className="fw-bold">Weightloss & Core</h5>
              <p className="text-muted">
                Target stubborn fat, boost metabolism, and sculpt your
                midsection with our dynamic Weightloss and Core Strength
                training programs.
              </p>
            </div>
          </div>
        </div>

        {/* Overall Fitness */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in">
          <div
            className="card h-100 shadow"
            style={{ border: "2px solid black" }}
          >
            <img
              src={require("./../Assets/Zumba-service-6.avif")}
              className="card-img-top"
              alt="Overall Fitness"
            />
            <div className="card-body">
              <h5 className="fw-bold">Overall Fitness</h5>
              <p className="text-muted">
                Improve strength, stamina, posture, and flexibility with
                customized full-body fitness sessions designed for all ages and
                fitness levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="zumba-certification-section">
        <div className="container">
          <h2 className="cert-heading" data-aos="zoom-in">
            🏅 Zumba, Aerobics & Fitness Training Proof of Certification
          </h2>
          <p className="cert-subheading" data-aos="zoom-in">
            We are proudly certified and professionally trained to deliver the
            best Zumba, Aerobics, and Core Fitness training in Vanasthalipuram &
            Hyderabad.
          </p>
          <div className="cert-grid">
            {certificates.map((cert, index) => (
              <div className="cert-card" key={index} data-aos="zoom-in">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                  loading="lazy"
                />
                <h5 className="cert-title">{cert.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zumba-images">
        <img
          src={require("./../Assets/zumba-fitness-6.webp")}
          alt=""
          data-aos="zoom-in"
        />
        <img
          src={require("./../Assets/zumba-fitness-2.webp")}
          alt=""
          data-aos="zoom-in"
        />
        <img
          src={require("./../Assets/zumba-fitness-1.webp")}
          alt=""
          data-aos="zoom-in"
        />
        <img
          src={require("./../Assets/zumba-fitness-3.webp")}
          alt=""
          data-aos="zoom-in"
        />
        <img
          src={require("./../Assets/zumba-fitness-4.webp")}
          alt=""
          data-aos="zoom-in"
        />
        <img
          src={require("./../Assets/zumba-fitness-5.webp")}
          alt=""
          data-aos="zoom-in"
        />
      </section>
      {/* Demo Registration CTA */}
      <div className="text-center mt-5" data-aos="zoom-in">
        <h4 className="fw-bold">Want to Try Before You Join?</h4>
        <p className="text-muted">
          We humbly welcome you to register for a{" "}
          <strong>free weekly demo session</strong>.
        </p>
        <a href="#register" className="btn btn-primary btn-lg mt-2">
          <i className="fas fa-calendar-check me-2"></i> Book Demo Now
        </a>
      </div>
    </div>
  );
}

export default FitnessPage;
