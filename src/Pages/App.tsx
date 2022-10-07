import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Footer } from "../components/templates/Footer";
import { MainContents } from "../components/templates/MainContents";
import { Navbar } from "../components/templates/Navbar";
import { useApp } from "./App.hook";

export const App: FC = () => {
  const {
    isOpen,
    onClose,
    onBadgetModalOpen,
    total,
    budgetListRecords,
    BudgetModalRecords,
  } = useApp();
  return (
    <Stack minH="100vh">
      <Navbar />
      <MainContents
        isOpen={isOpen}
        onClose={onClose}
        total={total}
        onBadgetModalOpen={onBadgetModalOpen}
        budgetListRecords={budgetListRecords}
        BudgetModalRecords={BudgetModalRecords}
      />
      <Footer />
    </Stack>
  );
};
