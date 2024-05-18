import React from "react";
import menu from "../../public/icons/menulist.svg";
import deal from "../../public/icons/deal.svg";
import support from "../../public/icons/support.svg";
import cross from "../../public/icons/cross.svg";
import logo from "../../public/icons/logo.png";
import { Link } from "react-router-dom";

const Slider = () => {
  const handleCross = () => {
    document.getElementById("slider").classList.remove("menuDown");
    console.log("Cross is clicked");
  };

  return (
    <div>
      <div
        id="slider"
        className="w-[30vw] relative z-50 h-screen bg-red-700 hidden font-bold p-2 transform translate-x-full transition-transform duration-500 ease-in-out"
      >
        <nav className="top-[200px]">
          <span className="flex justify-between">
            <Link to="/">
              <img className="h-[50px] pb-3" src={logo} alt="Logo" />
            </Link>
            <img onClick={handleCross} src={cross} alt="Close" />
          </span>
          <hr className="pb-3" />
          <ul className="text-white flex flex-col gap-5 justify-center">
            <Link to="/menu">
              <span className="flex gap-9">
                {" "}
                <img src={menu} alt="Menu" /> <li>Menu</li>{" "}
              </span>{" "}
            </Link>
            <hr />
            <Link to="/deals">
              <span className="flex gap-9">
                <img src={deal} alt="Deal" />
                <li>Hot Deals</li>
              </span>
            </Link>
            <hr />
            <Link to="/contact">
              <span className="flex gap-9">
                <img src={support} alt="Support" />
                <li>Contact Us</li>
              </span>
            </Link>
            <hr />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Slider;
