import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetList } from "./BudgetList";
import { BudgetModal } from "./BudgetModal";
import { BudgetTotal } from "./BudgetTotal";
import { MainContentsStyle } from "./MainContents.style";
import { useMainContents } from "./MainContents.hook";

export const MainContents: FC = () => {
  const { isOpen, onClose, total, BudgetlistTable, BudgetModalTable } = useMainContents();

  return (
    <Stack {...MainContentsStyle}>
      <BudgetList BudgetlistTable={BudgetlistTable} />
      <BudgetTotal total={total} />
      <BudgetModal isOpen={isOpen} onClose={onClose} BudgetModalTable={BudgetModalTable} />
    </Stack>
  );
};
