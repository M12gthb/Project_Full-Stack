import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Inputs";
import { useState } from "react";
import {
  IAnouncement,
  IAnouncementUpdate,
} from "../../../interfaces/interfaces";
import { api } from "../../../services/api";
import { EditAnouncementSchema } from "./validator";

interface ModalEditAnouncementProps {
  toggleModal: () => void;
  id: string;
  setAnouncements: React.Dispatch<React.SetStateAction<IAnouncement[]>>;
  toggleDeleteModal: () => void;
}

export const ModalEditAnouncement = ({
  toggleModal,
  id,
  setAnouncements,
  toggleDeleteModal,
}: ModalEditAnouncementProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnouncementUpdate>({
    resolver: zodResolver(EditAnouncementSchema),
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

    await api.patch(`/anouncements/${id}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const response = await api.get(`anouncements/user/${userid}`);

    setAnouncements(response.data);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <h1>Editar anuncio</h1>
      <button onClick={() => toggleModal()}>X</button>
      <p>informações do veículo</p>

      <form onSubmit={handleSubmit(handleEdit)}>
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
          <label>Ano</label>
          <input
            type="number"
            id="year"
            placeholder="2018"
            {...register("year", { valueAsNumber: true })}
          />
          {errors.year ? <p>{errors.year.message}</p> : null}

          <label>Combustível</label>
          <input
            type="text"
            id="fuel"
            placeholder="Gasolina/Etanol"
            {...register("fuel")}
          />
          {errors.fuel ? <p>{errors.fuel.message}</p> : null}
        </div>

        <div className="addContainer">
          <label>Quilometragem</label>
          <input
            type="number"
            id="mileage"
            placeholder="30000"
            {...register("mileage", { valueAsNumber: true })}
          />
          {errors.mileage ? <p>{errors.mileage.message}</p> : null}

          <label>Cor</label>
          <input
            type="text"
            id="color"
            placeholder="Branco"
            {...register("color")}
          />
          {errors.color ? <p>{errors.color.message}</p> : null}
        </div>

        <div className="addContainer">
          <label>Preço tabela FIPE</label>
          <input
            type="number"
            id="priceTabel"
            placeholder="48000"
            {...register("priceTabel", { valueAsNumber: true })}
          />
          {errors.priceTabel ? <p>{errors.priceTabel.message}</p> : null}

          <label>Preço</label>
          <input
            type="number"
            id="price"
            placeholder="50000"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price ? <p>{errors.price.message}</p> : null}
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
          <button
            type="button"
            onClick={() => handleTypeSelection(true)}
            value="true"
            style={{
              backgroundColor: selectedType === true ? "lightblue" : "white",
            }}
          >
            Sim
          </button>
          <button
            type="button"
            onClick={() => handleTypeSelection(false)}
            value="false"
            style={{
              backgroundColor: selectedType === false ? "lightblue" : "white",
            }}
          >
            Não
          </button>
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
          <div key={index} className="addContainer">
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

        <button type="button" onClick={handleAddImageInput}>
          Adicionar campo para imagem da galeria
        </button>

        <button type="submit">Salvar alterações</button>
      </form>
      <button onClick={() => toggleDeleteModal()}>Excluir anúncio</button>
    </Modal>
  );
};
