import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Tabs, Tab } from "@nextui-org/tabs";
import CARD from "../components/CARD";

const Menu = () => {
  const [isVertical, setIsVertical] = useState(window.innerWidth > 768);
  const [menu, setMenu] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch("http://localhost:3000/");
      const loadedData = await response.json();
      setMenu(loadedData);
      console.log(loadedData);
    };
    fetchMenu();

    const handleResize = () => {
      setIsVertical(window.innerWidth > 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <Navbar />
      <div id="centerControl" className="flex justify-center gap-6">
        <div
          id="tab"
          className={`overflow-hidden md:fixed relative left-[30px] top-40 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
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
          
            <CARD  />
            <CARD  />
            <CARD  />
            <CARD  />
            <CARD  />
            <CARD  />
            <CARD  />
          
        </div>
      </div>
    </div>
  );
};

export default Menu;
