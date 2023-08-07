import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ id, flags, name, continents, population }) {
  return (
    <div className={styles.contenedorCard}>
      {/* <select>
        <option value=""></option>
      </select> */}

      <div className={styles.imageContainer}>
        <Link to={`/detail/${id}`}>
          <img src={flags} alt={name} />
        </Link>
      </div>
      <p>Nombre:{name}</p>
      <p>Continente:{continents}</p>
      <p>Poblacion:{population}</p>
    </div>
  );
}
