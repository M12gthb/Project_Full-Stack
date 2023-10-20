import { Footer } from "../../components/Footer";
import { RegisterForm } from "../../components/Forms/RegisterForm";

export const Register = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <h1>Cadastro</h1>
        <p>informações pessoais</p>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};
