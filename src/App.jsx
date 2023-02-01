import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";

import  Navbar  from './components/layout/Navbar'
import { EditarPost } from "./components/EditarPost";

function App() {

  return (
    <div className='App'>
      <Navbar />
     
      <Outlet />
    </div>
  );
}

export default App;



/* RASCUNHO (estava nesse return /\)
<Tarefas />
<EditarPost />

*/
