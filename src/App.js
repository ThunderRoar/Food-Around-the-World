import logo from "./logo.svg";
import "./App.css";

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import TestingPage from './TestingPage/TestingPage';

import Explore from './Explore/Explore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="testingpage" element={<TestingPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
