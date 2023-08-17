import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import { validarFormulario } from "./validation";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    dificulty: "",
    duration: "",
    seasson: "",
  });

  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los países:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors(
      validarFormulario({
        ...formData,
        [name]: value,
      })
    );
  };

  const handleCountryChange = (event) => {
    const selectedOptions = event.target.options;
    const selectedCountries = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].selected) {
        selectedCountries.push(selectedOptions[i].value);
      }
    }
    setSelectedCountries(selectedCountries);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Verificar si ya existe una actividad con el mismo nombre en la base de datos
      const { data } = await axios.get(
        `http://localhost:3001/activities?name=${formData.name}`
      );
      console.log(data);

      if (data !== null) {
        window.alert("¡Esta actividad ya existe!");
        return;
      }

      // Si no existe, crear la actividad
      const response = await axios.post(
        "http://localhost:3001/activities",
        formData
      );

      if (response.status === 201) {
        window.alert("¡La actividad se creó con éxito!");
      }
    } catch (error) {
      window.alert("Error al crear la actividad: Faltan datos");
    }
  };

  return (
    <div className={styles.formPageContainer}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label>
          Nombre: {""}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.nombre && <p>{errors.nombre}</p>}
        </label>
        <br />
        <label>
          Dificultad: {""}
          <input
            type="text"
            name="dificulty"
            value={formData.dificulty}
            onChange={handleInputChange}
          />
          {errors.dif && <p>{errors.dif}</p>}
        </label>
        <br />
        <label>
          Duración:{" "}
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          />
          {errors.tiempo && <p>{errors.tiempo}</p>}
        </label>
        <br />
        <label>
          Temporada:
          <select
            name="seasson"
            value={formData.seasson}
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
        <br />
        <label>
          Países:
          <select
            name="countries"
            multiple
            value={selectedCountries}
            onChange={handleCountryChange}
          >
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
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
        <Link to="/home">
          <button>Volver</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
