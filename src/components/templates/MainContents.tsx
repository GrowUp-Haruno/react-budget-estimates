import { FC } from "react";
import { BudgetList } from "../organisms/BudgetList";
import { AppType } from "../../Pages/App.hook";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";
import { MainLayout } from "../atoms/Layout";
import { BudgetDelete } from "../organisms/BudgetDelete";

export const MainContents: FC<AppType> = ({
  budgetListProps,
  budgetTotalProps,
  budgetModalProps,
  budgetDeleteProps,
}) => {
  return (
    <MainLayout>
      <BudgetList {...budgetListProps} isDisabled={budgetDeleteProps.deleteDBDisclosure.isOpen} />
      <BudgetTotal {...budgetTotalProps} />
      <BudgetModal {...budgetModalProps} />
      <BudgetDelete {...budgetDeleteProps} />
    </MainLayout>
  );
};
