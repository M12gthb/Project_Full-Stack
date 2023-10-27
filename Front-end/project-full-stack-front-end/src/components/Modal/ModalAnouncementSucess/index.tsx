import { Modal } from "../Modal";

interface ModalAnouncementSucessProps {
  toggleModal: () => void;
}

export const ModalAnouncementSucess = ({
  toggleModal,
}: ModalAnouncementSucessProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <h1>Sucesso!</h1>
      <button onClick={() => toggleModal()}>X</button>
      <h1>Seu anúncio foi criado com sucesso!</h1>
      <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
    </Modal>
  );
};
