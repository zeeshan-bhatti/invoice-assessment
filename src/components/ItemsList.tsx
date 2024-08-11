// src/components/ItemsList.tsx
import React from "react";

const ItemsList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Items List</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Item Name"
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Qty."
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Total"
            className="border p-2 rounded-md"
          />
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full mt-4">
          + Add New Item
        </button>
      </form>
    </div>
  );
};

export default ItemsList;
