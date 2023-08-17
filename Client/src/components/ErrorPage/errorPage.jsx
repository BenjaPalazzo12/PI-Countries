import React from "react";
import style from "./errorPage.module.css";
import { Link } from "react-router-dom";
import styles from "../HomePage/Home.module.css";

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={style.fondoError}>
        <div className={style.errorTexto}>RUTA NO EXISTENTE</div>
        <Link to="/home">
          <div className={styles.pageNavigation}>
            <button className={styles.buttonHome}>Volver al Inicio</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default ErrorPage;
