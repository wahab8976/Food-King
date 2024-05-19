import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import burger from "../../public/uploads/Burger.jpeg";

export default function CARD({ price, img, title }) {
  return (
    <Card id="card" className="py-4 w-[260px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <button className="bg-red-600 p-1 rounded-lg text-white text-tiny uppercase font-bold">
          Get Now
        </button>
        {/* <p>Daily Mix</p> */}
        <small className="text-default-500">Rs. {price}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={burger}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
