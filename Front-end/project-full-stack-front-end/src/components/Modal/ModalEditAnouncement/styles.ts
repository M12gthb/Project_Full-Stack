import styled from "styled-components";

export const StyledForm = styled.form`
  overflow-y: scroll;
  padding-bottom: 15px;

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
    }
  }
  .addContainerImage {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
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

  .buttonsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;

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
  .addButton {
    width: 70%;
    height: 38px;
    color: var(--color-brand-brand-1);
    background-color: var(--color-brand-brand-3);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .buttonsContainer {
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: row;
  }
  .submitButton {
    position: relative;
    width: 40%;
    top: 20px;
    border: none;
    height: 48px;
    border-radius: 4px;
    background-color: var(--color-brand-brand-3);
    color: rgba(237, 234, 253, 1);
    font-weight: 600;
  }
  .deletedButton {
    position: relative;
    width: 60%;
    top: 20px;
    border: none;
    height: 48px;
    border-radius: 4px;
    background-color: var(--color-grey-scale-grey-6);
    color: var(--color-grey-scale-grey-2);
    font-weight: 600;
  }
`;

export const Styledh1 = styled.h1`
  font-size: 16px;
  font-family: "Lexend";
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  width: 50%;
  margin-bottom: 15px;
`;
export const Styledh2 = styled.h1`
  font-size: 16px;
  font-family: "Lexend";
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  width: 50%;
  margin-top: 15px;
  margin-bottom: 15px;
`;
