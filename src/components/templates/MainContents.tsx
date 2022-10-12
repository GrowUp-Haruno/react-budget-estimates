import { FC } from "react";
import { BudgetList } from "../organisms/BudgetList";
import { AppType } from "../../Pages/App.hook";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";
import { MainLayout } from "../atoms/Layout";

export const MainContents: FC<AppType> = ({
  isOpen,
  onClose,
  onBadgetModalOpen,
  total,
  budgetListRecords,
  BudgetModalRecords,
  onBadgetDetailDelete,
}) => {
  return (
    <MainLayout>
      <BudgetList records={budgetListRecords} onBadgetModalOpen={onBadgetModalOpen} />
      <BudgetTotal total={total} />
      <BudgetModal
        isOpen={isOpen}
        onClose={onClose}
        BudgetModalRecords={BudgetModalRecords}
        onBadgetDetailDelete={onBadgetDetailDelete}
      />
    </MainLayout>
  );
};
