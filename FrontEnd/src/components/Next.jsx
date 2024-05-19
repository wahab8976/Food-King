import React from "react";
import img from "../../public/uploads/Burger.jpeg";

const Next = () => {

  return (
    <div className="mt-3 flex justify-center">
      <div className="card md:w-[70vw] w-[80vw] card-side bg-base-100 shadow-xl">
        <figure>
          <img className="min-h-[100%]" src={img} alt="Movie" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Eid Special Deals!</h2>
          <p>Get Pizza, Burger and Much more in 1 pack.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;
