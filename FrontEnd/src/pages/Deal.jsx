import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import React from "react";
import DealCards from "./DealCards";
import { useState, useEffect } from "react";

const Deal = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch("http://localhost:3000/");
      const loadedData = await response.json();
      console.log(loadedData);
      setMenu(loadedData);
    };
    fetchMenu();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <Slider />
        <div className="flex flex-wrap justify-center pt-24 gap-4">
          {menu.map((item, index) => {
            return <DealCards key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Deal;
