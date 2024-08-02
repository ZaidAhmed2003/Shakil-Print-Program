import React from "react";

const FormInput = ({
  id,
  name,
  type = "text",
  label = "",
  formik,
  w = "full",
  ...props
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={`appearance-none border ${
          formik.touched[name] && formik.errors[name] ? "border-red-500" : ""
        } focus:shadow-outline w-${w} rounded px-3 py-2 leading-tight text-gray-700 focus:outline-none`}
        {...props}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-sm text-red-500">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
