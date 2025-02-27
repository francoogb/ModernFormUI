import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import './index.ts';
import InputForm from './CustomInput';
import { schema,FormValues } from '../models/schema.ts';

export const CustomForm = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <h1>Custom Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm name="name" control={control} label="Name" type="text" error={errors.name} />

        <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />

        <InputForm name="password" control={control} label="Password" type="password" error={errors.password} />

        <InputForm name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
