import styles from "../Dashboard.module.css";
import Dashboard from '../Dashboard';



const Asociados =()=> {
  return (
    <>
    <div className='container'>
    <Dashboard/>
    <div className={styles.information}>
    <h1>NUMERO DE ASOCIADOS</h1>
    <br></br>
    <h1>100</h1>
    </div>
    </div>




    </>

  )
}
    

export default Asociados;