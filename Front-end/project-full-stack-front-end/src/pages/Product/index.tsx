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
import { ModalEditUser } from "../../components/Modal/ModalEditUser";
import { ModalEditAddress } from "../../components/Modal/ModalEditAddress";
import {
  Comments,
  Descripition,
  ImagesUl,
  ImgCover,
  Infos,
  NewComment,
  Recomend,
  StyledBaseDiv,
  UserInfos,
} from "./styles";
import { useNavigate } from "react-router-dom";

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
  const [modalEditUserOpen, setmodalEditUserOpen] = useState(false);
  const [modalEditAddressOpen, setmodalEditAddressOpen] = useState(false);

  const navigate = useNavigate();

  const getAllAnouncement = (id: string | undefined) => {
    if (id) {
      localStorage.setItem("motors:AnouncementUserId", id);
      navigate("/Buyer");
      console.log(Loggeduser);
    }
  };

  const toggleModalEditAddress = () =>
    setmodalEditAddressOpen(!modalEditAddressOpen);

  const toggleModalEditUser = () => setmodalEditUserOpen(!modalEditUserOpen);

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
        console.error(err);
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
    } else {
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

      <Header
        user={user}
        toggleModalEditUser={toggleModalEditUser}
        toggleModalEditAddress={toggleModalEditAddress}
      />
      <StyledBaseDiv></StyledBaseDiv>
      {modalEditAddressOpen ? (
        <ModalEditAddress toggleModal={toggleModalEditAddress} />
      ) : null}

      {modalEditUserOpen ? (
        <ModalEditUser toggleModal={toggleModalEditUser} />
      ) : null}

      <ImgCover
        src={anouncement?.cover_img}
        onClick={() => handleModal(anouncement?.cover_img)}
      />

      <Infos>
        <h1 className="text-style-heading-heading-6-600">
          {anouncement?.model}
        </h1>

        <div>
          <span>{anouncement?.year}</span>
          <span>{anouncement?.mileage} KM</span>
        </div>

        <p className="text-style-heading-heading-7-600">{`R$ ${anouncement?.price.toFixed(
          2
        )}`}</p>

        <button>Comprar</button>
      </Infos>

      <Descripition>
        <h1 className="text-style-heading-heading-6-600">Descrição</h1>
        <p className="text-style-text-body-1-400">{anouncement?.description}</p>
      </Descripition>

      <ImagesUl>
        <h1 className="text-style-heading-heading-6-600">Fotos</h1>
        <div>
          {anouncement?.images.map((element) => (
            <img
              key={element.id}
              src={element.image_url}
              alt=""
              onClick={() => handleModal(element.image_url)}
            />
          ))}
        </div>
      </ImagesUl>

      <UserInfos>
        {anouncemnetUser.length > 2 ? (
          <span className={spanColor[indexSpanColor]}>
            {anouncemnetUser[0][0].toUpperCase()}{" "}
            {anouncemnetUser[1][0].toUpperCase()}
          </span>
        ) : (
          <span className={spanColor[indexSpanColor]}>
            {anouncement?.user?.name[0]}
          </span>
        )}
        <h1 className="text-style-heading-heading-6-600">
          {anouncement?.user?.name}
        </h1>
        <p className="text-style-text-body-1-400">
          {anouncement?.user?.description.slice(0, 127) + "..."}
        </p>
        <button onClick={() => getAllAnouncement(anouncement?.userId)}>
          Ver todos os anuncios
        </button>
      </UserInfos>

      <Comments>
        <h1 className="text-style-heading-heading-6-600">Comentários</h1>
        <ul>
          {comments &&
            comments.map((comment, index) => (
              <li key={index}>
                <div className="header">
                  <span className={spanColor[indexSpanColor]}>
                    {comment.user.data.name[0]}
                  </span>
                  <p className="text-style-heading-heading-7-600 ">
                    {comment.user.data.name}
                  </p>
                  <p className="text-style-heading-heading-7-600 date">
                    {comment.commentDate}
                  </p>
                </div>
                {comment.userId == user?.id ? (
                  <button
                    className="edit"
                    onClick={() => editComment(comment.id)}
                  >
                    Editar comentário
                  </button>
                ) : null}
                {anouncement?.userId == user?.id ||
                comment.userId == user?.id ? (
                  <button
                    className="delete"
                    onClick={() => deleteComent(comment.id, anouncement?.id)}
                  >
                    Excluir
                  </button>
                ) : null}
                <p>{comment.comment}</p>
              </li>
            ))}
        </ul>
      </Comments>

      <NewComment>
        {user ? (
          <div className="formName">
            {name.length > 2 ? (
              <span className={spanColor[indexSpanColor]}>
                {name[0][0].toUpperCase()} {name[1][0].toUpperCase()}
              </span>
            ) : (
              <span className={spanColor[indexSpanColor]}>{user?.name[0]}</span>
            )}
            <h1 className="text-style-heading-heading-7-600">{user?.name}</h1>
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
          <button
            disabled={user ? false : true}
            style={
              !user
                ? {
                    backgroundColor: "rgba(206, 212, 218, 1)",
                  }
                : {
                    backgroundColor: "rgba(69,41,230,1)",
                  }
            }
            type="submit"
          >
            Comentar
          </button>
        </form>
        <Recomend>
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
        </Recomend>
      </NewComment>
      <Footer />
    </>
  );
};
