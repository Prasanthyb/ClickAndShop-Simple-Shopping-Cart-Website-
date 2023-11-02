import React from "react";
import styled from "styled-components";
import { FaArrowUp } from 'react-icons/fa';

// Define a React functional component called GoToTop
const GoToTop = () => {
  // Function to scroll to the top of the page smoothly
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    // Wrapper component
    <Wrapper>
      <div className="top-btn" onClick={goToBtn}>
        <FaArrowUp className="top-btn--icon" />
      </div>
    </Wrapper>
  );
};

// Styled component definition for the wrapper
const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end; /* Align button to the right */
  align-items: flex-end; /* Align button to the bottom */
  position: fixed; /* Keep it fixed on the screen */
  bottom: 2rem; /* Adjust the distance from the bottom */
  right: 2rem; /* Adjust the distance from the right */
  z-index: 999;
  cursor: pointer;

  .top-btn {
    font-size: 2.4rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

// Export the GoToTop component as the default export
export default GoToTop;
