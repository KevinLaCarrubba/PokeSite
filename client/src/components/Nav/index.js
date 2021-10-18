import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./style.css";
import { QUERY_USER } from "../../utils/queries";
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="loginUl">
          <li className="mx-1">
            <Link to="/orderHistory">
              <img
                src="https://fontmeme.com/permalink/211014/f4fb6844068e0e1c014395d8bf4831cd.png"
                alt="pokemon-font"
                border="0"
              ></img>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/upcoming">
              <img
                src="https://fontmeme.com/permalink/211018/a33ae0861ca3f1915d711a3889d79fba.png"
                alt="pokemon-font"
                border="0"
              />
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              <img
                src="https://fontmeme.com/permalink/211014/106b26cb5c30ddd3a7d2668e2dd5c470.png"
                alt="pokemon-font"
                border="0"
              ></img>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="loginUl">
          <li className="mx-1">
            <Link to="/signup">
              <img
                src="https://fontmeme.com/permalink/211014/08e476702f30bb84656d62053740a2a6.png"
                alt="pokemon-font"
                border="0"
              ></img>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              <img
                src="https://fontmeme.com/permalink/211014/c36ba25dabf1f33db1b8ba3e5996b6e5.png"
                alt="pokemon-font"
                border="0"
              ></img>
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/211014/d10d508da6a5d90edac74af85795ae11.png"
            alt="pokemon-font"
            border="0"
          ></img>
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
