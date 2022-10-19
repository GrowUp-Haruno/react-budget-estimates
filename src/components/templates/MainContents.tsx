import { FC } from "react";
import { BudgetList } from "../organisms/BudgetList";
import { AppType } from "../../Pages/App.hook";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";
import { MainLayout } from "../atoms/Layout";

export const MainContents: FC<AppType> = ({
  budgetModalDisclosure,
  onBudgetModalOpen,
  total,
  budgetListRecords,
  budgetModalRecords,
  onBudgetDetailDelete,
  onBudgetDetailAdd,
  onNumberInputChange,
  onStringInputChange,
  closePopButtonDisclosure,
  savePopButtonDisclosure,
  onCloseNo,
  onCloseYes,
  isUpdate,
  onModalClose,
}) => {
  return (
    <MainLayout>
      <BudgetList records={budgetListRecords} onBudgetModalOpen={onBudgetModalOpen} />
      <BudgetTotal total={total} />
      <BudgetModal
        budgetModalDisclosure={budgetModalDisclosure}
        budgetModalRecords={budgetModalRecords}
        onBudgetDetailDelete={onBudgetDetailDelete}
        onBudgetDetailAdd={onBudgetDetailAdd}
        onNumberInputChange={onNumberInputChange}
        onStringInputChange={onStringInputChange}
        closePopButtonDisclosure={closePopButtonDisclosure}
        savePopButtonDisclosure={savePopButtonDisclosure}
        onCloseNo={onCloseNo}
        onCloseYes={onCloseYes}
        isUpdate={isUpdate}
        onModalClose={onModalClose}
      />
    </MainLayout>
  );
};
