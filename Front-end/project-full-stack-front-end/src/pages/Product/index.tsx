import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const Product = () => {
  const navigate = useNavigate();
  const getProduct = async (id: string) => {
    const response = await api.get(`/anouncements/${id}`);
    console.log(response.data);
  };
  useEffect(() => {
    const id = localStorage.getItem("motors:IDProduct");
    if (id) {
      getProduct(id);
    } else {
      navigate("/");
    }
  });
  return (
    <>
      <div>Anuncio</div>
    </>
  );
};
