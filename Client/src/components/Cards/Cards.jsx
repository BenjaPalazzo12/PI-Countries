import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";

const Cards = ({ paises }) => {

  const orderByName = useSelector((state) => state.ORDER_BY_NAME); // Obtiene el orden actual
  const sortedPaises = [...paises].sort((a, b) => {
    if (orderByName === "asc") {
      return a.name.localeCompare(b.name);
    } else if (orderByName === "desc") {
      return b.name.localeCompare(a.name);
    }
    return 0; // No aplicar ordenamiento
  });

  return (
    <div className={styles.contenedorCards}>
      {sortedPaises.map(({ id, flags, name, continents, population }) => (
        <Card
          key={id}
          id={id}
          flags={flags}
          name={name}
          continents={continents}
          population={population}
        />
      ))}
    </div>
  );
};

export default Cards;
