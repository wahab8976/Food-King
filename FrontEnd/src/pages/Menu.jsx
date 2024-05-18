import React from "react";
import Navbar from "../components/Navbar";

const Menu = () => {
  return (
    <div className="flex bg-white h-screen text-black">
      <Navbar />
      <div className="">
        <nav>
          <ul className="flex flex-col">
            <li className="bg-yellow-500">Pizza</li>
            <li>Burger</li>
            <li>Chicken</li>
            <li>Others</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
