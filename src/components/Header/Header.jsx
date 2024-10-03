import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Aplicación Médica</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Registrarse</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
