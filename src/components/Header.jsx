import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="wrap">
          <div className="header-block">
            <img src={logo} alt="" />
            <div className="btn-search">
              <NavLink to="/" >
                <button>Home</button>
              </NavLink>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
