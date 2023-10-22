import { Header } from "../../components/Header";
import { StyledLi, StyledSection } from "./styles";
import background from "../../assets/backgroundHomepage.png";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  IAnouncement,
  IAnouncementWithUser,
  IUsers,
} from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [cards, setCards] = useState<IAnouncementWithUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const navigate = useNavigate()

  const toProduct = (id:string) => {
    localStorage.setItem("motors:IDProduct", id)

    navigate("/Product")
  }

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

  // Função para calcular os itens a serem exibidos na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Header></Header>
      <StyledSection>
        <img src={background} alt="background" />
        <h1>Motors Shop</h1>
        <h2>A melhor plataforma de anúncios de carros no país</h2>
      </StyledSection>
      <ul>
        {currentItems.map((card) => {
          const name = card.user.name.split(" ");
          const spanColor = ["blue", "rose", "brown", "green"];
          const indexSpanColor = Math.floor(Math.random() * spanColor.length);
          return (
            <StyledLi key={card.id}>
              <div onClick={() => toProduct(card.id)}>
              <img src={card.cover_img} />
              <h1>
                {card.brand} - {card.model}
              </h1>
              <p>{card.description}</p>
              <span className={spanColor[indexSpanColor]}>
                {name.length > 2
                  ? `${name[0][0].toUpperCase()} ${name[1][0].toUpperCase()}`
                  : `${name[0][0].toUpperCase()}`}
              </span>
              <p>{card.user.name}</p>
              <div>{`${card.mileage} KM`}</div>
              <div>{`${card.year}`}</div>
              <p>{`R$ ${card.price.toFixed(3)},00`}</p>
              </div>
            </StyledLi>
          );
        })}
      </ul>

      <div>
        {currentPage > 1 ? (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Anterior 
          </button>
        ) : null}

        <p>{currentPage} de {Math.ceil(cards.length / 12)}</p>

        {indexOfLastItem >= cards.length ? null : 
        <button onClick={() => setCurrentPage(currentPage + 1)}> Seguinte > </button>}
        
      </div>

      <Footer />
    </>
  );
};
