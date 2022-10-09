import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetList } from "../organisms/BudgetList";
import { AppType } from "../../Pages/App.hook";
import { BudgetTotal } from "../organisms/BudgetTotal";
import { BudgetModal } from "../organisms/BudgetModal";

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
    </Stack>
  );
};
