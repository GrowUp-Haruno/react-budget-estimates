import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../models/modelBadget";
import { PrimaryTable } from "../Atom/Table";
export const BudgetList: FC<{
  budgetListRecords: recordsType;
}> = ({ budgetListRecords }) => {
  return (
    <Container>
      <PrimaryTable columnNames={["カテゴリ", "小計", "詳細リンク"]} records={budgetListRecords} />
    </Container>
  );
};
