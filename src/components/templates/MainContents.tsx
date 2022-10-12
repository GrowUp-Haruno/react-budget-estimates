import { FC } from "react";
import { BudgetList } from "../organisms/BudgetList";
import { AppType } from "../../Pages/App.hook";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";
import { MainLayout } from "../atoms/Layout";

export const MainContents: FC<AppType> = ({
  isOpen,
  onClose,
  onBudgetModalOpen,
  total,
  budgetListRecords,
  budgetModalRecords,
  onBudgetDetailDelete,
}) => {
  return (
    <MainLayout>
      <BudgetList records={budgetListRecords} onBudgetModalOpen={onBudgetModalOpen} />
      <BudgetTotal total={total} />
      <BudgetModal
        isOpen={isOpen}
        onClose={onClose}
        budgetModalRecords={budgetModalRecords}
        onBudgetDetailDelete={onBudgetDetailDelete}
      />
    </MainLayout>
  );
};
