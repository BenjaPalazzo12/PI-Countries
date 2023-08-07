import React, { useState } from "react";
import axios from "axios";

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
      alert(error.message);
    }
  };

  return (
    <div>
      <label htmlFor="Activity">Eliminar actividad: </label>
      <input
        onChange={handleChange}
        name="Activity"
        type="text"
        value={Activity}
      />
      <button onClick={deleteActivity}>Eliminar</button>
    </div>
  );
};

export default Delete;
