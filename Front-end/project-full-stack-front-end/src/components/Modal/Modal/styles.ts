import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    background-color: var(--color-colors-fixed-white-fixed);
    padding: 15px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
  }
  span {
    background-color: transparent;
    border: transparent;
    color: var(--color-grey-scale-grey-3);
    height: 24px;
    width: 24px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
  .title {
    width: 50%;
    margin-bottom: 50px;
    font-size: 16px;
    font-family: "Lexend";
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
  }
  .toLogin {
    width: 132px;
    height: 38px;
    border: none;
    border-radius: 4px;
    background-color: var(--color-brand-brand-1);
    color: var(--color-colors-fixed-white-fixed);
  }
`;
