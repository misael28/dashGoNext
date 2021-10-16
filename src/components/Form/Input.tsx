import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, type, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
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
      />
    </FormControl>
  );
}
