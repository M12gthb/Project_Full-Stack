import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  IAnouncementWithUser,
  IComments,
  ICommentsUsers,
  IUsers,
} from "../../interfaces/interfaces";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ModalImage } from "../../components/Modal/ModalImage";
import { ModalEditComment } from "../../components/Modal/ModalEditComment";

export const Product = () => {
  const [anouncement, setAnouncemt] = useState<IAnouncementWithUser>();
  const [user, setUser] = useState<IUsers>();
  const [Loggeduser, setLoggedUser] = useState<IUsers | undefined>(undefined);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [comments, setComments] = useState<ICommentsUsers[]>([]);
  const [commentText, setCommentText] = useState("");
  const [source, setSource] = useState<string | undefined>();
  const [commentId, setCommentId] = useState<string>("");

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const toggleEditModal = () => setIsOpenEditModal(!isOpenEditModal);

  const editComment = (id: string) => {
    setCommentId(id);
    setIsOpenEditModal(true);
  };

  const deleteComent = async (id: string, aId: string | undefined) => {
    const token = localStorage.getItem("motors:token");
    const anouncementId = localStorage.getItem("motors:IDProduct");
    await api.delete(`/comments/${id}/${aId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    userComment(anouncementId);
  };

  const handleModal = (src: string | undefined) => {
    setSource(src);
    toggleModal();
  };

  const name = user?.name.split(" ") || [];
  const anouncemnetUser = anouncement?.user.name.split(" ") || [];
  const spanColor = ["blue", "rose", "brown", "green"];
  const indexSpanColor = Math.floor(Math.random() * spanColor.length);

  const getProduct = async () => {
    const id = localStorage.getItem("motors:IDProduct");
    const response = await api.get(`/anouncements/${id}`);
    const userId = localStorage.getItem("motors:UserId");
    const userAnouncement = await api.get(`/users/${response.data.userId}`);
    if (userId) {
      const userResponse = await api.get(`/users/${userId}`);
      setUser(userResponse.data);
    }
    userComment(id);
    setAnouncemt({ ...response.data, user: userAnouncement.data });
    console.log(response.data);
    return response.data;
  };

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

  const userComment = async (id: string | null) => {
    const data = await api.get(`/comments/${id}`);

    if (data) {
      try {
        const commentPromises = data.data.map(async (element: IComments) => {
          const user: IUsers = await api.get(`/users/${element.userId}`);
          const commentDate = new Date(element.commentDate);

          return {
            ...element,
            user: user,
            commentDate: calculateElapsedTime(commentDate),
          };
        });

        const comments = await Promise.all(commentPromises);
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const newComment = async (data: string) => {
    const token = localStorage.getItem("motors:token");
    const anouncementId = localStorage.getItem("motors:IDProduct");

    const commentData = {
      comment: data,
    };

    await api.post(`/comments/${anouncementId}`, commentData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    userComment(anouncementId);
    setCommentText("");
  };

  useEffect(() => {
    const userId = localStorage.getItem("motors:UserId");
    const getUser = async () => {
      const response = await api.get(`/users/${userId}`);
      setLoggedUser(response.data);
    };

    if (userId) {
      getUser();
      getProduct();
    }
  }, []);

  return (
    <>
      {isOpenModal && <ModalImage toggleModal={toggleModal} src={source} />}
      {isOpenEditModal && (
        <ModalEditComment
          toogleModal={toggleEditModal}
          id={commentId}
          setComments={setComments}
        />
      )}

      <Header user={Loggeduser} />

      <img
        src={anouncement?.cover_img}
        alt=""
        onClick={() => handleModal(anouncement?.cover_img)}
      />

      <div>
        <h1>{anouncement?.model}</h1>

        <span>{anouncement?.year}</span>
        <span>{anouncement?.mileage} KM</span>

        <p>{`R$ ${anouncement?.price.toFixed(2)}`}</p>

        <button>Comprar</button>
      </div>

      <div>
        <h1>Descrição</h1>
        {anouncement?.description}
      </div>

      <ul>
        <h1>Fotos</h1>
        {anouncement?.images.map((element) => (
          <img
            key={element.id}
            src={element.image_url}
            alt=""
            onClick={() => handleModal(element.image_url)}
          />
        ))}
      </ul>

      <div>
        {anouncemnetUser.length > 2 ? (
          <span className={spanColor[indexSpanColor]}>
            {anouncemnetUser[0][0].toUpperCase()}{" "}
            {anouncemnetUser[1][0].toUpperCase()}
          </span>
        ) : null}
        <h1>{anouncement?.user?.name}</h1>
        <p>{anouncement?.user?.description}</p>
        <button>Ver todos os anuncios</button>
      </div>

      <div>
        <h1>Comentários</h1>
        <ul>
          {comments &&
            comments.map((comment, index) => (
              <li key={index}>
                <span>
                  {comment.user.data.name
                    .split(" ")
                    .map((n: string) => n[0].toUpperCase())
                    .join(" ")}
                </span>
                <p>{comment.user.data.name}</p>
                <p>{comment.commentDate}</p>
                {comment.userId == user?.id ? (
                  <button onClick={() => editComment(comment.id)}>
                    Editar comentário
                  </button>
                ) : null}
                {anouncement?.userId == user?.id ? (
                  <button
                    onClick={() => deleteComent(comment.id, anouncement?.id)}
                  >
                    Excluir
                  </button>
                ) : null}
                {comment.comment}
              </li>
            ))}
        </ul>
      </div>

      <div>
        {user ? (
          <div>
            {name.length > 2 ? (
              <span className={spanColor[indexSpanColor]}>
                {name[0][0].toUpperCase()} {name[1][0].toUpperCase()}
              </span>
            ) : null}
            <h1>{user?.name}</h1>
          </div>
        ) : null}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            newComment(commentText);
            setCommentText("");
          }}
        >
          <textarea
            disabled={user ? false : true}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <button disabled={user ? false : true} type="submit">
            Comentar
          </button>
        </form>
        <button
          disabled={user ? false : true}
          onClick={() => setCommentText("Gostei muito!")}
        >
          Gostei muito!
        </button>
        <button
          disabled={user ? false : true}
          onClick={() => setCommentText("Incrivel!")}
        >
          Incrivel!
        </button>
        <button
          disabled={user ? false : true}
          onClick={() => setCommentText("Recomendarei para meus amigos!")}
        >
          Recomendarei para meus amigos
        </button>
      </div>
      <Footer />
    </>
  );
};
