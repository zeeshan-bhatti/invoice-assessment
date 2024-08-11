// src/components/Preview.tsx
import React from "react";

const Preview = ({ formValues }: { formValues: any }) => {
  const calculateSubtotal = () => {
    return formValues.items.reduce(
      (total: any, item: any) => total + item.quantity * item.price,
      0
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * (10 / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Preview</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="mb-4">
          <p>
            Invoice Date:{" "}
            <span className="font-semibold">{formValues.invoiceDate}</span>
          </p>
          <p>
            Payment Terms:{" "}
            <span className="font-semibold">{formValues.paymentTerms}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div>Billed From:</div>
            <div>{formValues.companyName}</div>
            <div>{formValues.companyEmail}</div>
            <div>{formValues.streetAddress}</div>
            {formValues.city && formValues.postalCode && (
              <div>
                {formValues.city} , {formValues.postalCode}
              </div>
            )}
            <div>{formValues.country}</div>
          </div>
          <div>
            <div>Billed To:</div>
            <div>{formValues.clientName}</div>
            <div>{formValues.clientEmail}</div>
            <div>{formValues.clientStreetAddress}</div>
            {formValues.clientCity && formValues.clientPostalCode && (
              <div>
                {formValues.clientCity} , {formValues.clientPostalCode}
              </div>
            )}
            <div>{formValues.clientCountry}</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mb-4">
          <div className="grid grid-cols-4 font-semibold">
            <p>Item</p>
            <p>Qty.</p>
            <p>Price</p>
            <p>Total Amount</p>
            {formValues.items.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
                <p>{item.price * item.quantity}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 font-semibold">
          <p>Subtotal:</p>
          <p>$ {calculateSubtotal()}</p>
        </div>
        <div className="grid grid-cols-2 font-semibold">
          <p>Tax:</p>
          <p>10%</p>
        </div>
        <div className="grid grid-cols-2 font-semibold">
          <p>Total:</p>
          <p>$ {calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
