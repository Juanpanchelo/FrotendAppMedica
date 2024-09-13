import React from 'react';
import "../LoginForm/LoginForm.css"

export default function Login() {
    return (
      <>
      <html>
      <div id = "mainLogin">
      
      <div>
        <strong class="name">LOGIN</strong>
      </div>
      <form>
        <br></br>
        <p class = "names">Documento de Identidad</p>
        <input type="text"></input>
        <p class="names">Clave de acceso</p>
        <input type="password"></input>
        <br></br>
        <br></br>
        <button type="submit" class="ingresar">INGRESAR</button>
      </form> 
      <br></br>
      <strong class="names">Olvidaste tu clave?</strong><br></br>
      <br></br>
      <a class='toRecover' href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1GCEA_enCO1117CO1117&oq=g&gs_lcrp=EgZjaHJvbWUqEwgEEC4YgwEYxwEYsQMY0QMYgAQyBggAEEUYOTINCAEQABiDARixAxiABDIGCAIQRRg7MgYIAxBFGDsyEwgEEC4YgwEYxwEYsQMY0QMYgAQyDQgFEAAYgwEYsQMYgAQyDQgGEAAYgwEYsQMYgAQyDQgHEAAYgwEYsQMYgAQyDQgIEAAYgwEYsQMYgAQyDQgJEAAYgwEYsQMYgATSAQkyNjgwajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8">Da click aqui</a>
      <br></br>
      <br></br>
      <strong class="names" >No tienes una cuenta?</strong><br></br>
      <br></br>
      <a class='toRegister' href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1GCEA_enCO1117CO1117&oq=g&gs_lcrp=EgZjaHJvbWUqEwgEEC4YgwEYxwEYsQMY0QMYgAQyBggAEEUYOTINCAEQABiDARixAxiABDIGCAIQRRg7MgYIAxBFGDsyEwgEEC4YgwEYxwEYsQMY0QMYgAQyDQgFEAAYgwEYsQMYgAQyDQgGEAAYgwEYsQMYgAQyDQgHEAAYgwEYsQMYgAQyDQgIEAAYgwEYsQMYgAQyDQgJEAAYgwEYsQMYgATSAQkyNjgwajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8">Registrate</a>

        </div>
        </html>
        
        </>
    );
  }
  