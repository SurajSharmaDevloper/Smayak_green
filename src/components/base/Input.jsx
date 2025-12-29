import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "Enter value",
  value,
  onChange,
  name,
  disabled = false,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div
        className={`relative rounded-lg border border-gray-300 bg-neutral-100
        px-4 py-2 flex items-center
        focus-within:ring-2 focus-within:ring-lime-300
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default Input;
