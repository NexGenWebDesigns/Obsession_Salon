import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center  text-center p-4"
      data-aos="fade"
    >
      <div>
        <img
          src={require("./../../Images/404-error.gif")}
          alt="404 Illustration"
          style={{ maxWidth: "300px" }}
        />
      </div>
      {/* <h1 className="display-1 fw-bold text-danger">404</h1> */}
      <h2 className="fw-semibold mb-3">Oops! Page Not Found</h2>
      <p className="text-muted mb-4">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back!
      </p>
      <Link
        to="/"
        className="btn btn-warning d-flex align-items-center gap-2 mb-5"
      >
        <i className="fas fa-home"></i> Go to Home
      </Link>
    </div>
  );
}

export default Error404;
