import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./components/Login/Login";

import { auth } from "./firebase";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
