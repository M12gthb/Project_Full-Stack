import logoFooter from "../../assets/LogoFooter.svg";
import index from "../../assets/indexFooter.svg";

export const Footer = () => {
  return (
    <>
      <main>
        <img src={logoFooter} />
        <h1>© 2022 - Todos os direitos reservados.</h1>
        <img src={index} />
      </main>
    </>
  );
};
