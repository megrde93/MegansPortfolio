import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import PastWork from "./components/PastWork";

const App = () => {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">This is the home page </h1>
        <Link to="/"> Home</Link>
        <Link to="/PastWork"> See My Work</Link>
        <Link to="/AboutMe"> About Me</Link>
      </header>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="PastWork" element={<PastWork />} />
        <Route path="AboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  );
};

export default App;
