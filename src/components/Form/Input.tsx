import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

import { forwardRef,ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
= ({ name, label, type, ...rest }, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type={type}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hoover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
        ref={ref}
      />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);