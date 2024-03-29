import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 450px;
  position: relative;
  z-index: 1;
  margin-bottom: 100px;
  background: linear-gradient(to top, #000, #fff);

  img {
    height: 100%;
    position: absolute;
    width: 100%;
    @media (max-width: 768px) {
      display: none;
    }
  }

  h1 {
    position: absolute;
    font-size: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
    color: var(--color-colors-fixed-white-fixed);
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 768px) {
      font-size: 48px;
    }
  }

  h2 {
    position: absolute;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
    color: var(--color-colors-fixed-white-fixed);
    left: 50%;
    transform: translateX(-50%);
    top: 140px;
    @media (max-width: 768px) {
      font-size: 18px;
      width: 70%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 1225px) {
    height: 300px;
  }
`;
