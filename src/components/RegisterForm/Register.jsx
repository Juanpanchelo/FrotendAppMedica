import React from "react";
import './Register.css';
import { FaUser, FaLock } from "react-icons/fa";

const Register = () => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <form action="">
                    <h1> REGISTRO  </h1>
                    <div className="input-box">
                        <input type="text" placeholder="usuario" required />
                        <FaUser className="icon"/>

                    </div>
                    <div className="input-box">
                        <input type="contraseña" placeholder="contraseña" required />
                        <FaLock className="icon"/>

                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="nombres" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="apellidos" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="tipo de documento" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="documento" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="eps" />
                    </div>

                    
                    <button type="submit">Registrar</button>
                    
                </form>
            </div>

        </div>
    );
};

export default Register;
