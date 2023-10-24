import { Footer } from "../../components/Footer";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Header } from "../../components/Header";

export const Register = () => {
  return (
    <>
      <Header user={undefined} />
      <main>
        <h1>Cadastro</h1>
        <p>informações pessoais</p>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};
