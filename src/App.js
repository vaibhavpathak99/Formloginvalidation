
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Form from './Form'
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Login />}>
        </Route>
        <Route path="homees" element={<Home />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
