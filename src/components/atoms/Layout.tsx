import { Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const PrimaryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Stack minH="100vh" spacing={4}>
      {children}
    </Stack>
  );
};
