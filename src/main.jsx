import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "./components/EditarPost.module.css";

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import Home from "./routes/home";
import Cartaz from "./routes/cartaz";
import Editar from "./routes/editar";
import Adicionar from "./routes/adicionar";
import Login from "./routes/login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "cartaz",
        element: <Cartaz />
      },
      {
        path: "editar/:id",
        element: <Editar />
      },
      {
        path: "adicionar",
        element: <Adicionar />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
