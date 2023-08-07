import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setContinentFilter,
  setSortOrder,
  setPopulationFilter,
} from "../../redux/actions";

const FilterBar = () => {
  const dispatch = useDispatch();

  const [activityFilter, setActivityFilter] = useState("");

  const handleFilterChange = (event) => {
    const selectedActivity = event.target.value;
    setActivityFilter(selectedActivity); // Actualizar el estado local del filtro de ordenamiento
    dispatch(setActivityFilter(selectedActivity));
    console.log("Selected activity:", selectedActivity); // Actualizar el estado de Redux del filtro de ordenamiento
  };

  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    dispatch(setSortOrder(selectedOrder));
  };

  const handleFilterPopulation = (event) => {
    const populationCountry = event.target.value;
    dispatch(setPopulationFilter(populationCountry));
  };

  const handleFilterChangeContinent = (event) => {
    const selectedContinent = event.target.value;
    dispatch(setContinentFilter(selectedContinent));
  };

  return (
    <div>
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
      <label htmlFor="activityFilter">Filtrar por actividad:</label>
      <select id="activityFilter" onChange={handleFilterChange}>
        <option value="">Todas las actividades</option>
        <option value="very low">1</option>
        <option value="low">2</option>
        <option value="medium">3</option>
        <option value="high">4</option>
        <option value="very high">5</option>
      </select>
      <label htmlFor="sortOrder">Ordenar:</label>
      <select id="sortOrder" onChange={handleSortChange}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <label htmlFor="populationFilter">Filtrar por Poblacion:</label>
      <select id="populationFilter" onChange={handleFilterPopulation}>
        <option value="asc">Menor</option>
        <option value="desc">Mayor</option>
      </select>
    </div>
  );
};

export default FilterBar;
