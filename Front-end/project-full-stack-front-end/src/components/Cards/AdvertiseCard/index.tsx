/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledCradsAnouncementContainer } from "./styles";
import { StyledNextOrReturn } from "../AnouncementCard/styles";

export const AdvertiseCard = ({ cards, user, openModal }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const navigate = useNavigate();

  const toProduct = (id: string) => {
    localStorage.setItem("motors:IDProduct", id);
    navigate("/Product");
  };

  return (
    <>
      <StyledCradsAnouncementContainer>
        {currentItems.map((card: any) => {
          const name = user.name.split(" ");
          const spanColor = ["blue", "rose", "brown", "green"];
          const indexSpanColor = Math.floor(Math.random() * spanColor.length);
          return (
            <li key={card.id}>
              <span className={card.publish == true ? "active" : "unactive"}>
                {card.publish == true ? "Ativo" : "Inativo"}
              </span>
              <img src={card.cover_img} />
              <h1>
                {card.brand} - {card.model}
              </h1>
              <h2>{card.description}</h2>

              <div className="infos">
                <span>{`${card.mileage} KM`}</span>
                <span>{`${card.year}`}</span>
              </div>
              <p className="price">{`R$ ${card.price.toFixed(2)}`}</p>
              <button onClick={() => openModal(card.id)}>Editar</button>
              <button onClick={() => toProduct(card.id)}>Ver detalhes</button>
            </li>
          );
        })}
      </StyledCradsAnouncementContainer>

      {cards?.length > 12 ? (
        <StyledNextOrReturn>
          {currentPage > 1 ? (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              {" "}
              {"< Anterior"}{" "}
            </button>
          ) : null}
          <div className="textPage">
            <p className="current">{currentPage}</p>
            <p className="next">
              {" "}
              {" de"} {` ${Math.ceil(cards.length / 12)}`}
            </p>
          </div>

          {indexOfLastItem >= cards.length ? null : (
            <button
              className="nextPage"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {" "}
              {"Seguinte >"}{" "}
            </button>
          )}
        </StyledNextOrReturn>
      ) : null}
    </>
  );
};
