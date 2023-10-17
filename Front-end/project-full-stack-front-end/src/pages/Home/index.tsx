import { Header } from "../../components/Header";
import { StyledSection } from "./styles";
import background from "../../assets/backgroundHomepage.png";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <StyledSection>
        <img src={background} alt="background" />
        <h1>Motors Shop</h1>
        <h2>A melhor plataforma de anúncios de carros no país</h2>
      </StyledSection>
    </>
  );
};
