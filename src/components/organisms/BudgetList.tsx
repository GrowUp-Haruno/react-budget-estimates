import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { ClosePopButton, DetailButton } from "../molecules/CustomButton";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetList: FC<{
  records: recordsType;
  onBudgetModalOpen: (index: number) => void;
}> = ({ records, onBudgetModalOpen }) => {
  return (
    <Container>
      <DataGrid
        columnNames={["カテゴリ", "料金", ""]}
        records={records}
        backButton={{ Component: DetailButton, callback: onBudgetModalOpen }}
      />
      <ClosePopButton />
    </Container>
  );
};
