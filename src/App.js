import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/Sub Components/ScrollTop";

// Lazy Loaded Components
const Home = lazy(() => import("./Components/Home"));
const Services = lazy(() => import("./Components/Services"));
const Contact = lazy(() => import("./Components/Contact"));
const About = lazy(() => import("./Components/About"));
const Gallery = lazy(() => import("./Components/Gallery"));
const Prices = lazy(() => import("./Components/Prices"));
const Fitness = lazy(() => import("./Components/Fitness"));
const Error404 = lazy(() => import("./Components/Sub Components/Error"));
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="loader-wrapper">
            <div className="scissors-loader">
              <i className="fa-solid fa-scissors"></i>
            </div>
            <p>Loading...</p>
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
