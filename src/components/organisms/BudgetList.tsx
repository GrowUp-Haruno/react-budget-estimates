import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryTable, PrimaryTableHead } from "../atoms/Table";
import { TableBody } from "../molecules/Table";

export const BudgetList: FC<{
  records: recordsType;
  onBadgetModalOpen: (index: number) => void;
}> = ({  records, onBadgetModalOpen }) => {
  return (
    <Container>
      <PrimaryTable
        Head={<PrimaryTableHead columnNames={["カテゴリ", "料金", ""]} />}
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
