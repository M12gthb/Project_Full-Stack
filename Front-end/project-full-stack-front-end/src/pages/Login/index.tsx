import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Footer } from "../../components/Footer";

export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("motors:token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <main>
        <LoginForm />
        <p>Ainda não possui conta?</p>
        <Link to={"/Register"}>Cadastrar</Link>
      </main>
      <Footer />
    </>
  );
};
