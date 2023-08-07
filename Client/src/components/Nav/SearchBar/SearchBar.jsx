// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ busqueda, setBusqueda }) {
  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        type="search"
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  );
}
