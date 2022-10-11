import { FC } from "react";
import { PrimaryLayout } from "../components/atoms/Layout";
import { Footer } from "../components/templates/Footer";
import { MainContents } from "../components/templates/MainContents";
import { Navbar } from "../components/templates/Navbar";
import { useApp } from "./App.hook";

export const App: FC = () => {
  const AppType = useApp();
  return (
    <PrimaryLayout>
      <Navbar />
      <MainContents {...AppType} />
      <Footer />
    </PrimaryLayout>
  );
};
