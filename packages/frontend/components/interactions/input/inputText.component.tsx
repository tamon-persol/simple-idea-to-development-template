import React from 'react';
import style from './inputText.module.sass';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form/dist/types/fields';

type InputTextProps<T extends FieldValues> = {
  label: string;
  name: string;
  register: UseFormRegister<T>;
};

export const InputText = ({
  register,
  name,
  label,
  ...rest
}: InputTextProps<any>) => {
  return (
    <div className={style.container}>
      <label>{label}</label>
      <input {...register(name)} {...rest} type="text" />
    </div>
  );
};

export default InputText;
