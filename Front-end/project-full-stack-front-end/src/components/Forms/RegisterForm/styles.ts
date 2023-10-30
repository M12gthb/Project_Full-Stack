import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 20px;
  .addContainer {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      width: 48%;
      label {
        margin-bottom: 5px;
        line-height: 16.94px;
        font-size: 14px;
        font-weight: 700;
        font-family: "Inter";
      }
      input {
        height: 25px;
      }
      input::placeholder {
        font-weight: 500;
        padding-left: 5px;
      }
    }
  }
  .descriptionConteiner {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    label {
      margin-bottom: 5px;
      line-height: 16.94px;
      font-size: 14px;
      font-weight: 700;
      font-family: "Inter";
    }
    textarea {
      height: 100px;
    }
  }
  .buttonsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
    margin-top: 12px;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      button {
        width: 49%;
        height: 48px;

        border-radius: 4px;
      }
    }
    h1 {
      margin-bottom: 5px;
      line-height: 16.94px;
      font-size: 14px;
      font-weight: 700;
      font-family: "Inter";
    }
  }
  .SubmitButton {
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
`;

export const StyledLabel = styled.label`
  line-height: 16.94px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Inter";
`;
