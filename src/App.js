import React, { useMemo } from 'react';
import { Route, Routes, Navigate, useNavigate, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import { useState } from 'react';
import AppLayout from './AppLayout/AppLayout';
import { AiFillHome } from "react-icons/ai";
import { PoweroffOutlined, ToolOutlined } from '@ant-design/icons';
import Resource from './Resource'
import Services from './Services';


function App() {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "resource",

      label: (
        <Link to={`/home/resource`}>
          Resource
        </Link>

      ),
      icon: <AiFillHome />,
    },

    {
      key: "services",
      label: (
        <Link to={`/home/services`}>
          Services
        </Link>
      ),
      icon: <ToolOutlined />,

    },
    {
      key: "logout",
      label: (
        <Link to={`logout`}>
          Logout
        </Link>
           
      ),
      
     icon: <PoweroffOutlined />
    },
  ]
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="home"
          element={
            localStorage.getItem("logged") == "true" ? (
              <AppLayout menuItems={menuItems} />
            ) : (
              <Navigate replace to={"/"} />
            )
          } />
           <Route
          exact
          path="/home/logout"
          element={
            localStorage.getItem("logout") == "true" ? (
              <AppLayout menuItems={menuItems} />
            ) : (
              <Navigate replace to={"/"} />
            )
          } />

        <Route path="/" element={<Login />}>
        </Route>
        <Route path="home" element={<AppLayout menuItems={menuItems} />}>
          <Route path="resource" element={<Resource />}></Route>
          <Route path="services" element={<Services />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
