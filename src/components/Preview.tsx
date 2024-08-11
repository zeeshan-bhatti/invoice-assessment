// src/components/Preview.tsx
import React from "react";

const Preview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Preview</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="mb-4">
          <p>
            Invoice Date: <span className="font-semibold">12 Dec, 2024</span>
          </p>
          <p>
            Payment Terms: <span className="font-semibold">Select Term</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>Billed From:</div>
          <div>Billed To:</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mb-4">
          <div className="grid grid-cols-4 font-semibold">
            <p>Item</p>
            <p>Qty.</p>
            <p>Price</p>
            <p>Total Amount</p>
          </div>
        </div>
        <div className="grid grid-cols-2 font-semibold">
          <p>Subtotal:</p>
          <p>$ 0.00</p>
        </div>
        <div className="grid grid-cols-2 font-semibold">
          <p>Tax:</p>
          <p>10%</p>
        </div>
        <div className="grid grid-cols-2 font-semibold">
          <p>Total:</p>
          <p>$ 0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
