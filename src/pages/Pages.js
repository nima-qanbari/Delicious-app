import React from "react";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />}/>
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
