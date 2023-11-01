import styled from "styled-components";

export const StyledBaseDiv = styled.div`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 0;
  z-index: 0;
  background-color: var(--color-brand-brand-1);
`;

export const StyledH1 = styled.h1`
  position: relative;
  top: 150px;
  left: 8%;
  width: 30%;
`;

export const NoCards = styled.div`
  width: 90%;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  height: 282.99px;
`;

export const StyledSection = styled.div`
  width: 90%;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50%;
  top: 100px;
  z-index: 2;
  transform: translateX(-50%);
  background-color: var(--color-colors-fixed-white-fixed);
  padding: 20px;
  border-radius: 4px;

  .infos {
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    gap: 12px;

    span {
      padding: 4px;
      border: none;
      background-color: var(--color-brand-brand-4);
      color: var(--color-brand-brand-1);
      font-size: 14px;
      font-family: "Inter";
      font-weight: 400;
      font-style: normal;
      border-radius: 4px;
      height: 10px;
      display: flex;
      align-items: center;
    }
  }

  h1 {
    font-size: 24px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
    color: var(--color-grey-scale-grey-0);
  }

  p {
    font-size: 12px;
    font-family: "Inter";
    font-weight: 400;
    font-style: normal;
    line-height: 28px;
    color: var(--color-grey-scale-grey-2);
    margin-top: 15px;
    width: 100%;
    word-wrap: break-word;
  }

  button {
    width: 160px;
    height: 48px;
    background-color: var(--color-colors-fixed-white-fixed);
    color: var(--color-brand-brand-1);
    border: 1.5px solid var(--color-brand-brand-1);
    border-radius: 4px;
    font-size: 16px;
    font-family: "Inter";
    font-weight: 600;
    font-style: normal;
    cursor: pointer;
    margin-top: 15px;
  }

  .blue {
    background-color: var(--color-brand-brand-1);
    height: 86px;
    width: 86px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
  }

  .rose {
    background-color: var(--color-random-random-1);
    height: 86px;
    width: 86px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
  }

  .brown {
    background-color: var(--color-random-random-3);
    height: 86px;
    width: 86px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
  }

  .green {
    background-color: var(--color-feedback-sucess-1);
    height: 86px;
    width: 86px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
  }
`;
