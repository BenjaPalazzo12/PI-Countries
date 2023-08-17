import React from "react";
import style from "./CardsAc.module.css";

const CardAc = ({ name, duration, dificulty, seasson }) => {
  console.log(dificulty);
  return (
    <div className={style.contenedorCard}>
      <div className={style.imageContainer}></div>
      <p><span>Nombre:</span> {name}</p>
      <p><span>Duracion:</span> {duration}</p>
      <p><span>Dificultad:</span> {dificulty}</p>
      <p><span>Temporada:</span> {seasson}</p>
    </div>
  );
};

export default CardAc;
