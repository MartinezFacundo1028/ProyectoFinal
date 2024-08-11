import { Link } from "react-router-dom";
import CardWidget from "../../Svgs/CardWidget/CardWidget";
import "./Nav.css";

const Nav = ({title}) => {

    return (
      <div className="nav-div-css">
          <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="navbar-brand mb-1 ">{title}</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/Procesador">Procesadores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/Refrigeracion">Refrigeracion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/Placas">Placas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/Energia">Energia</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="cart">Carrito</Link>
                </li>
                <CardWidget /> 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Nav;