import { Center, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <Center as="footer" bgColor="green.300" py={10}>
      <Text>created by</Text>
    </Center>
  );
};