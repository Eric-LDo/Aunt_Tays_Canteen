import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CadPage from './routes/cadpage/cadpage.tsx'
import MenuPage from './routes/menupage/manuPage.tsx'
import PageHome from './routes/pagehome/pagehome.tsx'
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
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
