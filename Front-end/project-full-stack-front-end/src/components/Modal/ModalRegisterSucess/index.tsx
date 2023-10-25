import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal";

interface ModalErrorProps {
  toggleModal: () => void;
}

export const ModalRegisterSucess = ({ toggleModal }: ModalErrorProps) => {
  const naigate = useNavigate();
  return (
    <Modal toggleModal={toggleModal}>
      <h1>Sucesso!</h1>
      <button onClick={() => toggleModal()}>X</button>
      <h1>Sua conta foi criada com sucesso!</h1>
      <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
      <button onClick={() => naigate("/login")}>Ir para login</button>
    </Modal>
  );
};
