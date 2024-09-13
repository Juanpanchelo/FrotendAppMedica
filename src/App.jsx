import { BrowserRouter, Routes, Route } from "react-router-dom";
import test from "./components/LoginForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>

export default App;
