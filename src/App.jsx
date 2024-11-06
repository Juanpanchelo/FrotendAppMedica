import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Register from "./components/RegisterForm/Register";
import Services from "./components/Services/Services";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import PersonalMedico from "./components/Dashboard/PersonalMedico/PersonalMedico";
import Pacientes from "./components/Dashboard/Pacientes/Pacientes";
import Asociados from "./components/Dashboard/Asociados/Asociados";

function App() {
 

  return (
    <Layout>
    <BrowserRouter>
    <Routes>
      <Route />
      <Route index path="/" element={<Home />} />
      <Route index path="/services" element={<Services />} />
      <Route index path="/contact" element={<Contact />} />
      <Route index path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/personalmedico" element={<PersonalMedico/>} />
      <Route path="/pacientes" element={<Pacientes/>} />
      <Route path="/asociados" element={<Asociados/>} />



    </Routes>
  </BrowserRouter>
  </Layout>
   
  );
}

export default App;
