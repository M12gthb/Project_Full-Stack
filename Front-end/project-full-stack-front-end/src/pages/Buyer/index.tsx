import { useContext, useEffect, useState } from "react";
import { BuyerContext } from "../../providers/BuyerProvider";
import { Footer } from "../../components/Footer";
import { AnouncementCard } from "../../components/Cards/AnouncementCard";
import { ModalEditUser } from "../../components/Modal/ModalEditUser";
import { Header } from "../../components/Header";
import { ModalEditAddress } from "../../components/Modal/ModalEditAddress";
import {
  StyledBaseDiv,
  StyledCradsAnouncementh1,
  StyledSection,
} from "./styles";

export const Buyer = () => {
  const { getUserInfo, user, cards } = useContext(BuyerContext);
  const [modalEditUserOpen, setmodalEditUserOpen] = useState(false);
  const [modalEditAddressOpen, setmodalEditAddressOpen] = useState(false);

  const toggleModalEditAddress = () =>
    setmodalEditAddressOpen(!modalEditAddressOpen);

  const toggleModalEditUser = () => setmodalEditUserOpen(!modalEditUserOpen);

  useEffect(() => {
    const id = localStorage.getItem("motors:anouncementUserId");
    const userId = localStorage.getItem("motors:AnouncementUserId");

    if (userId) {
      getUserInfo(userId);
    }

    if (id) {
    }
  }, []);

  const name = user?.name.split(" ") || [];
  const spanColor = ["blue", "rose", "brown", "green"];
  const indexSpanColor = Math.floor(Math.random() * spanColor.length);

  return (
    <>
      <Header
        user={user}
        toggleModalEditUser={toggleModalEditUser}
        toggleModalEditAddress={toggleModalEditAddress}
      />
      <StyledBaseDiv></StyledBaseDiv>
      {modalEditAddressOpen ? (
        <ModalEditAddress toggleModal={toggleModalEditAddress} />
      ) : null}
      {modalEditUserOpen ? (
        <ModalEditUser toggleModal={toggleModalEditUser} />
      ) : null}

      <StyledSection>
        {user && (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()} {name[1] ? name[1][0].toUpperCase() : ""}
          </span>
        )}
        <div className="infos">
          <h1>{name.join(" ")}</h1>
          <span>{user?.type}</span>
        </div>
        <p>{user?.description.slice(0, 127)}</p>
      </StyledSection>

      <StyledCradsAnouncementh1 className="text-style-heading-heading-5-600">
        Anúncios
      </StyledCradsAnouncementh1>

      <AnouncementCard cards={cards} />

      <Footer />
    </>
  );
};
