// src/components/BillTo.tsx
import React from "react";

const BillTo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Bill To</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Client's Name"
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Client's Email"
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
        <div className="grid grid-cols-2 gap-4">
          <input type="date" className="border p-2 rounded-md" />
          <select className="border p-2 rounded-md">
            <option>Select Term</option>
            {/* Add other options */}
          </select>
        </div>
        <textarea
          placeholder="Project Description"
          className="border p-2 rounded-md w-full"
        ></textarea>
      </form>
    </div>
  );
};

export default BillTo;
