import React from "react";

const AdminSlider = () => {
  return (
    <section>
      <div>
        <div className="navbar-center w-[25%] h-screen border-black border-2">
          <a className="btn btn-ghost text-xl text-black">Your Dashboard</a>
          <div className="flex flex-col items-center gap-3">
            <button className="rounded-md block w-[80%] bg-purple-500 py-2 text-black">
              Pizzas
            </button>
            <button className="rounded-md block w-[80%] bg-purple-500 py-2 text-black">
              Wraps
            </button>
            <button className="rounded-md block w-[80%] bg-purple-500 py-2 text-black">
              Chicken
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSlider;
