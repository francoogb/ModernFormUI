import { Control, Controller, FieldError } from "react-hook-form";
import React from 'react';
import './customInput.css'
import { FormValues } from "../models/schema";
interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = ({ name, control, label, type = 'text', error }: Props) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? "is-invalid" : ""}`}
          />
        )}
      />
      {error && <span className="invalid-feedback">{error.message}</span>}
    </div>
  );
};

export default InputForm;
