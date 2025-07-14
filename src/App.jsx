import React from "react";
import SingUp from "./component/SingUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";

const App = () => {
  const isGitHub = import.meta.env.VITE_ENV === 'GH_PAGES';


  return (
<BrowserRouter basename={isGitHub ? "/loginsignupform" : "/"}>
      <Routes>
        <Route path="/" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
