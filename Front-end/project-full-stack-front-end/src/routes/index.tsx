import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Register } from "../pages/Register";
import { Product } from "../pages/Product";
import { Buyer } from "../pages/Buyer";
import { Advertiser } from "../pages/Advertiser";
import { NotFound } from "../pages/NotFound";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/Product" element={<Product />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/Advertiser" element={<Advertiser />} />
      </Route>
    </Routes>
  );
};
