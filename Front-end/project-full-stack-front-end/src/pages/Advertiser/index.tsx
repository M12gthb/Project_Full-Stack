import { useContext, useEffect, useState } from "react";
import { AdvertiserContext } from "../../providers/AdvertiserProvider";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AdvertiseCard } from "../../components/Cards/AdvertiseCard";
import { ModalEditAnouncement } from "../../components/Modal/ModalEditAnouncement";
import { ModalDeleteAnouncement } from "../../components/Modal/ModalDeleteAnouncement";

export const Advertiser = () => {
  const { anouncements, getUser, user, setAnouncements } =
    useContext(AdvertiserContext);

  const name = user?.name.split(" ") || [];
  const spanColor = ["blue", "rose", "brown", "green"];
  const indexSpanColor = Math.floor(Math.random() * spanColor.length);
  const [idProduct, setIdProduct] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModaDeletelOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);
  const toggleDeleteModal = () => {
    setModalOpen(false);
    setModaDeletelOpen(!modalDeleteOpen);
  };

  const openModal = (id: string) => {
    setIdProduct(id);
    toggleModal();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {/* <Header user={user} /> */}
      {modalDeleteOpen ? (
        <ModalDeleteAnouncement
          toggleModal={toggleDeleteModal}
          id={idProduct}
          setAnouncements={setAnouncements}
        />
      ) : null}

      {modalOpen ? (
        <ModalEditAnouncement
          toggleModal={toggleModal}
          id={idProduct}
          setAnouncements={setAnouncements}
          toggleDeleteModal={toggleDeleteModal}
        />
      ) : null}
      <div>
        {user && (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()} {name[1] ? name[1][0].toUpperCase() : ""}
          </span>
        )}
        <h1>{name.join(" ")}</h1>
        <span>{user?.type}</span>
        <p>{user?.description}</p>
        <button>Criar anuncio</button>
      </div>
      <AdvertiseCard cards={anouncements} user={user} openModal={openModal} />
      <Footer />
    </>
  );
};
