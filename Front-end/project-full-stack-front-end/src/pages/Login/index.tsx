import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalEditUser } from "../../components/Modal/ModalEditUser";

export const Login = () => {
  const navigate = useNavigate();
  const [modalEditUserOpen, setmodalEditUserOpen] = useState(false);

  const toggleModalEditUser = () => setmodalEditUserOpen(!modalEditUserOpen);
  useEffect(() => {
    const token = localStorage.getItem("motors:token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header user={undefined} />
      {modalEditUserOpen ? (
        <ModalEditUser toggleModal={toggleModalEditUser} />
      ) : null}
      <main>
        <LoginForm />
        <p>Ainda não possui conta?</p>
        <Link to={"/Register"}>Cadastrar</Link>
      </main>
      <Footer />
    </>
  );
};
