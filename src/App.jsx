import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar"
import { Outlet } from "react-router-dom";
import { EditarPost } from "./components/EditarPost";
import Footer from "./components/layout/Footer";

function App() {

  return (
    <div className='App'>
      <Navbar />
     
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;



/* RASCUNHO (estava nesse return /\)
<Tarefas />
<EditarPost />

*/
