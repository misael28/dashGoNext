import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

interface FormData {
  name: string;
  email: string;
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignin: SubmitHandler<FormData> = (data) => {
    console.log(data);
  }

  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack>
          <Input name={"email"} label={"E-mail"} type={"email"} {...register("name")} />
          <Input name={"password"} label={"Senha"} type={"password"} {...register("password")} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
