// src/components/BillFrom.tsx
import React from "react";

const BillFrom: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Bill From</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company Name"
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Company Email"
            className="border p-2 rounded-md"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Select Country"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="City"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="border p-2 rounded-md"
          />
        </div>
        <input
          type="text"
          placeholder="Street Address"
          className="border p-2 rounded-md w-full"
        />
      </form>
    </div>
  );
};

export default BillFrom;
