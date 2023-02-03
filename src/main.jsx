import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "./components/EditarPost.module.css";

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import Home from "./routes/home";
import Catalogo from "./routes/catalogo";
import Editar from "./routes/editar";
import Adicionar from "./routes/adicionar";
import Unidades from "./routes/unidades";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "catalogo",
        element: <Catalogo />
      },
      {
        path: "editar/:id",
        element: <Editar />
      },
      {
        path: "adicionar",
        element: <Adicionar />
      },
      {
        path: "unidades",
        element: <Unidades />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
