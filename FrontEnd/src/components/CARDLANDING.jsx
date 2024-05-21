import React from "react";
import dropdown from "../../public/icons/dropdown.svg";

const CARDLANDING = ({ title, description, pic }) => {
  return (
    <div id="cardLanding">
      <div className="parent hover:cursor-pointer w-[320px]  h-[350px] hover:h-[400px] transition-all duration-300 ">
        <div className="w-[100%] h-[87%]  ">
          <img
            className="w-[100%] rounded-t-lg h-[100%] object-cover relative z-10"
            src={pic}
          />
        </div>

        <div className="overflow-hidden  hover:h-auto w-[100%] h-[13%] bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-3 relative z-30 transition-all duration-400 ease-out  rounded-bl-lg rounded-br-lg">
          <span className="flex justify-between">
            <h1 className="font-bold">{title}</h1>{" "}
            <img className="child" src={dropdown} alt="" />
          </span>
          <p className="pt-3 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CARDLANDING;
