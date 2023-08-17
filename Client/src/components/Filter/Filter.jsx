import React from "react";
import { useDispatch } from "react-redux";
import {
  setContientFilter,
  setPoblacionFilter,
  setOrderByName,
} from "../../redux/actions";
import styles from "./Filter.module.css";
import { Link } from "react-router-dom";

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleFilterPopulation = (event) => {
    const populationCountry = event.target.value;
    console.log(event.target.value);
    console.log(setPoblacionFilter);
    console.log("Selected sortOrder:", populationCountry);
    dispatch(setPoblacionFilter(populationCountry));
  };

  const handleFilterChangeContinent = (event) => {
    const selectedContinent = event.target.value;
    dispatch(setContientFilter(selectedContinent));
  };

  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    if (selectedOrder === "") {
      dispatch(setOrderByName(null)); // Usar null para indicar que no se aplique orden
    } else {
      dispatch(setOrderByName(selectedOrder));
    }
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterContainer}>
        <label htmlFor="continentFilter">Filtrar por continente:</label>
        <select id="continentFilter" onChange={handleFilterChangeContinent}>
          <option value="">Todos los continentes</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Africa">África</option>
          <option value="North America">América del Norte</option>
          <option value="South America">América del Sur</option>
          <option value="Oceania">Oceanía</option>
          <option value="Antarctica">Antártida</option>
        </select>
      </div>
      <Link to="/form" className={styles.buttonActivity}>
        Crear Actividad
      </Link>
      <div className={styles.filterContainer}>
        <label htmlFor="populationFilter">Filtrar por Poblacion:</label>
        <select id="populationFilter" onChange={handleFilterPopulation}>
          <option value="asc">Menor</option>
          <option value="desc">Mayor</option>
        </select>
      </div>
      <Link to="/activities" className={styles.buttonActivity}>
        Ver Actividades
      </Link>
      <div className={styles.filterContainer}>
        <label htmlFor="Alphabetical">Ordenar por nombre:</label>
        <select id="Alphabetical" onChange={handleSortChange}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="">No ordenar</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
