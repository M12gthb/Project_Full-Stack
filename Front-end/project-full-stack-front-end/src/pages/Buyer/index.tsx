import { useContext, useEffect, useState } from "react";
import { BuyerContext } from "../../providers/BuyerProvider";
import burguerMenu from "../../assets/burger-menu-svgrepo-com.svg";
import { Footer } from "../../components/Footer";
import { IUsers } from "../../interfaces/interfaces";
import { api } from "../../services/api";
import { AnouncementCard } from "../../components/Cards/AnouncementCard";
import { ModalEditUser } from "../../components/Modal/ModalEditUser";
import { Header } from "../../components/Header";

export const Buyer = () => {
  const [burguer, setBurguer] = useState(false);
  const [loggedUser, setLoggedUser] = useState<IUsers>();
  const { getUserInfo, user, cards } = useContext(BuyerContext);
  const [modalEditUserOpen, setmodalEditUserOpen] = useState(false);

  const toggleModalEditUser = () => setmodalEditUserOpen(!modalEditUserOpen);

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
      <Header user={user} toggleModalEditUser={toggleModalEditUser} />
      {modalEditUserOpen ? (
        <ModalEditUser toggleModal={toggleModalEditUser} />
      ) : null}
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

      <AnouncementCard cards={cards} />

      <Footer />
    </>
  );
};
