import { FC } from "react";
import { PrimaryLayout } from "../components/atoms/Layout";
import { Footer } from "../components/templates/Footer";
import { MainContents } from "../components/templates/MainContents";
import { Navbar } from "../components/templates/Navbar";
import ReloadPrompt from "../components/templates/ReloadPrompt";
import { useApp } from "./App.hook";
import { useReloadPrompt } from "./ReloadPrompt.hook";

export const App: FC = () => {
  const AppHooks = useApp();
  const ReloadPromptHooks = useReloadPrompt();
  return (
    <PrimaryLayout>
      <Navbar />
      <MainContents {...AppHooks} />
      <Footer />
      <ReloadPrompt {...ReloadPromptHooks} />
    </PrimaryLayout>
  );
};
