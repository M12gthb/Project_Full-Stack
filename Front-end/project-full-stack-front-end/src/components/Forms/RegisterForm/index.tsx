import { useForm } from "react-hook-form";
import { RegisterData, RegisterSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs";
import { useContext, useState } from "react";
import { RegisterContext } from "../../../providers/RegisterProvider";

export const RegisterForm = () => {
  const { singUp } = useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const [selectedType, setSelectedType] = useState("comprador");

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) =>
          singUp({ ...data, type: selectedType })
        )}
      >
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Ex: Samuel Leão"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="text"
          id="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          error={errors.cpf?.message}
          {...register("cpf")}
        />
        <Input
          type="text"
          id="cell"
          label="Celular"
          placeholder="(DDD) 90000-0000"
          error={errors.cell?.message}
          {...register("cell")}
        />
        <Input
          type="text"
          id="birthdate"
          label="Data de nascimento"
          placeholder="00/00/00"
          error={errors.birthdate?.message}
          {...register("birthdate")}
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
        <p>informações de endereço</p>
        <Input
          type="text"
          id="cep"
          label="CEP"
          placeholder="00000.000"
          error={errors.cep?.message}
          {...register("cep")}
        />
        <div className="addContainer">
          <label>Estado</label>
          <input
            type="text"
            id="state"
            placeholder="Digitar Estado"
            {...register("state")}
          />
          {errors.state ? <p>{errors.state.message}</p> : null}
          <label>Cidade</label>
          <input
            type="text"
            id="city"
            placeholder="Digitar Cidade"
            {...register("city")}
          />
          {errors.city ? <p>{errors.city.message}</p> : null}
        </div>
        <Input
          type="text"
          id="street"
          label="Rua"
          placeholder="Ex: Rua Kenzie"
          error={errors.street?.message}
          {...register("street")}
        />
        <div className="addContainer">
          <label id="number">Número</label>
          <input
            type="text"
            id="number"
            placeholder="Digitar Número"
            {...register("number")}
          />
          {errors.number ? <p>{errors.number.message}</p> : null}
          <label id="complement">Complemento</label>
          <input
            type="text"
            id="complement"
            placeholder="Ex: apart 307"
            {...register("complement")}
          />
          {errors.complement ? <p>{errors.complement.message}</p> : null}
        </div>
        <label id="type">Tipo de conta</label>
        <div className="buttonsContainer">
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
          {...register("password")}
        />
        <Input
          type="password"
          id="confirm"
          label="Confirmar Senha"
          placeholder="Digitar senha"
          error={errors.confirm?.message}
          {...register("confirm")}
        />
        <button type="submit">Finalizar cadastro</button>
      </form>
    </>
  );
};
