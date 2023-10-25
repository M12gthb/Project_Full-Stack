import { useState } from "react";
import { Modal } from "../Modal";
import { api } from "../../../services/api";
import {
  IComments,
  ICommentsUsers,
  IUsers,
} from "../../../interfaces/interfaces";

interface ModalEditCommentProps {
  toogleModal: () => void;
  id: string;
  setComments: React.Dispatch<React.SetStateAction<ICommentsUsers[]>>;
}

export const ModalEditComment = ({
  toogleModal,
  id,
  setComments,
}: ModalEditCommentProps) => {
  const [commentText, setCommentText] = useState("");

  const calculateElapsedTime = (commentDate: Date) => {
    const now = new Date();
    const postedDate = new Date(commentDate);

    const elapsedMilliseconds = Number(now) - Number(postedDate);
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);
    const elapsedMonths = Math.floor(elapsedDays / 30);

    if (elapsedMonths > 0) {
      return ` há ${elapsedMonths}  ${elapsedMonths > 1 ? "meses" : "mês"}`;
    } else if (elapsedDays > 0) {
      return `há ${elapsedDays}  ${elapsedDays > 1 ? "dias" : "dia"} `;
    } else if (elapsedHours > 0) {
      return `há ${elapsedHours} ${elapsedHours > 1 ? "horas" : "hora"} `;
    } else if (elapsedMinutes > 0) {
      return `há ${elapsedMinutes} ${
        elapsedMinutes > 1 ? "minutos" : "minuto"
      } `;
    } else {
      return `há ${elapsedSeconds} ${
        elapsedSeconds > 1 ? "segundos" : "segundo"
      } `;
    }
  };
  const editComment = async (id: string, data: any) => {
    const token = localStorage.getItem("motors:token");
    const idProduct = localStorage.getItem("motors:IDProduct");
    await api.patch(`/comments/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await api.get(`/comments/${idProduct}`);

    if (response) {
      try {
        const commentPromises = response.data.map(
          async (element: IComments) => {
            const user: IUsers = await api.get(`/users/${element.userId}`);
            const commentDate = new Date(element.commentDate);

            return {
              ...element,
              user: user,
              commentDate: calculateElapsedTime(commentDate),
            };
          }
        );

        const comments = await Promise.all(commentPromises);
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    }

    toogleModal();
  };
  return (
    <Modal toggleModal={toogleModal}>
      <h1>Edite seu comentário</h1>
      <button onClick={() => toogleModal()}>X</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editComment(id, { comment: commentText });
        }}
      >
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button type="submit">Edite seu Comentário</button>
      </form>
    </Modal>
  );
};
