import styles from "./Dashboard.module.css";
import { FaHouse } from "react-icons/fa6";

const Dashboard = () => {
  return (
      <>
        <div className={styles.container}>
          <div className={styles.dashNav}>
          <nav>
            <ul className={styles.listItems}>
                  <li>
                    <a href="/personalmedico">Personal Medico</a>
                  </li>
                  <li><a href="/pacientes">Pacientes</a></li>
                  <li><a href="/asociados">Asociados</a></li>
            </ul>
          </nav>
          <li className={styles.jaus}><a href="/"><FaHouse className={styles.iconHouse} /></a></li>
          </div>
          </div>
      </>
              
      )
    }
    
      

  export default Dashboard;

