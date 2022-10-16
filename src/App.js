import "./App.css";

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Explore from './Explore/Explore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
