import { StyledHeader } from "./styles";
import logo from "../../assets/Motors shop.svg";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="Logo" />
      </StyledHeader>
    </>
  );
};
