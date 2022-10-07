import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Footer } from "../components/templates/Footer";
import { MainContents } from "../components/templates/MainContents";
import { Navbar } from "../components/templates/Navbar";
import { useApp } from "./App.hook";

export const App: FC = () => {
  const AppType = useApp();
  return (
    <Stack minH="100vh">
      <Navbar />
      <MainContents {...AppType} />
      <Footer />
    </Stack>
  );
};
