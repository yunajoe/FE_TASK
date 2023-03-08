import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Detail from "./Pages/Detail";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
