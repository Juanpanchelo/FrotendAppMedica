import React from "react";
import "./Home.css";
import doctorImage from "./images/doctor-image.png";
import image2 from "./images/image2.png";
function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div>
          <h1>
            <span> Cuida la salud de tu</span> <br />
            <span className="highlight"> familia.</span>
          </h1>
          <p>
            Todo en un destino para consultas de salud de covid-19.<br></br>
            Consulte a mas de 10.000 trabajadores de salud sobre<br></br>
            sus inquietudes
          </p>
          <button className="start-button">EMPEZAR</button>

          <div className="video-button">
            <section className="play-icon">
              <span>▷</span>
            </section>
            <span className="button-text">VER VIDEO</span>
          </div>
        </div>
        <div className="image-section">
          <img src={doctorImage} alt="Doctor and Patient Illustration" />
        </div>
      </section>

      <div className="border2">
        <div className="bloque">
          <section className="image2">
            <img src={image2} alt="patient with discomfort" />
            <div className="important-text">
              <strong>
                Enfermedad por el <br></br>
                nuevo coronavirus
              </strong>
              <p>
                El COVID-19 afecta de distintas <br></br>
                maneras en funcion de cada persona
              </p>
            </div>
          </section>
        </div>
        <section className="cards">
          <div className="card">
            <div>
              <h2>
                Mantente seguro <br></br>
                con <span className="highlight2"> Coronapp.</span>
              </h2>
              <p>
                Soporte 24x7 y plataforma movil facil de usar para <br></br>
                llevar la atencion medica a su alcance. Registrese y sea{" "}
                <br></br>
                parte de la nueva cultura de la salud
              </p>
              <button className="start-button1">EMPEZAR</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
