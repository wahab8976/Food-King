import AdminNavbar from "../components/AdminNavbar";
import React from "react";
import SelectItems from "../components/SelectItems";

const Dashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div>
        <div className="flex justify-center">
          <h1 className="font-bold text-xl">Items</h1>
        </div>
        <div>
          <h2>Select a Category</h2>
          <SelectItems />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
