import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { DetailButton } from "../molecules/Button";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetList: FC<{
  records: recordsType;
  onBadgetModalOpen: (index: number) => void;
}> = ({ records, onBadgetModalOpen }) => {
  return (
    <Container>
      <DataGrid
        columnNames={["カテゴリ", "料金", ""]}
        records={records}
        OptionButtons={[
          {
            ButtonComponent: DetailButton,
            callback: onBadgetModalOpen,
          },
        ]}
      />
    </Container>
  );
};
