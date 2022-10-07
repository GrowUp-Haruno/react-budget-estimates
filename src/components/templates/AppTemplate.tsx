import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { AppType } from "../../Pages/App.hook";
import { Footer } from "../organisms/Footer";
import { MainContents } from "../organisms/MainContents";
import { Navbar } from "../organisms/Navbar";

export const AppTemplate: FC<AppType> = (AppType) => {
  return (
    <Stack minH="100vh">
      <Navbar />
      <MainContents {...AppType} />
      <Footer />
    </Stack>
  );
};
