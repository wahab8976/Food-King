import React from "react";
import hamburger from "../../public/icons/menu.svg";
import logo from "../../public/icons/logo.png";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleOnclick = () => {
    console.log("Menu is Clicked");
    document.getElementById("slider").classList.add("menuDown");
  };
  return (
    <div
      id="navbar"
      className="fixed z-50 px-16 h-16 text-white justify-between w-screen"
    >
      <Slider />
      <nav className="flex h-12 items-center justify-between">
        <Link to="/">
          <img
            className="h-[60px] hover:cursor-pointer mt-4"
            src={logo}
            alt="Logo"
          />
        </Link>
        <ul id="navMenu" className="flex gap-10 h-12 mt-4 items-center">
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/deals">Hot Deals</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <li id="menu" className="cursor-pointer hidden">
          <img src={hamburger} alt="Menu" onClick={handleOnclick} />
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
