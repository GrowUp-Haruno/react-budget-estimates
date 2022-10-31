import { FC } from "react";
import { Container } from "@chakra-ui/react";
import { DetailButton } from "../molecules/CustomButton";
import { DataGrid } from "../molecules/DataGrid";
import { BudgetListProps } from "../../commons/types";

export const BudgetList: FC<BudgetListProps> = ({ budgetListRecords, onBudgetModalOpen, isDisabled }) => {
  return (
    <Container>
      <DataGrid
        columnNames={["カテゴリ", "料金", ""]}
        records={budgetListRecords}
        backButton={{ Component: DetailButton, callback: onBudgetModalOpen }}
        isDisabled={isDisabled}
      />
    </Container>
  );
};
