import React from "react";
import { useState, useEffect } from "react";
import imag from "../../public/uploads/Burger.jpeg";

const DealCards = ({ img, title, description, price, Off }) => {
  const [dealOff, setdealOff] = useState(true);
  const [inStock, setInStock] = useState(true);
  return (
    <div className="text-white ">
      <div className="card  bg-base-100 shadow-xl w-[90vw] md:w-[40vw]">
        <figure>
          <img className="w-[100%]" src={imag} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          {inStock ? (
            <div>
              <div className="card-actions items-center justify-around">
                <span className="line-through">Rs. 1200</span>
                <div className="flex justify-start">
                  {dealOff && <span>Rs. 1000</span>}
                </div>
                <div>-10% Off</div>
                <button className="btn btn-primary">Get Now</button>
              </div>
            </div>
          ) : (
            <p className="text-red-700">
              We're Sorry! This Deal is not available Yet!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DealCards;
