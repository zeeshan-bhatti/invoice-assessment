import React from "react";
import InputField from "../../components/input";
import Select from "../../components/select";
import { countryOptions } from "./BillFrom";

const paymentTermsOptions = [
  {
    value: "net_10_days",
    label: "Net 10 Days",
  },
  {
    value: "net_20_days",
    label: "Net 20 Days",
  },
  {
    value: "net_30_days",
    label: "Net 30 Days",
  },
];

const BillTo: React.FC<{ register: any; errors: any; control: any }> = ({
  errors,
  control,
}) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Bill To</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="clientName"
            placeholder="Client's Name"
            label="Client's Name"
            error={errors.clientName}
            errorMessage={errors.clientName?.message}
            control={control}
          />

          <InputField
            name="clientEmail"
            placeholder="Client's Email"
            label="Client's Email"
            type="text"
            error={errors.clientEmail}
            errorMessage={errors.clientEmail?.message}
            control={control}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Select
            name="clientCountry"
            placeholder="Country"
            label="Country"
            error={errors.clientCountry}
            errorMessage={errors.clientCountry?.message}
            control={control}
            options={countryOptions}
          />

          <InputField
            name="clientCity"
            placeholder="City"
            label="City"
            error={errors.clientCity}
            errorMessage={errors.clientCity?.message}
            control={control}
          />

          <InputField
            name="clientPostalCode"
            placeholder="Postal Code"
            label="Postal Code"
            error={errors.clientPostalCode}
            errorMessage={errors.clientPostalCode?.message}
            control={control}
          />
        </div>
        <InputField
          name="clientStreetAddress"
          placeholder="Street Address"
          label="Street Address"
          error={errors.clientStreetAddress}
          errorMessage={errors.clientStreetAddress?.message}
          control={control}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="invoiceDate"
            label="Invoice Date"
            type="date"
            placeholder="Date"
            error={errors.invoiceDate}
            errorMessage={errors.invoiceDate?.message}
            control={control}
          />

          <Select
            name="paymentTerms"
            placeholder="payment Terms"
            label="Payment Terms"
            error={errors.paymentTerms}
            errorMessage={errors.paymentTerms?.message}
            control={control}
            options={paymentTermsOptions}
          />
        </div>
        <InputField
          name="projectDescription"
          placeholder="Project Description"
          label="Project Description"
          error={errors.projectDescription}
          errorMessage={errors.projectDescription?.message}
          control={control}
        />
      </form>
    </div>
  );
};

export default BillTo;
