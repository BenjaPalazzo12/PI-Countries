import React, { useState } from "react";
import axios from "axios";
import styles from "./Delete.module.css";
import { Link } from "react-router-dom";

const Delete = () => {
  const [Activity, setActivity] = useState("");

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  const deleteActivity = async () => {
    try {
      console.log(Activity);
      if (Activity === "") {
        alert("No escribiste la actividad a eliminar");
        return;
      }
      const { data } = await axios.delete(
        `http://localhost:3001/activities/${Activity}`
      );
      alert(data.message);
    } catch (error) {
      alert("Esta actividad no existe en la base de datos!");
    }
  };

  return (
    <div className={styles.DeleteContainer}>
      <label htmlFor="Activity">Eliminar actividad: </label>
      <input
        onChange={handleChange}
        name="Activity"
        type="text"
        value={Activity}
      />
      <button onClick={deleteActivity}>Eliminar</button>
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default Delete;
