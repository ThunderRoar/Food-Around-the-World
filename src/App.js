import "./App.css";

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Explore from './Explore/Explore';
import Recipe from './Recipe/Recipe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/global-grub" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="recipe" element={<Recipe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
