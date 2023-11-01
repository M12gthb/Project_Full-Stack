import styled from "styled-components";

export const BaseCards = styled.div`
  position: relative;
  top: 50px;
  margin-bottom: 150px;
`;

export const StyledCradsAnouncementContainer = styled.ul`
  max-width: 85%;
  display: flex;
  overflow-x: auto;
  padding-left: 12px;
  gap: 12px;
  li {
    cursor: pointer;
    position: relative;
    min-height: 280px;
    h1 {
      font-size: 16px;
      font-family: "Inter";
      font-weight: 700;
      font-style: normal;
      line-height: 28px;
      max-width: 100%;
    }

    h2 {
      font-size: 16px;
      font-family: "Inter";
      font-weight: 500;
      font-style: normal;
      line-height: 28px;
      max-width: 100%;
      color: var(--color-grey-scale-grey-2);
      max-height: 25px;
    }

    .nameUser {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 8px;
      span {
        height: 28px;
        width: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-colors-fixed-white-fixed);
        font-size: 12px;
        font-family: "Lexend";
        font-weight: 600;
        font-style: normal;
      }
      .blue {
        background-color: var(--color-brand-brand-1);
      }
      .rose {
        background-color: var(--color-random-random-1);
      }
      .brown {
        background-color: var(--color-random-random-3);
      }
      .green {
        background-color: var(--color-feedback-sucess-1);
      }
      p {
        color: var(--color-grey-scale-grey-2);
        font-size: 14px;
        font-family: "Inter";
        font-weight: 500;
        font-style: normal;
        line-height: 24px;
      }
    }

    .price {
      position: absolute;
      bottom: 0;
      right: 0;
      padding-top: 50px;
    }

    img {
      width: 280px;
      height: 152px;
    }
    .infos {
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: row;
      gap: 5px;
      left: 0;
      span {
        padding: 4px;
        color: var(--color-brand-brand-1);
        background-color: var(--color-brand-brand-4);
        border-radius: 4px;
        font-weight: 600;
      }
    }
  }
  @media (min-width: 1225px) {
    overflow-x: hidden;
    position: relative;
    left: 10%;
    transform: translateX(-5%);
    margin: 0 auto;
    width: 90%;
    flex-wrap: wrap;
  }
`;

export const StyledNextOrReturn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
  gap: 20px;
  .textPage {
    display: flex;
    .current {
      margin-right: 8px;
      font-size: 24px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
      color: var(--color-grey-scale-grey-2);
    }
    .next {
      color: var(--color-grey-scale-grey-3);
      font-size: 24px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
  }
  button {
    cursor: pointer;
    color: var(--color-grey-scale-grey-3);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 700;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    margin-right: 30px;
  }
  .nextPage {
    color: var(--color-brand-brand-1);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 700;
    font-style: normal;
    margin-left: 50px;
  }

  @media (min-width: 1225px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const BaseH1 = styled.h1``;
