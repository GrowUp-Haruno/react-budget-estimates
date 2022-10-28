import { Center, Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const PrimaryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Stack minH="100vh" spacing={4}>
      {children}
    </Stack>
  );
};

export const FooterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Center as="footer" bgColor="green.300" py={10}>
      <Stack spacing={4}>{children}</Stack>
    </Center>
  );
};

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Stack as="main" flexGrow={1} justifyContent="start" alignItems="center" spacing={8}>
      {children}
    </Stack>
  );
};

export const NavbarLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Center as="footer" bgColor="green.300" py={8}>
      {children}
    </Center>
  );
};
