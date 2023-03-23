
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="home"
          element={
            localStorage.getItem("logged") == "true" ? (
              <Home />
            ) : (
              <Navigate replace to={"/"} />
            )
          } />

        <Route path="*" element={<Login />}>
        </Route>
        <Route path="home" element={<Home />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
