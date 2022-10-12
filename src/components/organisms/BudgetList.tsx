import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryTable, PrimaryTableBody, PrimaryTableHead } from "../atoms/Table";
import { DetailButton } from "../molecules/Button";

export const BudgetList: FC<{
  records: recordsType;
  onBadgetModalOpen: (index: number) => void;
}> = ({ records, onBadgetModalOpen }) => {
  return (
    <Container>
      <PrimaryTable
        Head={<PrimaryTableHead columnNames={["カテゴリ", "料金", ""]} />}
        Body={
          <PrimaryTableBody
            records={records}
            OptionButtons={[
              {
                ButtonComponent: DetailButton,
                callback: onBadgetModalOpen,
              },
            ]}
          />
        }
      />
    </Container>
  );
};
