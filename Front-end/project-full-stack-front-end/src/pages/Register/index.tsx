import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Header } from "../../components/Header";
import { RegisterContext } from "../../providers/RegisterProvider";
import { ModalRegisterSucess } from "../../components/Modal/ModalRegisterSucess";

export const Register = () => {
  const { isOpenModal, setIsOpenModal } = useContext(RegisterContext);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <>
      <Header user={undefined} />
      {isOpenModal ? <ModalRegisterSucess toggleModal={toggleModal} /> : null}
      <main>
        <h1>Cadastro</h1>
        <p>informações pessoais</p>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};
