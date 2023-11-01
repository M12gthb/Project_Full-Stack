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
    margin-bottom: 5px;
    margin-top: 5px;
  }
  input {
    height: 48px;
    outline: none;
    border: 1.5px solid var(--color-grey-scale-grey-1);
    border-radius: 4px;
    padding-left: 16px;
  }
  input::placeholder {
    font-weight: 400;
    color: var(--color-grey-scale-grey-3);
  }
  p {
    line-height: 16.94px;
    font-size: 14px;
    font-weight: 700;
    font-family: "Inter";
    color: var(--color-feedback-alert-1);
  }
`;
