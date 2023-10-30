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
        height: 25px;
      }
      input::placeholder {
        font-weight: 500;
        padding-left: 5px;
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
    button {
      font-weight: 600;
    }
  }

  .cancelButton {
    width: 32%;
    height: 48px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    color: var(--color-grey-scale-grey-2);
    background-color: var(--color-grey-scale-grey-6);
  }
  .deleteButton {
    width: 32%;
    height: 48px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    color: var(--color-feedback-alert-1);
    background-color: var(--color-feedback-alert-2);
  }
  .submitButton {
    width: 32%;
    height: 48px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    color: var(--color-colors-fixed-white-fixed);
    background-color: var(--color-brand-brand-1);
  }
  @media (max-width: 790px) {
    .buttonsContainer {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .submitButton {
      width: 60%;
    }
    .cancelButton {
      width: 47%;
    }
    .deleteButton {
      width: 47%;
    }
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
