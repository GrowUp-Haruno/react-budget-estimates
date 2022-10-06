import { Table, TableContainer, Th, Tr, Thead, Tbody, Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
export const BudgetList: FC<{ BudgetlistTable: ReactNode }> = ({ BudgetlistTable }) => {
  return (
    <Container textAlign="center">
      <TableContainer>
        <Table size={["sm", "md"]}>
          <Thead>
            <Tr>
              <Th>カテゴリ</Th>
              <Th>小計</Th>
              <Th isNumeric>詳細リンク</Th>
            </Tr>
          </Thead>
          <Tbody>{BudgetlistTable}</Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
