import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Header from "./Header";
import ItemsList from "./ItemsList";
import Preview from "./Preview";
import { SAVE_INVOICE } from "../../mutations/saveInvoice";
import { invoiceSchema } from "../../validationSchema";

const DEFAUT_VALUES = {
  companyName: "",
  companyEmail: "",
  country: "",
  city: "",
  postalCode: "",
  streetAddress: "",
  clientName: "",
  clientEmail: "",
  clientCountry: "",
  clientCity: "",
  clientPostalCode: "",
  clientStreetAddress: "",
  invoiceDate: "",
  paymentTerms: "",
  projectDescription: "",
  items: [
    {
      name: "",
      quantity: 0,
      price: 0,
    },
  ],
};

const Invoice: React.FC = () => {
  const {
    register,
    control,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(invoiceSchema),
    defaultValues: DEFAUT_VALUES,
  });

  const { fields, append } = useFieldArray({
    control,
    name: "items",
  });

  const [saveInvoice] = useMutation(SAVE_INVOICE);

  const onSubmit = async (formData: any) => {
    try {
      await saveInvoice({ variables: { input: formData } });
      alert(`Invoice created successfully!`);
      reset();
    } catch (err) {
      console.error("Error saving invoice:", err);
    }
  };

  const formValues = watch();

  return (
    <div className="min-h-screen container mx-auto bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header resetForm={reset} />
        <div className=" p-6 grid lg:grid-cols-2 md:grid-cols-1 gap-6 ">
          <div>
            <BillFrom register={register} control={control} errors={errors} />
            <BillTo register={register} control={control} errors={errors} />
            <ItemsList
              register={register}
              control={control}
              fields={fields}
              append={append}
              errors={errors}
              formValues={formValues.items}
            />
          </div>
          <Preview formValues={formValues} />
        </div>
      </form>
    </div>
  );
};

export default Invoice;
