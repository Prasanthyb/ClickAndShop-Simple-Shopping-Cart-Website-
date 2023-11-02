import React, { useState } from 'react';


const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container">
            <a className="nav-link active" aria-current="page" href="/">
              <img
                className="mr-2"
                src="/images/online-shop-logo.jpg"
                alt="ClickAndShop Logo"
                width={50}
                height={50}
                style={{ borderRadius: '50%' }}
              />
              <span className="text-dark ms-1 fs-5 fw-bold fst-italic">
                ClickAndShop
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"

              onClick={() => {
                setShow(!show);
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                {/* Home Link */}
                <li className="nav-item">
                  <a className="nav-link active text-dark fs-6" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                {/* Services Link */}
                <li className="nav-item">
                  <a className="nav-link active text-dark fs-6" aria-current="page" href="/services">
                    Services
                  </a>
                </li>
                {/* About Link */}
                <li className="nav-item">
                  <a className="nav-link active text-dark fs-6" aria-current="page" href="/">
                    About
                  </a>
                </li>
                {/* Contact Link */}
                <li className="nav-item">
                  <a className="nav-link active text-dark fs-6" aria-current="page" href="/cart">
                  Cart
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                {/* Sign Up Button */}
                <button className="btn btn-outline-dark" type="submit">
                  Sign Up
                </button>
                {/* Log In Button */}
                <button className="btn btn-outline-dark ms-1" type="submit">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
