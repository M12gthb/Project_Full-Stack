import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import { LoginData, loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs";

export const LoginForm = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <h1>Login</h1>
      <Input
        type="email"
        id="email"
        label="Email"
        placeholder="Digite aqui seu email"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        id="password"
        label="Senha"
        placeholder="Digite aqui seu email"
        error={errors.password?.message}
        {...register("password")}
      />

      <button type="submit">Entrar</button>
    </form>
  );
};
