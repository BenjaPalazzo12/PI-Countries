import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../Nav/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import FilterBar from "../Filter/Filter";
import styles from "./Home.module.css";
// import { setActivityFilter, setSortOrder, } from "../../redux/actions";

const Home = ({ paises }) => {
  const [pagina, setPagina] = useState(1);
  const porPag = 10;
  const [busqueda, setBusqueda] = useState("");

  const continentFilter = useSelector((state) => state.continentFilter);
  const activityFilter = useSelector((state) => state.activityFilter);
  const sortOrder = useSelector((state) => state.sortOrder);
  const populationFilter = useSelector((state) => state.populationFilter); // Nuevo estado para el filtro de popularidad

  // Función auxiliar para aplicar los filtros al array de países
  const applyFilters = (paises) => {
    return paises
      .filter(
        (pais) =>
          pais.name.toLowerCase().includes(busqueda.toLowerCase()) &&
          (continentFilter === "" || pais.continents === continentFilter) &&
          (activityFilter === "" || pais.activity === activityFilter)
      )
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      })
      .sort((a, b) => {
        if (populationFilter === "asc") {
          return a.population - b.population;
        } else {
          return b.population - a.population;
        }
      });
  };

  const paisesFiltrados = applyFilters(paises);

  const maximo = Math.ceil(paisesFiltrados.length / porPag);

  const paisesPorPag = paisesFiltrados.slice(
    (pagina - 1) * porPag,
    pagina * porPag
  );

  const handleNextPage = () => {
    const totalPaginas = Math.ceil(paisesFiltrados.length / porPag);
    if (pagina < totalPaginas) {
      setPagina((prevPagina) => prevPagina + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pagina > 1) {
      setPagina((prevPagina) => prevPagina - 1);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <FilterBar />
      <Link to="/form">
        <button>Crear Actividad</button>
      </Link>
      <div className={styles.containerCards}>
        <Cards paises={paisesPorPag} />
      </div>
      <div className={styles.containerPage}>
        <div className={styles.pageNavigation}>
          <button
            onClick={handlePreviousPage}
            disabled={pagina === 1}
            className={styles.buttonHome}
          >
            Anterior
          </button>
          <p>
            Página {pagina} de {maximo}
          </p>
          <button
            onClick={handleNextPage}
            disabled={pagina === maximo}
            className={styles.buttonHome}
          >
            Siguiente
          </button>
        </div>
        {paisesPorPag.map((pais) => (
          <div key={pais.id}>{/* Mostrar detalles del país */}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
