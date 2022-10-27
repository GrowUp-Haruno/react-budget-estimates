import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetListProps } from "../../Pages/App.hook";
import { DetailButton } from "../molecules/CustomButton";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetList: FC<BudgetListProps> = ({ budgetListRecords, onBudgetModalOpen }) => {
  return (
    <Container>
      <DataGrid
        columnNames={["カテゴリ", "料金", ""]}
        records={budgetListRecords}
        backButton={{ Component: DetailButton, callback: onBudgetModalOpen }}
      />
    </Container>
  );
};
