import styled from "styled-components";

export const StyledCradsAnouncementContainer = styled.ul`
  width: 95vw;
  display: flex;
  overflow-x: auto;
  padding-left: 12px;
  gap: 12px;

  li {
    position: relative;
    min-height: 250px;
    padding-bottom: 12px;
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

    .price {
      position: absolute;
      bottom: 72px;
      right: 0;
      padding-top: 50px;
      font-size: 16px;
      font-family: "Inter";
      font-weight: 700;
      font-style: normal;
    }

    img {
      width: 280px;
      height: 152px;
    }
    .infos {
      display: flex;
      flex-direction: row;
      gap: 5px;
      margin-top: 6px;
      bottom: 0;
      left: 0;
      span {
        padding: 4px;
        color: var(--color-brand-brand-1);
        background-color: var(--color-brand-brand-4);
        border-radius: 4px;
        font-weight: 600;
      }
    }
    .active {
      position: absolute;
      left: 5px;
      top: 5px;
      color: var(--color-colors-fixed-white-fixed);
      padding: 3px;
      background-color: var(--color-brand-brand-1);
      font-weight: 500;
    }
    .unactive {
      position: absolute;
      left: 5px;
      top: 5px;
      color: var(--color-colors-fixed-white-fixed);
      padding: 3px;
      background-color: var(--color-grey-scale-grey-4);
      font-weight: 500;
    }
    button {
      border: 2px solid var(--color-grey-scale-grey-1);
      border-radius: 4px;
      background-color: transparent;
      height: 38px;
      margin-right: 12px;
      margin-top: 20px;
      font-size: 16px;
      font-family: "Inter";
      font-weight: 700;
      font-style: normal;
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
