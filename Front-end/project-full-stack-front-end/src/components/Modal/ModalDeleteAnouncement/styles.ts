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

export const Styledh2 = styled.h1`
  font-size: 16px;
  font-family: "Lexend";
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  margin-bottom: 20px;
`;

export const StyledP = styled.p`
  width: 90%;
  color: var(--color-grey-scale-grey-2);
  font-size: 16px;
  font-family: "Inter";
  font-weight: 400;
  font-style: normal;
  line-height: 28px;
  text-decoration: none;
  text-transform: none;
  margin-bottom: 15px;
`;

export const StyledCancelButton = styled.button`
  border: none;
  background-color: var(--color-grey-scale-grey-6);
  color: var(--color-grey-scale-grey-2);
  border-radius: 4px;
  height: 35px;
  width: 30%;
  position: relative;
  margin-top: 15px;
  cursor: pointer;
`;
export const StyledDeleteButton = styled.button`
  border: none;
  background-color: var(--color-feedback-alert-2);
  color: var(--color-feedback-alert-1);
  border-radius: 4px;
  height: 35px;
  width: 57%;
  position: absolute;
  bottom: 15px;
  left: 32%;
  cursor: pointer;
`;
