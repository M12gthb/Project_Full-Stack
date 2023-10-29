import { Modal } from "../Modal";
import { StyledImg } from "./styles";

interface ModalErrorProps {
  toggleModal: () => void;
  src: string | undefined;
}

export const ModalImage = ({ toggleModal, src }: ModalErrorProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <h1 className="text-style-heading-heading-7-500 title">
        Imagem do veículo
      </h1>
      <span onClick={() => toggleModal()}>X</span>
      <StyledImg src={src} />
    </Modal>
  );
};
