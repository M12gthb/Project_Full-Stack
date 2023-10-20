import React, { forwardRef } from "react";
import { InputContainer } from "./styles";

const Input = forwardRef<
  HTMLInputElement,
  {
    id: string;
    label?: string;
    type: string;
    error?: string;
    children?: React.ReactNode;
    placeholder: string;
  }
>(({ id, label, type, error, children, placeholder }, ref) => {
  return (
    <InputContainer>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} type={type} ref={ref} placeholder={placeholder} />
      {children}
      {error ? <p>{error}</p> : null}
    </InputContainer>
  );
});

export default Input;
