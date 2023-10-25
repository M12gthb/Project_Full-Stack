import { Modal } from "../Modal";
import { StyledImg } from "./styles";

interface ModalErrorProps {
  toggleModal: () => void;
  src: string | undefined;
}

export const ModalImage = ({ toggleModal, src }: ModalErrorProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <h1>Imagem do veículo</h1>
      <button onClick={() => toggleModal()}>X</button>
      <StyledImg src={src} />
    </Modal>
  );
};
