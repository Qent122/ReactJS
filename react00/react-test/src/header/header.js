import "./header.css";
import logo from "../logo.svg";
import { Outlet, Link } from "react-router-dom";
const bienvenue = <h3>Hello World !</h3>;

function header() {
  return (
    <header className="header">
      {bienvenue}
      <div className="presentation">
        <img src={logo} className="logo" />
        <h1>Bienvenue sur mon cour sur React !</h1>
        <img src={logo} className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/message">Message</Link>
          </li>
          <li>
            <Link to="/produit">Produit</Link>
          </li>
        </ul>
      </nav>
      <div className="moto">🏍️</div>
      <Outlet />
    </header>
  );
}

export default header;
