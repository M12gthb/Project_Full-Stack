import { useEffect, useRef } from "react";
import { StyledDiv, StyledDivMenu, StyledHeader, StyledMenu } from "./styles";
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

  const modalRef = useRef(null);

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setMenuModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  if (user) {
    return (
      <>
        <StyledHeader>
          {menuModal ? (
            <StyledDiv ref={modalRef}>
              <button onClick={() => toggleModalEditUser()}>
                Editar perfil
              </button>
              <button onClick={() => toggleModalEditAddress()}>
                Editar endereço
              </button>
              <button onClick={() => logOut()}>logout</button>
            </StyledDiv>
          ) : null}
          <img className="logo" src={logo} alt="Logo" />
          <StyledDivMenu onClick={() => setMenuModal(!menuModal)}>
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
          </StyledDivMenu>
          <img
            className="menu"
            src={burguerMenu}
            alt=""
            onClick={() => {
              setMenuModal(!menuModal);
            }}
          />
        </StyledHeader>
      </>
    );
  } else {
    return (
      <>
        <StyledHeader>
          <img className="logo" src={logo} alt="Logo" />
          <StyledMenu>
            <Link
              className="text-style-text-body-1-600 menulink1"
              to={"/login"}
            >
              Fazer login
            </Link>
            <Link
              className="text-style-text-body-1-600 menulink2"
              to={"/register"}
            >
              Cadastro
            </Link>
          </StyledMenu>
          <img
            className="menu"
            src={burguerMenu}
            alt=""
            onClick={() => setBurguer(!burguer)}
          />
          {burguer ? (
            <div className="burguerSelected">
              <Link
                className="text-style-text-body-1-600 menulink1"
                to={"/login"}
              >
                Fazer login
              </Link>
              <Link
                className="text-style-text-body-1-600 menulink2"
                to={"/register"}
              >
                Cadastro
              </Link>
            </div>
          ) : null}
        </StyledHeader>
      </>
    );
  }
};
