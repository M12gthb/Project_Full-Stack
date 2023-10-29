import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal";
import { StyledP, Styledh1 } from "./styles";

interface ModalErrorProps {
  toggleModal: () => void;
}

export const ModalRegisterSucess = ({ toggleModal }: ModalErrorProps) => {
  const naigate = useNavigate();
  return (
    <Modal toggleModal={toggleModal}>
      <Styledh1>Sucesso!</Styledh1>
      <span onClick={() => toggleModal()}>X</span>
      <Styledh1>Sua conta foi criada com sucesso!</Styledh1>
      <StyledP>
        Agora você poderá ver seus negócios crescendo em grande escala
      </StyledP>
      <button className="toLogin" onClick={() => naigate("/login")}>
        Ir para login
      </button>
    </Modal>
  );
};
