import { FC } from "react";
import { Center, Stack } from "@chakra-ui/react";
import { LayoutProps } from "../../commons/types";

export const PrimaryLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Stack minH="100vh" spacing={4}>
      {children}
    </Stack>
  );
};

export const FooterLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Center as="footer" bgColor="green.300" py={10}>
      <Stack spacing={4}>{children}</Stack>
    </Center>
  );
};

export const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Stack as="main" flexGrow={1} justifyContent="start" alignItems="center" spacing={8}>
      {children}
    </Stack>
  );
};

export const NavbarLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Center as="footer" bgColor="green.300" py={8}>
      {children}
    </Center>
  );
};
