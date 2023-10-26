import { IAnouncement } from "../../../interfaces/interfaces";
import { api } from "../../../services/api";
import { Modal } from "../Modal";

interface ModalDeleteAnouncementProps {
  toggleModal: () => void;
  id: string;
  setAnouncements: React.Dispatch<React.SetStateAction<IAnouncement[]>>;
}

export const ModalDeleteAnouncement = ({
  toggleModal,
  id,
  setAnouncements,
}: ModalDeleteAnouncementProps) => {
  const deleteAnouncement = async () => {
    const token = localStorage.getItem("motors:token");
    const userId = localStorage.getItem("motors:UserId");

    await api.delete(`/anouncements/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const response = await api.get(`anouncements/user/${userId}`);

    setAnouncements(response.data);

    toggleModal();
  };
  return (
    <Modal toggleModal={toggleModal}>
      <h1>Excluir anuncio</h1>
      <button onClick={() => toggleModal()}>X</button>
      <h1>Tem certeza que deseja remover este anúncio?</h1>
      <p>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
        anuncio e removerá seus dados de nossos servidores.
      </p>
      <button onClick={() => toggleModal()}>Cancelar</button>
      <button onClick={() => deleteAnouncement()}>Sim, excluir anúncio</button>
    </Modal>
  );
};
