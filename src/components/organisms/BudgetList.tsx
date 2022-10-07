import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryTable } from "../atoms/Table";
import { PrimaryTableBody, PrimaryTableHead } from "../molecules/Table";

export const BudgetList: FC<{
  columnNames: string[];
  records: recordsType;
  onBadgetModalOpen: (index: number) => void;
}> = ({ columnNames, records, onBadgetModalOpen }) => {
  return (
    <Container>
      <PrimaryTable
        Head={<PrimaryTableHead columnNames={columnNames} />}
        Body={
          <PrimaryTableBody
            records={records}
            detailButtonCallback={onBadgetModalOpen}
          />
        }
      />
    </Container>
  );
};
