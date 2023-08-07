// Detail.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();

  const [paisDetail, setPaisDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener el país");
        }
        return response.json();
      })
      .then((data) => {
        if (data.name) {
          setPaisDetail(data);
        } else {
          window.alert("No hay país con ese ID");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.contenedorInfo}>
        <Link to={"/home"}>
          <button className={styles.btnDetail}>Volver</button>
        </Link>
        <img src={paisDetail.flags} alt={paisDetail.name} />

        <p className={styles.detailText}>
          <span className={styles.detailSpan}>Nombre:</span> {paisDetail.name}
        </p>
        <p className={styles.detailText}>
          <span className={styles.detailSpan}>Continente:</span>{" "}
          {paisDetail.continents}
        </p>
        <p className={styles.detailText}>
          <span className={styles.detailSpan}>Capital:</span>{" "}
          {paisDetail.capital}
        </p>
        <p className={styles.detailText}>
          <span className={styles.detailSpan}>Área:</span> {paisDetail?.area}
        </p>
        <p className={styles.detailText}>
          <span className={styles.detailSpan}>Poblacion:</span>{" "}
          {paisDetail.population}
        </p>
        <h2 className={styles.detailTitle}>{paisDetail.id}</h2>
      </div>
    </div>
  );
}
