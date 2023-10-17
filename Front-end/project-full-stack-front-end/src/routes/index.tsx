import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Register } from "../pages/Register";
import { Anouncement } from "../pages/Anouncement";
import { Buyer } from "../pages/Buyer";
import { Advertiser } from "../pages/Advertiser";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/Anouncement" element={<Anouncement />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/Advertiser" element={<Advertiser />} />
      </Route>
    </Routes>
  );
};
