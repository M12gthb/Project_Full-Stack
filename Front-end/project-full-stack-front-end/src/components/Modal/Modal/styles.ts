import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    background-color: var(--color-colors-fixed-white-fixed);
    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
  }
`;
