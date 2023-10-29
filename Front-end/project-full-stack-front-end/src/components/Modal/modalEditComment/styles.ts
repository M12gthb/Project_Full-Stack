import styled from "styled-components";

export const Styledh1 = styled.h1`
  font-size: 16px;
  font-family: "Lexend";
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  width: 50%;
  margin-bottom: 30px;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  textarea {
    width: 100%;
    height: 100px;
  }
  button {
    position: relative;
    bottom: 0;
    right: 31%;
    margin-top: 15px;
    height: 48px;
    border-radius: 4px;
    border: none;
    width: 200px;
    background-color: var(--color-brand-brand-1);
    color: var(--color-colors-fixed-white-fixed);
    font-weight: 600;
  }
`;
