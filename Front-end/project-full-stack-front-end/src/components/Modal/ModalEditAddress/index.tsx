import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { EditAddressData, EditAddressSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs";
import { api } from "../../../services/api";
import { StyledForm, Styledh1, Styledh2 } from "./styles";

interface ModalEditAddressProps {
  toggleModal: () => void;
}

export const ModalEditAddress = ({ toggleModal }: ModalEditAddressProps) => {
  const handleEdit = async (data: any) => {
    const userId = localStorage.getItem("motors:UserId");
    const token = localStorage.getItem("motors:token");
    const newData = { address: data };
    await api.patch(`/users/${userId}`, newData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    toggleModal();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditAddressData>({
    resolver: zodResolver(EditAddressSchema),
  });
  return (
    <Modal toggleModal={toggleModal}>
      <Styledh1>Editar endereço</Styledh1>
      <span onClick={() => toggleModal()}>X</span>
      <Styledh2>informações de endereço</Styledh2>

      <StyledForm onSubmit={handleSubmit(handleEdit)}>
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
              type="number"
              id="number"
              placeholder="Digitar Número"
              {...register("number", { valueAsNumber: true })}
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

        <div className="buttonsContainer">
          <button className="cancelButton" onClick={() => toggleModal()}>
            Cancelar
          </button>
          <button className="submitButton" type="submit">
            Salvar alterações
          </button>
        </div>
      </StyledForm>
    </Modal>
  );
};
