import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs";
import { useState } from "react";
import {
  IAnouncement,
  IAnouncementCreate,
} from "../../../interfaces/interfaces";
import { api } from "../../../services/api";
import { CreateAnouncementSchema } from "./validator";
import { StyledForm, Styledh1, Styledh2 } from "./styles";

interface ModalCreateAnouncementProps {
  toggleModal: () => void;
  toggleSucessModal: () => void;
  setAnouncements: React.Dispatch<React.SetStateAction<IAnouncement[]>>;
}

export const ModalCreateAnouncement = ({
  toggleModal,
  setAnouncements,
  toggleSucessModal,
}: ModalCreateAnouncementProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnouncementCreate>({
    resolver: zodResolver(CreateAnouncementSchema),
  });
  const [selectedType, setSelectedType] = useState(false);
  const [imageUrls, setImageUrls] = useState([""]);

  const handleTypeSelection = (type: boolean) => {
    setSelectedType(type);
  };

  const handleAddImageInput = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const handleEdit = async (data: any) => {
    const userid = localStorage.getItem("motors:UserId");
    const token = localStorage.getItem("motors:token");

    const imagesData = imageUrls.map((image_url) => ({
      image_url,
    }));

    data.images = imagesData;
    data.publish = selectedType;

    await api.post(`/anouncements`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const response = await api.get(`anouncements/user/${userid}`);

    setAnouncements(response.data);

    toggleModal();
    toggleSucessModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <Styledh1>Crie seu anuncio</Styledh1>
      <span onClick={() => toggleModal()}>X</span>
      <Styledh2>informações do veículo</Styledh2>

      <StyledForm onSubmit={handleSubmit(handleEdit)}>
        <Input
          type="text"
          id="brand"
          label="Marca"
          placeholder="Chevrolet"
          error={errors.brand?.message}
          register={register}
        />
        <Input
          type="text"
          id="model"
          label="Modelo"
          placeholder="camaro ss 6.2 v8 16v"
          error={errors.model?.message}
          register={register}
        />

        <div className="addContainer">
          <div>
            <label>Ano</label>
            <input
              type="number"
              id="year"
              placeholder="2018"
              {...register("year", { valueAsNumber: true })}
            />
            {errors.year ? <p>{errors.year.message}</p> : null}
          </div>

          <div>
            <label>Combustível</label>
            <input
              type="text"
              id="fuel"
              placeholder="Gasolina/Etanol"
              {...register("fuel")}
            />
            {errors.fuel ? <p>{errors.fuel.message}</p> : null}
          </div>
        </div>

        <div className="addContainer">
          <div>
            <label>Quilometragem</label>
            <input
              type="number"
              id="mileage"
              placeholder="30000"
              {...register("mileage", { valueAsNumber: true })}
            />
            {errors.mileage ? <p>{errors.mileage.message}</p> : null}
          </div>

          <div>
            <label>Cor</label>
            <input
              type="text"
              id="color"
              placeholder="Branco"
              {...register("color")}
            />
            {errors.color ? <p>{errors.color.message}</p> : null}
          </div>
        </div>

        <div className="addContainer">
          <div>
            <label>Preço tabela FIPE</label>
            <input
              type="number"
              id="priceTabel"
              placeholder="48000"
              {...register("priceTabel", { valueAsNumber: true })}
            />
            {errors.priceTabel ? <p>{errors.priceTabel.message}</p> : null}
          </div>

          <div>
            <label>Preço</label>
            <input
              type="number"
              id="price"
              placeholder="50000"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price ? <p>{errors.price.message}</p> : null}
          </div>
        </div>

        <Input
          type="text"
          id="description"
          label="Descrição"
          placeholder="Descrição"
          error={errors.description?.message}
          register={register}
        />

        <div className="buttonsContainer">
          <h1>Publicado</h1>
          <div>
            <button
              type="button"
              onClick={() => handleTypeSelection(true)}
              value="true"
              style={{
                backgroundColor:
                  selectedType === true ? "rgba(69,41,230,1)" : "white",
                border:
                  selectedType === false
                    ? "2px solid rgba(173, 181, 189, 1)"
                    : "none",
                color: selectedType === true ? "white" : "black",
              }}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => handleTypeSelection(false)}
              value="false"
              style={{
                backgroundColor:
                  selectedType === false ? "rgba(69,41,230,1)" : "white",
                border:
                  selectedType === false
                    ? "none"
                    : "2px solid rgba(173, 181, 189, 1)",
                color: selectedType === false ? "white" : "black",
              }}
            >
              Não
            </button>
          </div>
        </div>

        <Input
          type="text"
          id="cover_img"
          label="Imagem de capa"
          placeholder="url"
          error={errors.cover_img?.message}
          register={register}
        />

        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="addContainerImage">
            <label>Imagem {index + 1}</label>
            <input
              type="text"
              placeholder="URL da imagem"
              value={imageUrl}
              onChange={(e) => {
                const updatedImageUrls = [...imageUrls];
                updatedImageUrls[index] = e.target.value;
                setImageUrls(updatedImageUrls);
              }}
            />
          </div>
        ))}

        <button
          className="addButton"
          type="button"
          onClick={handleAddImageInput}
        >
          Adicionar campo para imagem da galeria
        </button>

        <div className="buttonsContainer2">
          <button className="deletedButton" onClick={() => toggleModal()}>
            Cancelar
          </button>
          <button className="submitButton" type="submit">
            Criar Anuncio
          </button>
        </div>
      </StyledForm>
    </Modal>
  );
};
