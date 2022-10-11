import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryTable, PrimaryTableHead } from "../atoms/Table";
import { TableBody } from "../molecules/Table";

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
          <TableBody
            records={records}
            optionButtons={[
              { buttonType: "detail", callback: onBadgetModalOpen },
            ]}
          />
        }
      />
    </Container>
  );
};
