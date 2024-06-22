import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CadPage from './routes/cadpage/cadpage.tsx'
import MenuPage from './routes/menupage/manuPage.tsx'
import PageHome from './routes/pagehome/pagehome.tsx'
import AlterPage from './routes/alterpage/alterpage.tsx'
import HomeFunc from './routes/homefunc/homefunc.tsx'
import VerPedidos from "./routes/verpedidos/verPedidos.tsx"
import ConfFunc from './routes/conffunc/ConfFunc.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<PageHome/>
  },
  {
    path:"menu",
    element:<MenuPage/>
  },
  {
    path:"cadastro",
    element:<CadPage/>
  },
  {
    path:"alterprofile",
    element:<AlterPage/>
  },
  {
    path:"funcionarios",
    element:<HomeFunc/>
  },
  {
    path:"verpedidos",
    element:<VerPedidos/>
  },
  {
    path:"confFunc",
    element:<ConfFunc/>
  }

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
