import background1 from "../public/uploads/background.jpg";
import CARDLANDING from "./components/CARDLANDING";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarouselDemo } from "./components/demo/CarouselDemo";
import CarouselReal from "./components/CarouselReal";
import NewItemCard from "./components/NewItemCard";

function App() {
  const [slides, setSlides] = useState([]);
  const [newItem, setNewItem] = useState(null);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("http://localhost:3000");
        const data = await response.json();
        setSlides(data);
        console.log(data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <div className="bg-gray-800 h-[150%]">
        <Navbar />
        <div
          className="overflow-x-hidden"
          style={{ backgroundColor: "rgb(31,32,34)" }}
        >
          <div
            id="background"
            className="h-screen text-white"
            style={{
              backgroundImage: `url(${background1})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              height: "80vh",
            }}
          >
            <div id="content" className="leading-[60px] ml-8 pt-32">
              <h1 className="text-[60px]">Life's too Short</h1>
              <h1 className="text-[60px]">for Boring Food</h1>
              <p className="text-[20px]">Dive into a pack of deliciousness!</p>
              <Link to="/menu">
                <button className="bg-red-600 text-white py-0 px-8 transition-all duration-300 hover:bg-red-700">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
          <div className="text-white flex flex-col items-center py-4">
            <h1 className="text-4xl">Feelin' Hungry?</h1>
            <p className="text-2xl">Grab a meal Now!</p>
          </div>
        </div>

        {/* Mapping over Data coming from backend */}

        {newItem && (
          <div className="flex justify-center">
            <NewItemCard newItem={newItem} />
          </div>
        )}

        <div className="flex mt-3 justify-center">
          <CarouselReal slides={slides} />
        </div>
      </div>
    </>
  );
}

export default App;
