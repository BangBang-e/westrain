import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Header/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [selected, setSelected] = useState("Home");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout selected={selected} setSelected={setSelected} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About selected={selected} setSelected={setSelected} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
