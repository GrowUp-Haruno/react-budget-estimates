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
}) => {
  return (
    <MainLayout>
      <BudgetList
        columnNames={["カテゴリ", "料金", ""]}
        records={budgetListRecords}
        onBadgetModalOpen={onBadgetModalOpen}
      />
      <BudgetTotal total={total} />
      <BudgetModal
        isOpen={isOpen}
        onClose={onClose}
        BudgetModalRecords={BudgetModalRecords}
      />
    </MainLayout>
  );
};
