import { Heading, Center } from "@chakra-ui/react";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <Center bgColor="green.300" py={4}>
      <Heading as="h1" color="gray.50">
        旅費計算機
      </Heading>
    </Center>
  );
};
