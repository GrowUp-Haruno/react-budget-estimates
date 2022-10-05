import { Table, TableContainer, Th, Tr, Td, Thead, Tbody, Button } from "@chakra-ui/react";
import { FC } from "react";
import { budgetListType } from "../MainContents/MainContents.model";
export const BudgetList: FC<{ budgetlist: budgetListType }> = ({ budgetlist }) => {
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
        <Tbody>
          {budgetlist.map((budget) => (
            <Tr key={budget.category}>
              <Td>{budget.category}</Td>
              <Td>{budget.subtotal.toLocaleString("ja-JP")}</Td>
              <Td>
                <Button>詳細</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
