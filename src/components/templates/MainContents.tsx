import { FC } from "react";
import { BudgetList } from "../organisms/BudgetList";
import { AppType } from "../../Pages/App.hook";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";
import { MainLayout } from "../atoms/Layout";

export const MainContents: FC<AppType> = ({
  modalDisclosure,
  onBudgetModalOpen,
  total,
  budgetListRecords,
  budgetModalRecords,
  onBudgetDetailDelete,
  onBudgetDetailAdd,
  onNumberInputChange,
  onStringInputChange,
  popButtonDisclosure,
}) => {
  return (
    <MainLayout>
      <BudgetList records={budgetListRecords} onBudgetModalOpen={onBudgetModalOpen} />
      <BudgetTotal total={total} />
      <BudgetModal
        modalDisclosure={modalDisclosure}
        budgetModalRecords={budgetModalRecords}
        onBudgetDetailDelete={onBudgetDetailDelete}
        onBudgetDetailAdd={onBudgetDetailAdd}
        onNumberInputChange={onNumberInputChange}
        onStringInputChange={onStringInputChange}
        popButtonDisclosure={popButtonDisclosure}
      />
    </MainLayout>
  );
};
