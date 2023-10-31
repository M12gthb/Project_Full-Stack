import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: relative;
  background-color: var(--color-colors-fixed-white-fixed);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid;
  border-color: var(--color-grey-scale-grey-5);
  z-index: 3;

  .logo {
    position: absolute;
    left: 5%;
  }
  .menu {
    height: 50px;
    width: 50px;
    position: absolute;
    right: 5%;
    @media (min-width: 790px) {
      display: none;
    }
    p {
      position: relative;
      z-index: 20;
      color: red;
    }
  }

  .burguerSelected {
    background-color: var(--color-colors-fixed-white-fixed);
    border-left: 2px solid var(--color-grey-scale-grey-5);
    border-bottom: 2px solid var(--color-grey-scale-grey-5);
    height: 100%;
    position: absolute;
    padding: 0 44px;
    display: flex;
    align-items: center;
    gap: 44px;
    right: 0;
    top: 81px;

    .menulink1 {
      color: var(--color-brand-brand-1);
    }

    .menulink2 {
      color: var(--color-grey-scale-grey-0);
      text-decoration: none;
      height: 40px;
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--color-grey-scale-grey-4);
      border-radius: 4px;
    }
    @media (min-width: 790px) {
      display: none;
    }
  }
`;

export const StyledMenu = styled.div`
  cursor: pointer;
  background-color: var(--color-colors-fixed-white-fixed);
  border-left: 2px solid var(--color-grey-scale-grey-5);
  height: 100%;
  position: absolute;
  padding: 0 44px;
  display: flex;
  align-items: center;
  gap: 44px;
  right: 0;
  .menulink1 {
    color: var(--color-brand-brand-1);
  }

  .menulink2 {
    color: var(--color-grey-scale-grey-0);
    text-decoration: none;
    height: 40px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-grey-scale-grey-4);
    border-radius: 4px;
  }
  @media (max-width: 790px) {
    display: none;
  }
`;

export const StyledDiv = styled.div`
  background-color: var(--color-colors-fixed-white-fixed);
  border-left: 2px solid var(--color-grey-scale-grey-5);
  border-bottom: 2px solid var(--color-grey-scale-grey-5);
  height: 100%;
  position: absolute;
  padding: 0 44px;
  display: flex;
  align-items: center;
  gap: 44px;
  right: 0;
  z-index: 4;
  top: 81px;

  button {
    font-size: 16px;
    font-family: "Inter";
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--color-grey-scale-grey-0);
  }
  button:hover {
    color: var(--color-brand-brand-1);
  }
  @media (max-width: 790px) {
    top: 81px;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-grey-scale-grey-5);
    border-right: none;
    height: auto;
  }
`;

export const StyledDivMenu = styled.div`
  cursor: pointer;
  background-color: var(--color-colors-fixed-white-fixed);
  border-left: 2px solid var(--color-grey-scale-grey-5);
  height: 100%;
  position: absolute;
  padding: 0 44px 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  right: 0;
  z-index: 1;
  color: var(--color-grey-scale-grey-2);
  font-size: 16px;
  font-family: "Inter";
  font-weight: 400;
  font-style: normal;
  line-height: 28px;
  text-decoration: none;
  text-transform: none;
  .blue {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--color-random-random-6);
    color: var(--color-colors-fixed-white-fixed);
    font-size: 16px;
    font-family: "Inter";
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
  }
  .rose {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--color-random-random-1);
    color: var(--color-colors-fixed-white-fixed);
    font-size: 16px;
    font-family: "Inter";
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
  }
  .brown {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--color-random-random-3);
    color: var(--color-colors-fixed-white-fixed);
    font-size: 16px;
    font-family: "Inter";
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
  }
  .green {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--color-random-random-8);
    color: var(--color-colors-fixed-white-fixed);
    font-size: 16px;
    font-family: "Inter";
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
  }
  @media (max-width: 790px) {
    display: none;
  }
`;
