import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ paises }) => {
  // Comentamos esta línea para evitar un error en la consola
  // console.log(paises.id);
  return (
    <div className={styles.contenedorCards}>
      {paises.map(({ id, flags, name, continents, population }) => (
        <Card key= { id } id= { id } flags= { flags } name= { name } continents= { continents } population= { population } />
      ))}
    </div>
  );
};

export default Cards;
