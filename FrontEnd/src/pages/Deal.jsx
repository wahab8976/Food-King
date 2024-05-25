import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import React from "react";
import DealCards from "./DealCards";
import { useState, useEffect } from "react";

const Deal = () => {
  const [deal, setDeal] = useState([]);

  useEffect(() => {
    try {
      const fetchMenu = async () => {
        const response = await fetch(
          "http://localhost:3000/menu/api/item/deals"
        );
        const loadedData = await response.json();
        setDeal(loadedData);
      };
      fetchMenu();
    } catch (error) {
      throw new Error 
    }
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <Slider />
        <div className="flex flex-wrap justify-center pt-24 gap-4">
          {deal.map((item, index) => {
            return <DealCards key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Deal;
