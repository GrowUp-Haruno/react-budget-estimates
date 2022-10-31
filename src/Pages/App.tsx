import { FC } from "react";
import { PrimaryLayout } from "../components/atoms/Layout";
import { Navbar } from "../components/templates/Navbar";
import { MainContents } from "../components/templates/MainContents";
import { Footer } from "../components/templates/Footer";
import { ReloadPrompt } from "../components/templates/ReloadPrompt";
import { useMainContents } from "../commons/hooks/useMainContents";
import { useReloadPrompt } from "../commons/hooks/useReloadPrompt";

export const App: FC = () => {
  const mainContentsProps = useMainContents();
  const reloadPromptProps = useReloadPrompt();
  return (
    <PrimaryLayout>
      <Navbar />
      <MainContents {...mainContentsProps} />
      <Footer />
      <ReloadPrompt {...reloadPromptProps} />
    </PrimaryLayout>
  );
};
