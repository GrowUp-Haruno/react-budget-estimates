import { FC } from "react";
import { BudgetList } from "../organisms/BudgetList";
import { AppType } from "../../Pages/App.hook";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";
import { MainLayout } from "../atoms/Layout";

export const MainContents: FC<AppType> = ({ budgetListProps, budgetTotalProps, budgetModalProps }) => {
  return (
    <MainLayout>
      <BudgetList {...budgetListProps} />
      <BudgetTotal {...budgetTotalProps} />
      <BudgetModal {...budgetModalProps} />
    </MainLayout>
  );
};
