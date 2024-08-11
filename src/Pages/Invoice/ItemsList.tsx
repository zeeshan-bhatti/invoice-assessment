// src/components/ItemsList.tsx
import React from "react";
import InputField from "../../components/input";

const ItemsList: React.FC<{
  control: any;
  register: any;
  fields: any;
  append: any;
  errors: any;
  formValues: any;
}> = ({ control, fields, append, errors, formValues }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Items List</h2>
      {fields.map((item: any, index: number) => (
        <div key={item.id} className="grid grid-cols-4 gap-4 mb-4">
          <InputField
            name={`items.${index}.name`}
            placeholder="Item Name"
            label="Item Name"
            error={errors.items?.[index]?.name}
            errorMessage={errors.items && errors?.items[index]?.name?.message}
            control={control}
          />

          <InputField
            name={`items.${index}.quantity`}
            placeholder="Qty."
            type="number"
            label="Qty."
            error={errors.items?.[index]?.quantity}
            errorMessage={
              errors.items && errors?.items[index]?.quantity?.message
            }
            control={control}
          />

          <InputField
            name={`items.${index}.price`}
            placeholder="Price"
            type="number"
            label="Price"
            error={errors.items?.[index]?.price}
            errorMessage={errors.items && errors?.items[index]?.price?.message}
            control={control}
          />

          <div>
            <div>Total</div>

            <input
              type="number"
              placeholder="Total"
              value={
                (formValues[index]?.price || 0) *
                (formValues[index]?.quantity || 0)
              }
              className="border p-2 rounded-md w-full"
              readOnly
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: "", quantity: 0, price: 0 })}
        className="bg-purple-600 text-white px-4 py-2 rounded-md w-full mt-4"
      >
        + Add New Item
      </button>
    </div>
  );
};

export default ItemsList;
