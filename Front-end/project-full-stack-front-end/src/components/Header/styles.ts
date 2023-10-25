import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--color-colors-fixed-white-fixed);
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  border-bottom: 2px solid;
  border-color: var(--color-grey-scale-grey-5);
  padding-left: 5%;
  .menu {
    height: 50px;
    width: 50px;
    @media (min-width: 790px) {
      display: none;
    }
    p {
      position: relative;
      z-index: 20;
      color: red;
    }
  }
`;

export const StyledMenu = styled.div`
  @media (max-width: 790px) {
    display: none;
  }
`;
