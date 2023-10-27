import { StyledHeader, StyledMenu } from "./styles";
import logo from "../../assets/Motors shop.svg";
import burguerMenu from "../../assets/burger-menu-svgrepo-com.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({
  user,
  toggleModalEditUser,
  toggleModalEditAddress,
}: any) => {
  const [burguer, setBurguer] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const name = user?.name.split(" ") || [];
  const spanColor = ["blue", "rose", "brown", "green"];
  const indexSpanColor = Math.floor(Math.random() * spanColor.length);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("motors:token");
    localStorage.removeItem("motors:UserId");
    localStorage.removeItem("motors:IDProduct");
    localStorage.removeItem("motors:Type");
    navigate("/");
  };
  if (user) {
    return (
      <>
        <StyledHeader>
          {menuModal ? (
            <div>
              <button onClick={() => toggleModalEditUser()}>
                Editar perfil
              </button>
              <button onClick={() => toggleModalEditAddress()}>
                Editar endereço
              </button>
              <button onClick={() => logOut()}>logout</button>
            </div>
          ) : null}
          <img src={logo} alt="Logo" />
          <StyledMenu onClick={() => setMenuModal(!menuModal)}>
            {name.length > 2 ? (
              <span className={spanColor[indexSpanColor]}>
                {name[0][0].toUpperCase()} {name[1][0].toUpperCase()}
              </span>
            ) : (
              <span className={spanColor[indexSpanColor]}>
                {user?.name[0].toUpperCase()}
              </span>
            )}
            <p>{user?.name}</p>
          </StyledMenu>
          <img
            className="menu"
            src={burguerMenu}
            alt=""
            onClick={() => setBurguer(!burguer)}
          />
          {burguer ? (
            <div onClick={() => setMenuModal(!menuModal)}>
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
        </StyledHeader>
      </>
    );
  } else {
    return (
      <>
        <StyledHeader>
          <img src={logo} alt="Logo" />
          <StyledMenu>
            <Link to={"/login"}>Fazer login</Link>
            <Link to={"/register"}>Cadastro</Link>
          </StyledMenu>
          <img
            className="menu"
            src={burguerMenu}
            alt=""
            onClick={() => setBurguer(!burguer)}
          />
          {burguer ? (
            <div>
              <Link to={"/login"}>Fazer login</Link>
              <Link to={"/register"}>Cadastro</Link>
            </div>
          ) : null}
        </StyledHeader>
      </>
    );
  }
};
