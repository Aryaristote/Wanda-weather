import React, { useState } from "react";
import WelcomPage from "../pages/Welcome";
import Comparisons from "../pages/Comparisons"
import Login from "../pages/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navigations = ({ theme, toggleTheme }) => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/comparisons" element={<Comparisons theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
};

export default Navigations;