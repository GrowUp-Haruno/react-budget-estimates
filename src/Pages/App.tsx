import { FC } from "react";
import { AppTemplate } from "../components/templates/AppTemplate";
import { useApp } from "./App.hook";

export const App: FC = () => {
  const AppType = useApp();
  return <AppTemplate {...AppType} />;
};
