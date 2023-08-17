import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import Home from "./components/HomePage/Home";
import { useEffect, useState, useCallback } from "react";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Delete from "./components/Delete/Delete";
import styles from "./App.css";
import HomeAc from "./components/HomeAc/HomeAc";
import ErrorPage from "./components/ErrorPage/errorPage";
import Update from "./components/Update/Upadte.jsx";


const App = () => {
  const [paises, setPaises] = useState([]);

  const obPaises = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3001/countries");
      if (!response.ok) {
        throw new Error("Error al obtener los países");
      }
      const data = await response.json();
      setPaises(data);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    obPaises();
  }, [obPaises]);


  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home paises={paises} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:activityId" element={<Update />} />
        <Route path="/form" element={<Form />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/activities" element={<HomeAc />} />\
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
