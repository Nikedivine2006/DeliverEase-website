import React from "react";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({ Btn, setBtn, CartItem }) {
  const handleBtn = () => {
    setBtn("Processing");
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="Main-nav">
      <div className="Navbar container">
        <div className="Logo">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <h3>
            Deliver<span>Ease</span>
          </h3>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Why DeliverEase</NavLink>
            </li>
            <li>
              <NavLink to="/Dashboard">Order Food</NavLink>
            </li>
          </ul>
        </nav>

        <div className="NavIcon">
          <ul>
            <li>
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li className="CartIcon">
            <Link to="/Dashboard">
              <FontAwesomeIcon icon={faShoppingBag} />
                <div>{CartItem.length}</div>
              </Link>
            </li>
            <li>
              <NavLink to="/UserLogin">
                <button onClick={handleBtn}>{truncate(Btn, 15)}</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
