import { Modal } from "../Modal";
import { StyledP, Styledh1 } from "./styles";

interface ModalAnouncementSucessProps {
  toggleModal: () => void;
}

export const ModalAnouncementSucess = ({
  toggleModal,
}: ModalAnouncementSucessProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <Styledh1>Sucesso!</Styledh1>
      <span onClick={() => toggleModal()}>X</span>
      <Styledh1>Seu anúncio foi criado com sucesso!</Styledh1>
      <StyledP>
        Agora você poderá ver seus negócios crescendo em grande escala
      </StyledP>
    </Modal>
  );
};
