import { Controller } from "react-hook-form";

interface SelectProps {
  name: string;
  label: string;
  control: any;
  placeholder?: string;
  type?: string;
  error: boolean;
  errorMessage?: string;
  options: { label: string; value: string }[];
}

const Select = ({
  name,
  error,
  errorMessage,
  control,
  placeholder,
  label,
  options = [],
}: SelectProps) => {
  return (
    <div>
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select {...field} className="border p-2 rounded w-full">
            <option value={""}>{placeholder}</option>
            {options.map((option: { label: string; value: string }) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default Select;
