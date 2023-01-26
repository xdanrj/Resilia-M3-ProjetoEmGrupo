import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import Home from "./routes/home";
import Cartaz from "./routes/cartaz";
import Editar from "./routes/editar";

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
        path: "cartaz",
        element: <Cartaz />
      },
      {
        path: "editar",
        element: <Editar />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
