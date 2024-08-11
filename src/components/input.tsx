import { Controller } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  control: any;
  placeholder?: string;
  type?: string;
  error: boolean;
  errorMessage?: string;
}

const InputField = ({
  name,
  error,
  errorMessage,
  control,
  placeholder,
  label,
  type = "text",
}: InputFieldProps) => {
  return (
    <div>
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            onChange={(e) => {
              const value =
                type === "number" ? parseFloat(e.target.value) : e.target.value;
              field.onChange(value);
            }}
            placeholder={placeholder}
            type={type}
            className="border p-2 rounded w-full"
          />
        )}
      />
      {error && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
