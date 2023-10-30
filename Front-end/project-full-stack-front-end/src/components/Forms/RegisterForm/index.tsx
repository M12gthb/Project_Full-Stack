import { useForm } from "react-hook-form";
import { RegisterData, RegisterSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs";
import { useContext, useState } from "react";
import { RegisterContext } from "../../../providers/RegisterProvider";
import { StyledForm, StyledLabel } from "./styles";
import { Styledh1 } from "../../Modal/ModalEditUser/styles";

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

  const onSubmit = (data: any) => {
    singUp({ ...data, type: selectedType });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        <Styledh1>informações de endereço</Styledh1>
        <Input
          type="text"
          id="cep"
          label="CEP"
          placeholder="00000.000"
          error={errors.cep?.message}
          register={register}
        />
        <div className="addContainer">
          <div>
            <label>Estado</label>
            <input
              type="text"
              id="state"
              placeholder="Digitar Estado"
              {...register("state")}
            />
            {errors.state ? <p>{errors.state.message}</p> : null}
          </div>
          <div>
            <label>Cidade</label>
            <input
              type="text"
              id="city"
              placeholder="Digitar Cidade"
              {...register("city")}
            />
            {errors.city ? <p>{errors.city.message}</p> : null}
          </div>
        </div>
        <Input
          type="text"
          id="street"
          label="Rua"
          placeholder="Ex: Rua Kenzie"
          error={errors.street?.message}
          register={register}
        />
        <div className="addContainer">
          <div>
            <label id="number">Número</label>
            <input
              type="text"
              id="number"
              placeholder="Digitar Número"
              {...register("number")}
            />
            {errors.number ? <p>{errors.number.message}</p> : null}
          </div>
          <div>
            <label id="complement">Complemento</label>
            <input
              type="text"
              id="complement"
              placeholder="Ex: apart 307"
              {...register("complement")}
            />
            {errors.complement ? <p>{errors.complement.message}</p> : null}
          </div>
        </div>
        <StyledLabel id="type">Tipo de conta</StyledLabel>
        <div className="buttonsContainer">
          <div>
            <button
              type="button"
              onClick={() => handleTypeSelection("comprador")}
              value="comprador"
              style={{
                backgroundColor:
                  selectedType === "comprador" ? "rgba(69,41,230,1)" : "white",
                border:
                  selectedType === "anunciante"
                    ? "2px solid rgba(173, 181, 189, 1)"
                    : "none",
                color: selectedType === "comprador" ? "white" : "black",
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
                  selectedType === "anunciante" ? "rgba(69,41,230,1)" : "white",
                border:
                  selectedType === "comprador"
                    ? "2px solid rgba(173, 181, 189, 1)"
                    : "none",
                color: selectedType === "anunciante" ? "white" : "black",
              }}
            >
              Anunciante
            </button>
          </div>
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
        <button className="SubmitButton" type="submit">
          Finalizar cadastro
        </button>
      </StyledForm>
    </>
  );
};
