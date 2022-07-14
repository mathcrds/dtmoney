import { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginContext } from "../hooks/useLogin";
import { DashBoardPage } from "../pages/DashBoardPage";
import { Login } from "../pages/Login";

export const AppRoutes = () => {
  const { login, setLogin } = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        {login && <Route path="/transactions" element={<DashBoardPage />} />}
      </Routes>
    </BrowserRouter>
  );
};
