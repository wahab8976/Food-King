import React from "react";
import { useState, useEffect } from "react";

const DealCards = ({
  img,
  title,
  description,
  originalprice,
  discountedprice,
  percentageoff,
  Off,
}) => {
  const [dealOff, setdealOff] = useState(true);
  const [inStock, setInStock] = useState(true);

  return (
    <div className="text-white ">
      <div className="card  bg-base-100 shadow-xl w-[90vw] md:w-[40vw]">
        <figure>
          <img className="w-[100%]" src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          {inStock ? (
            <div>
              <div className="card-actions items-center justify-around">
                <span className="line-through">Rs. {originalprice}</span>
                <div className="flex justify-start">
                  {dealOff && <span>Rs.{discountedprice}</span>}
                </div>
                <div>-{percentageoff} Off</div>
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
