import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const SelectItems = () => {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);

  // useEffect(() => {
  //   const fetchCollections = async () => {
  //     const response = await fetch(
  //       "http://localhost:3000/api/admin/dashboard/collections"
  //     );
  //     const data = await response.json();
  //     setCollections(data);
  //   };
  //   fetchCollections();
  // }, []);

  // const handleSelectionChange = async (selectedItem) => {
  //   const response = await fetch(`http://your-api-url/${selectedItem}`);
  //   const data = await response.json();
  //   setSelectedCollection(data);
  // };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Food Categories"
        variant="bordered"
        placeholder="Select a collection"
        className="max-w-xs"
      >
        {collections.map((collection) => (
          <SelectItem key={collection.uuid} value={collection.uuid}>
            {collection.name}
          </SelectItem>
        ))}
      </Select>
      <p className="text-small text-default-500">Selected: {selectedCollection}</p>
    </div>
  );
};

export default SelectItems;
