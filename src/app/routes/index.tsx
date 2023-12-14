import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/dashboard/DashBoard";
import { PagingInitial } from "../pages/pagina-inicial/PaginaInicial";
import { Login } from "../pages/login/Login";

export const AppRotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/paging-initial" element={<PagingInitial/>} />
        <Route path="/dashboard" element={<DashBoard/>}/>


        <Route path="*" element={<Navigate to={"paging-initial"}/>}  />
      </Routes>
    </BrowserRouter>
  );
};
