import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
  line-height: 16.94px;

  label {
    line-height: 16.94px;
    font-size: 14px;
    font-weight: 700;
    font-family: "Inter";
    margin-bottom: 5px;
    margin-top: 5px;
  }
  input {
    height: 25px;
    outline: none;
  }
  input::placeholder {
    font-weight: 500;
    padding-left: 5px;
  }
  p {
    line-height: 16.94px;
    font-size: 14px;
    font-weight: 700;
    font-family: "Inter";
    color: var(--color-feedback-alert-1);
  }
`;
