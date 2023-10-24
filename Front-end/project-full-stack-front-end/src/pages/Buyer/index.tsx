import { useContext, useEffect, useState } from "react";
import { BuyerContext } from "../../providers/BuyerProvider";
import burguerMenu from "../../assets/burger-menu-svgrepo-com.svg";
import { Footer } from "../../components/Footer";
import { IUsers } from "../../interfaces/interfaces";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const Buyer = () => {
  const [burguer, setBurguer] = useState(false);
  const [loggedUser, setLoggedUser] = useState<IUsers>();
  const { getUserInfo, user, cards } = useContext(BuyerContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const navigate = useNavigate();

  const toProduct = (id: string) => {
    localStorage.setItem("motors:IDProduct", id);
    navigate("/Product");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const getLoggedUser = async (id: string) => {
    const response = await api.get(`/users/${id}`);
    setLoggedUser(response.data);
  };

  useEffect(() => {
    const id = localStorage.getItem("motors:anouncementUserId");
    const userId = localStorage.getItem("motors:UserId");

    if (userId) {
      getLoggedUser(userId);
    }

    if (id) {
      getUserInfo(id);
    }
  }, []);

  const name = user?.name.split(" ") || [];
  const loggedName = loggedUser?.name.split(" ") || [];
  const spanColor = ["blue", "rose", "brown", "green"];
  const indexSpanColor = Math.floor(Math.random() * spanColor.length);

  const renderName = () => {
    if (name.length > 0) {
      return (
        <span className={spanColor[indexSpanColor]}>
          {name[0][0].toUpperCase()} {name[1] ? name[1][0].toUpperCase() : ""}
        </span>
      );
    } else {
      return null;
    }
  };

  const renderLoggedName = () => {
    if (loggedName.length > 0) {
      return (
        <span className={spanColor[indexSpanColor]}>
          {loggedName[0][0].toUpperCase()}{" "}
          {loggedName[1] ? loggedName[1][0].toUpperCase() : ""}
        </span>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div>
        {renderLoggedName()}
        <p>{loggedUser?.name}</p>
      </div>
      <img src={burguerMenu} alt="" onClick={() => setBurguer(!burguer)} />
      {burguer && user && (
        <div>
          {renderLoggedName()}
          <p>{loggedUser?.name}</p>
        </div>
      )}
      <div>
        {renderName()}
        <p>{user?.name}</p>
      </div>

      <div>
        {user && (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()} {name[1] ? name[1][0].toUpperCase() : ""}
          </span>
        )}
        <h1>{name.join(" ")}</h1>
        <span>{user?.type}</span>
        <p>{user?.description}</p>
      </div>

      <h1>Anúncios</h1>

      <ul>
        {currentItems.map((card) => {
          const name = card.user.name.split(" ");
          const spanColor = ["blue", "rose", "brown", "green"];
          const indexSpanColor = Math.floor(Math.random() * spanColor.length);
          return (
            <li key={card.id} onClick={() => toProduct(card.id)}>
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
            </li>
          );
        })}
      </ul>

        {cards?.length > 12 ? <div>
        {currentPage > 1 ? (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Anterior
          </button>
        ) : null}
        <p>{currentPage} de {Math.ceil(cards.length / 12)}</p>

        {indexOfLastItem >= cards.length ? null : (
          <button onClick={() => setCurrentPage(currentPage + 1)}> Seguinte > </button>
        )}
      </div>: null }
      

      <Footer />
    </>
  );
};

