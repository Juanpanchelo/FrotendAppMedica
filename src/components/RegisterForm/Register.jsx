import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <form action="" className={styles.wrapper}>
      <h1 className={styles.title}> REGISTRO </h1>
      <label className={styles.inputBox}>
        <input
          type="text"
          placeholder="usuario"
          required
          className={styles.inputField}
        />
        <FaUser className="icon" />
      </label>
      <label className={styles.inputBox}>
        <input
          type="contraseña"
          placeholder="contraseña"
          required
          className={styles.inputField}
        />
        <FaLock className="icon" />
      </label>
      <label className={styles.inputBox}>
        <input
          type="text"
          placeholder="nombres"
          className={styles.inputField}
        />
      </label>
      <label className={styles.inputBox}>
        <input
          type="text"
          placeholder="apellidos"
          className={styles.inputField}
        />
      </label>
      <div className={styles.inputSelect}>
        <span>tipo de documento</span>
        <select>
          <option value="1">Cedula ciudadania</option>
          <option value="2">Tarjeta identidad</option>
        </select>
      </div>
      <label className={styles.inputBox}>
        <input
          type="text"
          placeholder="documento"
          className={styles.inputField}
        />
      </label>
      <label className={styles.inputBox}>
        <input type="text" placeholder="eps" className={styles.inputField} />
      </label>
      <button className={styles.botonEnviar} type="submit">
        Registrar
      </button>
    </form>
  );
};

export default Register;
