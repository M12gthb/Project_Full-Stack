import { IAnouncement } from "../../../interfaces/interfaces";
import { api } from "../../../services/api";
import { Modal } from "../Modal";
import {
  StyledCancelButton,
  StyledDeleteButton,
  Styledh1,
  Styledh2,
} from "./styles";

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
      <Styledh1>Excluir anuncio</Styledh1>
      <span onClick={() => toggleModal()}>X</span>
      <Styledh2>Tem certeza que deseja remover este anúncio?</Styledh2>
      <p>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
        anuncio e removerá seus dados de nossos servidores.
      </p>
      <StyledCancelButton onClick={() => toggleModal()}>
        Cancelar
      </StyledCancelButton>
      <StyledDeleteButton onClick={() => deleteAnouncement()}>
        Sim, excluir anúncio
      </StyledDeleteButton>
    </Modal>
  );
};
