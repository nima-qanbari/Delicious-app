import React from "react";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./Home";
import Cuisine from "./Cuisine";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
