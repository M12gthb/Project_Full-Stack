import React, { forwardRef } from "react";
import { InputContainer } from "./styles";
import { UseFormRegister } from "react-hook-form";

const Input = forwardRef<
  HTMLInputElement,
  {
    id: string;
    label?: string;
    type: string;
    error?: string;
    children?: React.ReactNode;
    placeholder: string;
    register: UseFormRegister<any>;
  }
>(({ id, label, type, error, children, placeholder, register }) => {
  return (
    <InputContainer>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} type={type} placeholder={placeholder} {...register(id)} />
      {children}
      {error ? <p>{error}</p> : null}
    </InputContainer>
  );
});

export default Input;
