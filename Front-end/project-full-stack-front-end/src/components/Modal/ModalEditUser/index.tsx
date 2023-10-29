import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditUserData, EditUserSchema } from "./validator";
import Input from "../../Inputs";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface ModalEditUserProps {
  toggleModal: () => void;
}

export const ModalEditUser = ({ toggleModal }: ModalEditUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserData>({
    resolver: zodResolver(EditUserSchema),
  });

  const refreshPage = () => {
    location.reload();
  };

  const handleEdit = async (data: any) => {
    const userId = localStorage.getItem("motors:UserId");
    const token = localStorage.getItem("motors:token");
    await api.patch(`/users/${userId}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    toggleModal();
    refreshPage();
  };

  const navigate = useNavigate();

  const deleteUser = async () => {
    const userId = localStorage.getItem("motors:UserId");
    const token = localStorage.getItem("motors:token");
    await api.delete(`/users/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("motors:token");
    localStorage.removeItem("motors:UserId");
    localStorage.removeItem("motors:IDProduct");
    localStorage.removeItem("motors:Type");
    toggleModal();
    navigate("/");
  };

  const [selectedType, setSelectedType] = useState("comprador");

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
  };
  return (
    <Modal toggleModal={toggleModal}>
      <h1>Editar perfil</h1>
      <span onClick={() => toggleModal()}>X</span>
      <p>informações pesoais</p>
      <form onSubmit={handleSubmit(handleEdit)}>
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Ex: Samuel Leão"
          error={errors.name?.message}
          register={register}
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br"
          error={errors.email?.message}
          register={register}
        />
        <Input
          type="text"
          id="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          error={errors.cpf?.message}
          register={register}
        />
        <Input
          type="text"
          id="cell"
          label="Celular"
          placeholder="(DDD) 90000-0000"
          error={errors.cell?.message}
          register={register}
        />
        <Input
          type="text"
          id="birthdate"
          label="Data de nascimento"
          placeholder="00/00/00"
          error={errors.birthdate?.message}
          register={register}
        />
        <div className="descriptionConteiner">
          <label id="description">Descrição</label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="Digitar descrição"
          />
          {errors.description ? <p>{errors.description.message}</p> : null}
        </div>

        <div>
          <button
            type="button"
            onClick={() => handleTypeSelection("comprador")}
            value="comprador"
            style={{
              backgroundColor:
                selectedType === "comprador" ? "lightblue" : "white",
            }}
          >
            Comprador
          </button>
          <button
            type="button"
            onClick={() => handleTypeSelection("anunciante")}
            value="anunciante"
            style={{
              backgroundColor:
                selectedType === "anunciante" ? "lightblue" : "white",
            }}
          >
            Anunciante
          </button>
        </div>
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="Digitar senha"
          error={errors.password?.message}
          register={register}
        />
        <Input
          type="password"
          id="confirm"
          label="Confirmar Senha"
          placeholder="Digitar senha"
          error={errors.confirm?.message}
          register={register}
        />
        <button type="submit">Salvar aterações</button>
      </form>
      <button onClick={() => toggleModal}>cancelar</button>
      <button onClick={() => deleteUser()}>Excluir Perfil</button>
    </Modal>
  );
};
