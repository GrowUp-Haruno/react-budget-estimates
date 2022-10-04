import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Footer } from "../Footer/Footer";
import { MainContents } from "../MainContents/MainContents";
import { Navbar } from "../Navbar/Navbar";

export const App: FC = () => {
  return (
    <Stack minH="100vh">
      <Navbar />
      <MainContents />
      <Footer />
    </Stack>
  );
};
