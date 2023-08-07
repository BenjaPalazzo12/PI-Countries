import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.Landing}>
      <h1>Bienvenido a mi SPA de Paises</h1>
      <Link to="/home">
        <button className={styles.buttonLanding}>Ingresar</button>
      </Link>
    </div>
  );
}
