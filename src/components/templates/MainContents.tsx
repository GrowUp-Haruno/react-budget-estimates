import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetList } from "../organisms/BudgetList";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";
import { recordsType } from "../../Pages/App.model";

export const MainContents: FC<{
  isOpen: boolean;
  onClose: () => void;
  onBadgetModalOpen: (index: number) => void;
  total: number;
  budgetListRecords: recordsType;
  BudgetModalRecords: recordsType;
}> = ({
  isOpen,
  onClose,
  onBadgetModalOpen,
  total,
  budgetListRecords,
  BudgetModalRecords,
}) => {
  return (
    <Stack
      as="main"
      flexGrow={1}
      justifyContent="start"
      alignItems="center"
      spacing={8}
    >
      <BudgetList
        budgetListRecords={budgetListRecords}
        onBadgetModalOpen={onBadgetModalOpen}
      />
      <BudgetTotal total={total} />
      <BudgetModal
        isOpen={isOpen}
        onClose={onClose}
        BudgetModalRecords={BudgetModalRecords}
      />
    </Stack>
  );
};
