import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnReactButton, setReactButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="navitems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/*<a href="/about">About Us</a>*/}
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnReactButton === "Login"
                ? setReactButton("Logout")
                : setReactButton("Login");
            }}
          >
            {btnReactButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
