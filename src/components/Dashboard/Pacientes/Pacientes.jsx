import styles from "../Dashboard.module.css";
import Dashboard from '../Dashboard';



const Pacientes=()=> {
  return (

    <>
    <div className='container'>
    <Dashboard/>
    <div className={styles.information}>
    <h1>NUMERO DE PACIENTES</h1>
    <br></br>
    <h1>500</h1>
    </div>
    </div>




    </>



  )
}
    

export default Pacientes;