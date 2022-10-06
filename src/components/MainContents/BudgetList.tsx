import { Table, TableContainer, Th, Tr, Thead, Tbody } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
export const BudgetList: FC<{ BudgetlistTable: ReactNode }> = ({ BudgetlistTable }) => {
  return (
    <TableContainer>
      <Table size={["md", "lg"]}>
        <Thead>
          <Tr>
            <Th>カテゴリ</Th>
            <Th>小計</Th>
            <Th>詳細リンク</Th>
          </Tr>
        </Thead>
        <Tbody>{BudgetlistTable}</Tbody>
      </Table>
    </TableContainer>
  );
};
