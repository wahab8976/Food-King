import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState } from "react";
export default function Cards({ title, pic, price }) {
  const [stock, setStock] = useState(true);
  return (
    <div>
      {
        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
          className="w-[200px] "
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={title}
              className="w-full object-cover h-[140px]"
              src={pic}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{title}</b>
            {stock ? (
              <p className="text-default-500">Rs.{price}</p>
            ) : (
              <p className="text-red-700 text-[12px]">Out of Stock</p>
            )}
          </CardFooter>
        </Card>
      }
    </div>
  );
}
