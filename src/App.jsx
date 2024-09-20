import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Register from "./components/RegisterForm/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
