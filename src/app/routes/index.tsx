import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import { DashBoard } from "../pages/dashboard/DashBoard";
import { Paging } from "../pages/pagina-inicial/PaginaInicial";

export const AppRotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/paging-initial" element={<Paging/>} />
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="*" element={<Navigate to={"paging-initial"}/>}  />
      </Routes>
    </BrowserRouter>
  );
};
