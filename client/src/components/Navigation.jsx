import React, { useState } from "react";
import WelcomPage from "../pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navigations = ({ theme, toggleTheme }) => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomPage theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
};

export default Navigations;