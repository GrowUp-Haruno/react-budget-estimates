import { FC } from "react";
import { Heading } from "@chakra-ui/react";
import { NavbarLayout } from "../atoms/Layout";

export const Navbar: FC = () => {
  return (
    <NavbarLayout>
      <Heading as="h1" color="gray.50">
        旅費計算機
      </Heading>
    </NavbarLayout>
  );
};
