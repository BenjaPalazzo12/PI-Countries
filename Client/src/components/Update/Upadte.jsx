import React, { useState, useEffect } from "react";
import styles from "./Update.module.css";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const { activityId } = useParams();
  const [activityData, setActivityData] = useState({
    name: "",
    duration: "",
    difficulty: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      event.preventDefault();

      console.log(JSON.stringify(activityData));
      // Realizamos una petición al backend:
      const response = await fetch(
        `http://localhost:3001/activities/${activityId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(activityData),
        }
      );
      // Extraemos los datos de la respuesta en json.
      const responseData = await response.json();

      // Verificamos el estado de la respuesta y mostramos el mensaje.
      if (response.status === 200) {
        alert(responseData.message);
      } else if (response.status === 500) {
        alert(responseData.message);
      }
    } catch (error) {
      // Si hubo algun error lo informamos.
      alert("Algo salió mal!!!");
      console.log(error);
    }
  };

  useEffect(() => {
  }, [activityId]);
  console.log("esta es la actividad", activityId);
  return (
    <div className={styles.formPageContainer}>
      <div className={styles.formContainer}>
        <h2>Actualizando la actividad de nombre: {activityId}</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={activityData.name}
            onChange={handleChange}
          />

          <label>Dificultad:</label>
          <input
            className={styles.input}
            type="text"
            name="difficulty"
            value={activityData.difficulty}
            onChange={handleChange}
          />

          <label>Duracion:</label>
          <input
            className={styles.input}
            name="duration"
            value={activityData.duration}
            onChange={handleChange}
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.buttonDetail}>
              Actualizar
            </button>
            <Link to={"/home"}>
              <button type="submit" className={styles.buttonDetail}>
                Volver
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
