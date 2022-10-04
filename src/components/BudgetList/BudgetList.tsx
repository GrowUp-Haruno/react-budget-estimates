import { Table, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, Button } from "@chakra-ui/react";
import { FC } from "react";
import { budgetType } from "../MainContents/MainContents.model";
export const BudgetList: FC<{ budgetList: budgetType[] }> = () => {
  return (
    <TableContainer>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>カテゴリ</Th>
            <Th>小計</Th>
            <Th>詳細リンク</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>移動費</Td>
            <Td>10,000</Td>
            <Td>
              <Button>詳細</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>宿泊費</Td>
            <Td>10,000</Td>
            <Td>
              <Button>詳細</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>食費費</Td>
            <Td>10,000</Td>
            <Td>
              <Button>詳細</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>観光費</Td>
            <Td>10,000</Td>
            <Td>リンク</Td>
          </Tr>
          <Tr>
            <Td>土産代</Td>
            <Td>10,000</Td>
            <Td>リンク</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>合計</Th>
            <Th>50000</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
