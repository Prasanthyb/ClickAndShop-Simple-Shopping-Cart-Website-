import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          {/* Top data */}
          <p className="hero-top-data">Welcome To</p>
          <h1 className="hero-heading">ClickAndShop</h1>
          <p><h4>Favorite Brands and Hottest Trends</h4></p>
          <p>This is the ultimate online shopping destination, 
          offering a world of incredible choices and unbeatable deals!</p>
        </div>

        <div className="section-hero-image">
          {/* Hero image */}
          <img src="./images/hero.svg" alt="hero image" className="hero-img" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color:lightgrey;
  .container {
    display: flex;
    flex-direction: column;


    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .section-hero-data {
    flex: 1;

    @media (min-width: 768px) {
      padding-right: 2rem;
    }
  }

  .section-hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      padding-left: 2rem;
    }
  }

  .hero-top-data {
    font-weight: 500;
    font-size: 2.5rem;
    color: red;
  }

  .hero-heading {
    font-size: 2.5rem; /* Adjust the font size for smaller screens */

    @media (min-width: 768px) {
      font-size: 4.4rem; /* Adjust the font size for larger screens */
    }
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .hero-img {
    max-width: 100%;

    @media (min-width: 768px) {
      max-width: 80%;
    }
  }
`;

export default HeroSection;
