import { useContext, useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Header } from "../../components/Header";
import { RegisterContext } from "../../providers/RegisterProvider";
import { ModalRegisterSucess } from "../../components/Modal/ModalRegisterSucess";
import { ModalEditUser } from "../../components/Modal/ModalEditUser";
import { IUsers } from "../../interfaces/interfaces";
import { api } from "../../services/api";
import { ModalEditAddress } from "../../components/Modal/ModalEditAddress";
import { StyledSection, Styledh1, Styledh2 } from "./styles";

export const Register = () => {
  const { isOpenModal, setIsOpenModal } = useContext(RegisterContext);
  const [modalEditUserOpen, setmodalEditUserOpen] = useState(false);
  const [user, setUSer] = useState<IUsers | undefined>(undefined);
  const [modalEditAddressOpen, setmodalEditAddressOpen] = useState(false);

  const toggleModalEditAddress = () =>
    setmodalEditAddressOpen(!modalEditAddressOpen);

  const toggleModalEditUser = () => setmodalEditUserOpen(!modalEditUserOpen);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const getUser = async () => {
    const userId = localStorage.getItem("motors:UserId");
    if (userId) {
      const userResponse = await api.get(`/users/${userId}`);
      setUSer(userResponse.data);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Header
        user={user}
        toggleModalEditUser={toggleModalEditUser}
        toggleModalEditAddress={toggleModalEditAddress}
      />
      {modalEditAddressOpen ? (
        <ModalEditAddress toggleModal={toggleModalEditAddress} />
      ) : null}
      {modalEditUserOpen ? (
        <ModalEditUser toggleModal={toggleModalEditUser} />
      ) : null}
      {isOpenModal ? <ModalRegisterSucess toggleModal={toggleModal} /> : null}
      <StyledSection>
        <Styledh1>Cadastro</Styledh1>
        <Styledh2>informações pessoais</Styledh2>
        <RegisterForm />
      </StyledSection>
      <Footer />
    </>
  );
};
