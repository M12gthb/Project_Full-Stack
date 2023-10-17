import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export const Login = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });
  console.log(errors);
  return (
    <main>
      <form onSubmit={handleSubmit(signIn)}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Entrar</button>
      </form>
      <p>Ainda não possui conta?</p>
      <Link to={"/Register"}>Cadastrar</Link>
    </main>
  );
};
