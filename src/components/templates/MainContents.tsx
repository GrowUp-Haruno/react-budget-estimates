import { FC } from "react";
import { MainLayout } from "../atoms/Layout";
import { BudgetList } from "../organisms/BudgetList";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";
import { BudgetDelete } from "../organisms/BudgetDelete";
import { MainContentsProps } from "../../commons/types";

export const MainContents: FC<MainContentsProps> = ({
  budgetListProps,
  budgetTotalProps,
  budgetModalProps,
  budgetDeleteProps,
}) => {
  return (
    <MainLayout>
      <BudgetList {...budgetListProps} />
      <BudgetTotal {...budgetTotalProps} />
      <BudgetModal {...budgetModalProps} />
      <BudgetDelete {...budgetDeleteProps} />
    </MainLayout>
  );
};
