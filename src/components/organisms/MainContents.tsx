import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetList } from "../molecules/BudgetList";
// import { recordsType } from "../../Pages/App.model";
import { AppType } from "../../Pages/App.hook";
import { BudgetTotal } from "../molecules/BudgetTotal";
import { BudgetModal } from "../molecules/BudgetModal";

export const MainContents: FC<AppType> = ({
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
