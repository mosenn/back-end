import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import CreatePost from "./pages/createPost/CreatePost";
import Panel from "./pages/Panel/Panel";
import Detail from "./pages/detail/Detail";
import Editpost from "./pages/editpost/Editpost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/editpost/:id" element={<Editpost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
