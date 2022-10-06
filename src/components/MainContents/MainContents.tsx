import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetList } from "./BudgetList";
import { BudgetModal } from "./BudgetModal";
import { BudgetTotal } from "./BudgetTotal";
import { MainContentsStyle } from "./MainContents.style";
import { useMainContents } from "./MainContents.hook";

export const MainContents: FC = () => {
  const { isOpen, onClose, total, budgetListRecords, BudgetModalRecords } = useMainContents();

  return (
    <Stack {...MainContentsStyle}>
      <BudgetList budgetListRecords={budgetListRecords} />
      <BudgetTotal total={total} />
      <BudgetModal isOpen={isOpen} onClose={onClose} BudgetModalRecords={BudgetModalRecords} />
    </Stack>
  );
};
