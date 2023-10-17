import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const ProtectedRoutes = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("motors:token");
    if (!token) {
      setLoading(false);
      navigate("/");
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return <Outlet />;
};
