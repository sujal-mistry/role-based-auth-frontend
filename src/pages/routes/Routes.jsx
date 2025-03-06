import { Routes, Route } from "react-router-dom";
import RoleBasedGuard from "./RoleBasedGuard";
import RegisterPage from "../Register/RegisterPage";
import AdminRegisterPage from "../AdminRegister/AdminRegisterPage";
import AdminLogin from "../AdminLogin/AdminLogin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/admin" element={<AdminRegisterPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="*" element={<RoleBasedGuard />} />
    </Routes>
  );
};

export default Routers;
