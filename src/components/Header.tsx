// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white">
      <h1 className="text-xl font-semibold">New Invoice</h1>
      <div>
        <button className="mr-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
          Reset
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default Header;
