/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdvertiseCard = ({ cards, user, openModal }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards?.slice(indexOfFirstItem, indexOfLastItem) || [];
  console.log(currentItems);

  const navigate = useNavigate();

  const toProduct = (id: string) => {
    localStorage.setItem("motors:IDProduct", id);
    navigate("/Product");
  };

  return (
    <>
      <ul>
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
              <p>{card.description}</p>
              <span className={spanColor[indexSpanColor]}>
                {name.length > 2
                  ? `${name[0][0].toUpperCase()} ${name[1][0].toUpperCase()}`
                  : `${name[0][0].toUpperCase()}`}
              </span>
              <p>{user.name}</p>
              <div>{`${card.mileage} KM`}</div>
              <div>{`${card.year}`}</div>
              <p>{`R$ ${card.price.toFixed(3)},00`}</p>
              <button onClick={() => openModal(card.id)}>Editar</button>
              <button onClick={() => toProduct(card.id)}>Ver detalhes</button>
            </li>
          );
        })}
      </ul>

      {cards?.length > 12 ? (
        <div>
          {currentPage > 1 ? (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Anterior
            </button>
          ) : null}
          <p>
            {currentPage} de {Math.ceil(cards.length / 12)}
          </p>

          {indexOfLastItem >= cards.length ? null : (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              {" "}
              {"Seguinte >"}{" "}
            </button>
          )}
        </div>
      ) : null}
    </>
  );
};
