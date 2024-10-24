import React from 'react';
import "./Dashboard.css";
import jaus from "../assets/img/jaus.png";




function Dashboard() {
  return (
      <>
        <div className='container'>
          <div className = "dashNav">
          <nav>
                <ul>
                <li><a href="/personalmedico">Personal Medico</a></li>
                <br></br>
                  <li><a href="/pacientes">Pacientes</a></li>
                  <br></br>

                  <li><a href="/asociados">Asociados</a></li>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>


                  <li><a href="/"><img alt={"home"} src={jaus}></img></a></li>

                </ul>
              </nav>
              </div>
              </div>
              </>
              
      )
    }
    
      

  export default Dashboard;

