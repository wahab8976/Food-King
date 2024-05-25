import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import CARDREAL from "../components/CARDREAL";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

const Menu = () => {
  const [selected, setSelected] = useState("burgers");
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu/api/item");
        if (!response.ok) {
          const finalResponse = await response.json();
          setError(finalResponse.error);
          return;
        }
        const loadedData = await response.json();
        setMenu(loadedData);
      } catch (error) {
        setError("An error occurred while fetching the menu.");
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="">
      <Navbar />
      <Slider />
      <section className=" flex items-center pt-16 justify-center">
        <div className="w-full max-w-screen-md">
          {error && <div className="text-red-800">{error}</div>}
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            className="flex justify-center pt-3  z-40"
            variant="underlined"
            color="default"
          >
            <Tab key="pizza" title="Pizzas">
              <Card>
                <CardBody>
                  <div className="w-full pt-6 flex flex-wrap gap-2 justify-center">
                    {menu
                      .filter((item) => item.category === "pizza")
                      .map((item, index) => (
                        <CARDREAL key={index} {...item} />
                      ))}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="burger" title="Burgers">
              <Card>
                <CardBody>
                  <div className="w-full pt-6 flex flex-wrap gap-2 justify-center">
                    {menu
                      .filter((item) => item.category === "burgers")
                      .map((item, index) => (
                        <CARDREAL key={index} {...item} />
                      ))}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="chicken" title="Chicken">
              <Card>
                <CardBody>
                  <div className="w-full pt-6 flex flex-wrap gap-2 justify-center">
                    {menu
                      .filter((item) => item.category === "chicken")
                      .map((item, index) => (
                        <CARDREAL key={index} {...item} />
                      ))}
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Menu;
