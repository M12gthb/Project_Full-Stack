import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  position: relative;
  background-color: var(--color-grey-scale-grey-0);
  color: var(--color-colors-fixed-white-fixed);
  font-weight: var();
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 45px;

  img {
    width: 153.02px;
    height: 26.34px;
    margin-top: 45px;
    @media (min-width: 790px) {
      margin-left: 45px;
      margin-top: 0;
    }
  }

  .button {
    width: 53px;
    height: 50px;
    margin-top: 0;
    margin-bottom: 30px;
    @media (min-width: 790px) {
      margin-right: 59px;
      position: relative;
      top: 12px;
    }
  }

  @media (min-width: 790px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
