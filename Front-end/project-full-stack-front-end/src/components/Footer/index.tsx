import logoFooter from "../../assets/LogoFooter.svg";
import index from "../../assets/indexFooter.svg";
import { StyledFooter } from "./styles";

export const Footer = () => {
  const scrollToHeader = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <StyledFooter>
        <img src={logoFooter} />
        <h1 className="text-style-text-body-1-400">
          © 2022 - Todos os direitos reservados.
        </h1>
        <img className="button" src={index} onClick={() => scrollToHeader()} />
      </StyledFooter>
    </>
  );
};
