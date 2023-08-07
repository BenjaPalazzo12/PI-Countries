import React, { useState, useEffect } from "react";
import axios from "axios";
import Delete from "../Delete/Delete";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    // Hacer la solicitud GET para obtener los países desde tu backend
    axios
      .get("http://localhost:3001/countries")
      .then((response) => {
        setCountries(response.data); // Asignar los países a la variable de estado
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []); // El segundo argumento del useEffect ([]) asegura que solo se realice la solicitud una vez, al cargar el componente.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const selectedOptions = e.target.options;
    const selectedCountries = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].selected) {
        selectedCountries.push(selectedOptions[i].value);
      }
    }
    setSelectedCountries(selectedCountries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const activityData = { ...formData, countries: selectedCountries };
    console.log(activityData); // Puedes ver los datos en la consola antes de enviarlos al servidor
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Dificultad:
        <input
          type="text" // Cambiamos el tipo de input a "text"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Duración:
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Temporada:
        <select
          name="season"
          value={formData.season}
          onChange={handleInputChange}
        >
          <option value="">Seleccionar temporada</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
      </label>
      <br />
      <label>
        Países:
        <select
          name="countries"
          multiple // Habilitar la selección múltiple
          value={selectedCountries}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <p>Países seleccionados: {selectedCountries.join(", ")}</p>
      <button type="submit">Crear Actividad</button>
      <Link to="/delete">
        <button>Borrar Actividad</button>
      </Link>
    </form>
  );
};

export default Form;
