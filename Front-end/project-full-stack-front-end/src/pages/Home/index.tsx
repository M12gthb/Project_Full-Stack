import { Header } from "../../components/Header";
import { StyledSection } from "./styles";
import background from "../../assets/backgroundHomepage.png";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  IAnouncement,
  IAnouncementWithUser,
  IUsers,
} from "../../interfaces/interfaces";
import { AnouncementCard } from "../../components/Cards/AnouncementCard";

export const Home = () => {
  const [cards, setCards] = useState<IAnouncementWithUser[]>([]);

  useEffect(() => {
    async function getAnouncements() {
      try {
        const response = await api.get("/anouncements");

        const promises = response.data.map(async (element: IAnouncement) => {
          const userResponse = await api.get(`/users/${element.userId}`);
          const user: IUsers = userResponse.data;
          return { ...element, user };
        });

        const anouncementsWithUsers = await Promise.all(promises);

        setCards(anouncementsWithUsers);
      } catch (error) {
        console.error(error);
      }
    }
    getAnouncements();
  }, []);

  return (
    <>
      <Header type={"anouncements"}></Header>
      <StyledSection>
        <img src={background} alt="background" />
        <h1>Motors Shop</h1>
        <h2>A melhor plataforma de anúncios de carros no país</h2>
      </StyledSection>
      <AnouncementCard cards={cards} />

      <Footer />
    </>
  );
};
