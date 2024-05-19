import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Tabs, Tab } from "@nextui-org/tabs";
import CARD from "../components/CARD";

const Menu = () => {
  const [isVertical, setIsVertical] = useState(window.innerWidth > 768);
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
    <div className="">
      <Navbar />
      <div id="centerControl" className="flex justify-center gap-6">
        <div
          id="tab"
          className="overflow-hidden md:fixed relative left-[30px] top-40 transition-opacity duration-300"
        >
          <Tabs
            isVertical={isVertical}
            color="warning"
            aria-label="Tabs colors"
            radius="lg"
            variant={isVertical ? "solid" : "underlined"}
          >
            <Tab key="pizzas" title="Pizzas" />
            <Tab key="wraps" title="Wraps" />
            <Tab key="chicken" title="Chicken" />
          </Tabs>
        </div>

        <div className="flex gap-1 md:w-[70vw] w-[90vw] justify-center mt-[100px] flex-wrap">
          {menu.map((item, index) => {
            return <CARD key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
