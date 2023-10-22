import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  IAnouncement,
  IComments,
  ICommentsUsers,
  IUsers,
} from "../../interfaces/interfaces";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import burguerMenu from "../../assets/burger-menu-svgrepo-com.svg";

export const Product = () => {
  const [anouncement, setAnouncemt] = useState<IAnouncement>();
  const [user, setUser] = useState<IUsers>();
  const [comments, setComments] = useState<ICommentsUsers[]>([]);
  const [burguer, setBurguer] = useState(false);

  const [commentText, setCommentText] = useState("");

  const name = user?.name.split(" ") || [];
  const spanColor = ["blue", "rose", "brown", "green"];
  const indexSpanColor = Math.floor(Math.random() * spanColor.length);

  const navigate = useNavigate();

  const getProduct = async (id: string) => {
    const response = await api.get(`/anouncements/${id}`);
    const userId = localStorage.getItem("motors:UserId");
    const userResponse = await api.get(`/users/${userId}`);

    setUser(userResponse.data);

    userComment(response.data.comments);
    setAnouncemt(response.data);
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

  const userComment = async (data: IComments[]) => {
    const commentPromises = data.map(async (element) => {
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
  };

  const newComment = async (id: string | undefined, data: string) => {
    const token = localStorage.getItem("motors:token");

    const commentData = {
      comment: data,
    };

    await api.post(`/comments/${id}`, commentData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const response = await api.get(`/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    userComment(response.data);
    setCommentText("");
  };

  useEffect(() => {
    const id = localStorage.getItem("motors:IDProduct");
    if (id) {
      getProduct(id);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div>
        {name.length > 2 ? (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()} {name[1][0].toUpperCase()}
          </span>
        ) : (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()}
          </span>
        )}
        <p>{user?.name}</p>
      </div>
      <img src={burguerMenu} alt="" onClick={() => setBurguer(!burguer)} />
      {burguer ? (
        <div>
          {name.length > 2 ? (
            <span className={spanColor[indexSpanColor]}>
              {name[0][0].toUpperCase()} {name[1][0].toUpperCase()}
            </span>
          ) : (
            <span className={spanColor[indexSpanColor]}>
              {name[0][0].toUpperCase()}
            </span>
          )}
          <p>{user?.name}</p>
        </div>
      ) : null}
      <div>
        {name.length > 2 ? (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()} {name[1][0].toUpperCase()}
          </span>
        ) : (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()}
          </span>
        )}
        <p>{user?.name}</p>
      </div>

      <img src={anouncement?.cover_img} alt="" />

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
          <img key={element.id} src={element.image_url} alt="" />
        ))}
      </ul>

      <div>
        {name.length > 2 ? (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()} {name[1][0].toUpperCase()}
          </span>
        ) : null}
        <h1>{user?.name}</h1>
        <p>{user?.description}</p>
        <Link to={"/"}>Ver todos os anuncios</Link>
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
                {comment.comment}
              </li>
            ))}
        </ul>
      </div>

      <div>
        {name.length > 2 ? (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()} {name[1][0].toUpperCase()}
          </span>
        ) : null}
        <h1>{user?.name}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newComment(anouncement?.id, commentText);
            setCommentText("");
          }}
        >
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <button type="submit">Comentar</button>
        </form>
        <button onClick={() => setCommentText("Gostei muito!")}>
          Gostei muito!
        </button>
        <button onClick={() => setCommentText("Incrivel!")}>Incrivel!</button>
        <button
          onClick={() => setCommentText("Recomendarei para meus amigos!")}
        >
          Recomendarei para meus amigos
        </button>
      </div>
      <Footer />
    </>
  );
};
