import React from "react";

//react-router-dom
import { Routes, Route, useLocation } from "react-router-dom";

//framer-motion
import { AnimatePresence } from "framer-motion";

//pages
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
