import React from "react";

const NewItemCard = (newItem) => {
  return (
    <div className="text-white md:w-[50vw] pt-4 w-[90vw]">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-[100%]" src={newItem.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{newItem.title}</h2>
          <p>{newItem.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Try Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItemCard;
