// src/components/BillFrom.tsx
import React from "react";
import InputField from "../../components/input";
import Select from "../../components/select";

export const countryOptions = [
  { value: "Pak", label: "Pakistan" },
  { value: "USA", label: "USA" },
  { value: "Canada", label: "Canada" },
  { value: "UK", label: "UK" },
  { value: "Australia", label: "Australia" },
];

const BillFrom: React.FC<{ register: any; errors: any; control: any }> = ({
  register,
  errors,
  control,
}) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Bill From</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="companyName"
            label="Company Name"
            placeholder="Company Name"
            error={errors.companyName}
            errorMessage={errors.companyName?.message}
            control={control}
          />

          <InputField
            name="companyEmail"
            type="email"
            label="Company Email"
            placeholder="Company Email"
            error={errors.companyEmail}
            errorMessage={errors.companyEmail?.message}
            control={control}
          />
          <div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Select
            control={control}
            name="country"
            label="Country"
            error={errors.country}
            placeholder="Select Country"
            errorMessage={errors.country?.message}
            options={countryOptions}
          />

          <InputField
            name="city"
            placeholder="City"
            label="City"
            error={errors.city}
            errorMessage={errors.city?.message}
            control={control}
          />

          <InputField
            name="postalCode"
            placeholder="Postal Code"
            label="Postal Code"
            error={errors.postalCode}
            errorMessage={errors.postalCode?.message}
            control={control}
          />
        </div>
        <InputField
          name="streetAddress"
          placeholder="Street Address"
          label="Street Address"
          error={errors.streetAddress}
          errorMessage={errors.streetAddress?.message}
          control={control}
        />
      </form>
    </div>
  );
};

export default BillFrom;
