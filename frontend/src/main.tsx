import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CadPage from './routes/cadpage/cadpage';
import MenuPage from './routes/menupage/manuPage';
import PageHome from './routes/pagehome/pagehome';
import AlterPage from './routes/alterpage/alterpage';
import HomeFunc from './routes/homefunc/homefunc';
import VerPedidos from "./routes/verpedidos/verPedidos";
import ConfFunc from './routes/conffunc/ConfFunc';
import ConfProd from "./routes/confprod/confProd";
import { UserProvider } from './contexts/UserContext';
import AlterarPerfil from './routes/alterarperfil/AlterarPerfil';
import AlterPerfilFunc from './routes/alterperfilfunc/AlterPerfilFunc';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />
  },
  {
    path: "menu",
    element: <MenuPage />
  },
  {
    path: "cadastro",
    element: <CadPage />
  },
  {
    path: "alterprofile",
    element: <AlterPage />
  },
  {
    path: "funcionarios",
    element: <HomeFunc />
  },
  {
    path: "verpedidos",
    element: <VerPedidos />
  },
  {
    path: "confFunc",
    element: <ConfFunc />
  },
  {
    path: "confProd",
    element: <ConfProd />
  },
  {
    path: "alterarperfil",
    element: <AlterarPerfil />
  },
  {
    path: "alterperfilfunc",
    element: <AlterPerfilFunc />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
