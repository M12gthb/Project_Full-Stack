import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import { LoginData, loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs";
import { Styledh1 } from "../../../pages/Register/styles";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  console.error(errors);

  const linkStyle = {
    textDecoration: "underline",
    border: "none",
    height: "10px",
    fontSize: "14px",
    width: "100%",
    marginBottom: "10px",
    justifyContent: "flex-start",
    padding: "2px",
  };

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <Styledh1>Login</Styledh1>
      <Input
        type="email"
        id="email"
        label="Email"
        placeholder="Digite aqui seu email"
        error={errors.email?.message}
        register={register}
      />
      <Input
        type="password"
        id="password"
        label="Senha"
        placeholder="Digite aqui sua senha"
        error={errors.password?.message}
        register={register}
      />
      <Link style={linkStyle} to={"/ResetPassword"}>
        Esqueceu a senha?
      </Link>
      <button type="submit">Entrar</button>
    </form>
  );
};
