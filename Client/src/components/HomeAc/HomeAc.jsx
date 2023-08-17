import React, { useEffect, useState } from "react";
import axios from "axios";
import CardAc from "../CardAc/CardAc";
import styles from "./HomeAc.module.css";
import { Link } from "react-router-dom";

const HomeAc = () => {
  const [activities, setActivities] = useState([]);

  const getActivities = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/activities");
      if (data) {
        setActivities(data);
      }
    } catch (error) {
      alert("No hay actividades, crear una!");
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div className={styles.formPageContainer}>
      <Link to="/home">
        <button className={styles.btnVolver}>Volver</button>
      </Link>
      <div className={styles.contenedorCards}>
        {activities.map((activity) => (
          <div key={activity.id}>
            <CardAc
              name={activity.name}
              country={activity.country}
              duration={activity.duration}
              dificulty={activity.dificulty}
              seasson={activity.seasson}
              image={activity.image}
            />

            <Link to={`/update/${activity.id}`}>
              <button className={styles.buttonHome}>
                Actualizar Actividad
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAc;
