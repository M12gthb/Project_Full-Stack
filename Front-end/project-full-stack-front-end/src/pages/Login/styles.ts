import styled from "styled-components";

export const StyleLogin = styled.div`
  width: 90%;
  max-width: 412px;
  padding-top: 44px;
  padding-bottom: 44px;
  padding-left: 48px;
  padding-right: 48px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 70px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  background-color: var(--color-colors-fixed-white-fixed);
  button {
    width: 100%;
    height: 48px;
    border: none;
    background-color: var(--color-brand-brand-1);
    color: var(--color-colors-fixed-white-fixed);
    font-size: 16px;
    font-family: "Inter";
    font-weight: 600;
    font-style: normal;
    border-radius: 4px;
  }
  p {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  a {
    text-decoration: none;
    width: 100%;
    height: 48px;
    border: 1.5px solid var(--color-grey-scale-grey-4);
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    color: var(--color-grey-scale-grey-2);
    align-items: center;
  }
`;

export const Styledh1 = styled.h1`
  font-size: 32px;
  font-family: "Lexend";
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  width: 50%;
  margin-bottom: 15px;
`;
