import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetList } from "../BudgetList/BudgetList";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const App: FC = () => {
  return (
    <Stack minH='100vh'>
      <Navbar />
      <BudgetList />
      <Footer />
    </Stack>
  );
};
